import React,{useEffect, useState, memo} from 'react'
import FetchAPI from './FetchAPI'
import Table from './pages/Table'

function Layout(){
   const [data,setData]= useState([])

   const endPoint='users'

   useEffect(()=>{
    FetchAPI(endPoint,setData)
    console.log("useEffect")
   },[])

   return (
    <>
    <Table data={data}/>
    </>
   )

}
export default memo(Layout)