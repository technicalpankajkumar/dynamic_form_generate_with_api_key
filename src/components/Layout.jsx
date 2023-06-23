import React, { useEffect, useState, memo } from 'react'
import { GetAPI, DeleteAPI } from './FetchAPI'
import ConditionalMainTable from './Tables/ConditionalMainTable'
import { useLocation, useNavigate} from 'react-router-dom'


function Layout() {
   const [apiData, setApiData] = useState([])
   const [render, setRender] = useState(false)
   const navigate = useNavigate()
                                                                   
   //delete function
   const deleteData = (id) => {
      console.log("delete console")
      let agree = window.confirm("Are your sure delete data ?.")

      if (agree) {
         DeleteAPI(id);
         setRender(!render)
         alert("data deleted!!!")
      } else {
         alert("Thanks form cancelation!!!!")
      }
   }

   //edit function
   const editData = (id) => {
      navigate(`/form/${id}?edit="me"`)
   }

   //side effect 
   useEffect(() => {
      GetAPI(setApiData)
      console.log("useEffect")
   }, [render])


   return (
      <div>
         <ConditionalMainTable apiData={apiData} deleteData={deleteData} editData={editData} />
      </div>
   )

}
export default memo(Layout)