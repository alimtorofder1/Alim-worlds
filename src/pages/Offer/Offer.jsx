import { Helmet } from "react-helmet-async";
import useProducts from "../../hooks/useProducts";
import Product from "../Produsct/Product";


const Offer = () => {
    const [products , loading]=useProducts();
    const offer = products.filter(item=> item.category === "offer");
    return (
        <div>
             <>
      <Helmet>
        <title>Offers | Alim's World </title>
      </Helmet>
    </>
        
        <div className='grid md:grid-cols-4 gap-14 mb-10 mt-14 '>
        {
            offer.map(item => <Product key={item._id} item={item}></Product>)
        }
    </div>
    </div>
    );
};

export default Offer;