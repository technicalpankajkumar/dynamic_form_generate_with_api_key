
export function GetAPI(setVariable,id=''){
    // ${endPoint ? endPoint : ''}`

    fetch(`${import.meta.env.VITE_BASE_URL}/${id ? id : ''}`).then(resp => {
        resp.json().then(res => {
            setVariable(res)
        })
    }).catch(err=> {
        throw new Error(err)
    })
}



export function DeleteAPI(id){
    fetch(`${import.meta.env.VITE_BASE_URL}/${id}`, {
        method: 'DELETE',
      })
      .then(res => res.json())
      .then(()=>console.log("deleteData"));
}