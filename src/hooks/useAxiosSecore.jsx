import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

 const axiosSecore=axios.create({
    baseURL:'https://alim-world-server.vercel.app/'
})
const useAxiosSecore = () => {
    const navigate = useNavigate();
    const {logOut}=useAuth();
    axiosSecore.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token')
        // console.log('requet stopped by interceptors', token)
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, function (erros){
        return Promise.reject(erros);
    });
     
    axiosSecore.interceptors.response.use(function(response){
        return response;
    },async(erros)=>{
        const status = erros.response.status;
        // console.log('status error in the intercept', status)
        if(status ===401 || status===403){
            await logOut();
            navigate('/login')
        }
        return Promise.reject(erros)
    })
    return axiosSecore;
};

export default useAxiosSecore;