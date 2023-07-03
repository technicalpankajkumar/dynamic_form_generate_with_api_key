
export function GetAPI(setVariable){

    fetch(`${import.meta.env.VITE_BASE_URL}`).then(resp => {
        resp.json().then(res => {
            Array.isArray(res) ? setVariable(res) : setVariable(res[Object.keys(res)[0]])
        })
    }).catch(err=> {
        throw new Error(err)
    })
}

export function GetAPI_ID(setVariable,id=''){

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

export function UpdateAPI(id,payload){
    console.log(id)
   fetch(`${import.meta.env.VITE_BASE_URL}/${id}`,{
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)}
        ).then(resp => resp.json().then(res=>console.log("data update"))).catch(err =>{
            throw new Error(err)
        })
}