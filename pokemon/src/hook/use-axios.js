import axiosInstance from "../helper/axios-instace";
import { useState, useEffect } from "react";

export default function useAxios(configRequest) {
    const {axiosInstance, method, url, othersConfig = {} } = configRequest
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')


    
}