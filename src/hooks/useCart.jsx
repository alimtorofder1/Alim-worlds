import { useQuery } from "@tanstack/react-query";
import useAxiosSecore from "./useAxiosSecore";
import useAuth from "./useAuth";


const useCart = () => {
   const axiosSecore = useAxiosSecore();
   const { user }=useAuth();
   const { refetch, data: cart = [] } = useQuery({
    queryKey:['cart', user?.email],
    queryFn: async () =>{
        const res = await axiosSecore.get(`/carts?email = ${user.email}`);
        return res.data
    }
   })
   return [cart ,refetch]
};

export default useCart;