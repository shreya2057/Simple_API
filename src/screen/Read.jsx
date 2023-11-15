import { useGetDataQuery } from "../redux/api/api";

function Read(){
    const {isLoading, isError, data, isSuccess} = useGetDataQuery()
    console.log(isSuccess)
    if(isSuccess){
        data.map((item, index)=>console.log(item))
    }
    console.log(data)
    return <>
        <h1>Read Screen</h1>
        {
            isSuccess 
            && 
            data.map((item, index)=><div key={index}>{item.title}</div>)
        }
        {
            isLoading 
            && 
            <div>Loading...</div>
        }
        {
            isError 
            && 
            <div>Error</div>
        }
    </>
}
export default Read;