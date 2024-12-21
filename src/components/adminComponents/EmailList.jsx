

const EmailList =({email , date , id  , deleteEmail})=>{
     const EmailDate  = new Date(date);
     

    return(
        <>
        <tr className = 'border border-slate-800'>
         <td className="text-center px-6 py-3 text-slate-700 border-r border-slate-700">{email ? email : 'no email'}</td>
         <td className="text-center px-6 py-3 text-slate-700 border-r border-slate-700">{EmailDate ? EmailDate.toDateString(): 'no email found'}</td>
         <td onClick ={()=>deleteEmail(id)} className="text-center px-6 py-3 text-red-700">x</td>

             </tr>
        </>
    )
}
export default EmailList ;