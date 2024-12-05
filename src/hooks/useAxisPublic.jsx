import axios from "axios";

const AxisPublic = axios.create({
    baseURL:'https://alim-world-server.vercel.app/'
})

const useAxisPublic = () => {
    return AxisPublic
};

export default useAxisPublic;