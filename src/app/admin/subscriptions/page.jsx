'use client'
import EmailList from '@/components/adminComponents/EmailList'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
const page = () => {
  const [data, setData] = useState([])

  const fetchData = async () => {
    const response = await axios.get('/api/email');
    console.log(response)
    setData(response.data.emails)

  }
  const deleteEmail = async (id) => {
    const response = await axios.delete('/api/email', {
      params: {
        id: id
      }
    })

    toast.success("email deleted!");
    fetchData();
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='w-full mx-auto'>
      <div className='my-5 overflow-x-auto mx-5'>
        <h2 className='text-2xl font-medium text-left'>Subscriptions</h2>
        <table className='w-full text-sm text-gray-500 border my-6 border-slate-800'>
          <thead>
            <tr>
              <th>Email</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return <EmailList key={index} email={item.email} date={item.date} id={item._id} deleteEmail={deleteEmail} />
            })}

          </tbody>
        </table>
      </div>

    </div>
  )
}

export default page
