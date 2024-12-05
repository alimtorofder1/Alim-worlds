import axios from "axios";

const AxisPublic = axios.create({
    baseURL:'http://localhost:5000'
})

const useAxisPublic = () => {
    return AxisPublic
};

export default useAxisPublic;