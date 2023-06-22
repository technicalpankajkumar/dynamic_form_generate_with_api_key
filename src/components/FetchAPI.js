
export default function FetchAPI(endPoint,setVariable){
    let promise = fetch(`${import.meta.env.VITE_BASE_URL}${endPoint ? endPoint : ''}`)
    promise.then(resp => resp.json().then(res => setVariable(res)))
    promise.catch(err=> {
        throw new Error(err)
    })
}