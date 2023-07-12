import axiosInstance from "../helper/axios-instace";
import { useState, useEffect } from "react";

export default function useAxios(configRequest) {
    const {axiosInstance, method, url, othersConfig = {} } = configRequest
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() =>{
        const fetchData = async () => {
            try { 
                const res = await axiosInstance[method.toLowerCase()](url, {...othersConfig,
                
                
                })

                console.log(res.data)
                setData(res.data)

            } catch (err){
                console.log(err.message)
                setError(err.data)
            
            }finally{
                setLoading(false)
            }
        } 
        fetchData()
    },[])

return [data, loading, error]

}