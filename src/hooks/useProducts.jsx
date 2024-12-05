import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useAxisPublic from "./useAxisPublic";


const useProducts = () => {
  const axiosPublic = useAxisPublic();
    // const [products , setproducts] = useState([]);
    // const [loading , setloading] = useState(true);
    // useEffect(()=>{
    //   fetch('http://localhost:5000/product')
    //   .then(res => res.json())
    //   .then(data =>{
    //         setproducts(data)
    //         setloading(false)
    //   })
    // },[])
    const {data: product = [], isPendig: loading , refetch}=useQuery({
      queryKey:['product'],
      queryFn: async()=>{
        const res = await axiosPublic.get('/product');
        return res.data;
      }
    })
    return [product , loading , refetch]
};

export default useProducts;