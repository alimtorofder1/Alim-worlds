import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecore from "./useAxiosSecore";


const useAdmin = () => {
    const {user} = useAuth();
    const axiosSecore = useAxiosSecore();
    const {data: isAdmin , isPending: isAdminLoading}= useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async()=>{
            const res = await axiosSecore.get(`/users/admin/${user.email}`);
            console.log(res.data);
            return res.data?.admin;
        }
    })
    return [isAdmin , isAdminLoading]
};

export default useAdmin;