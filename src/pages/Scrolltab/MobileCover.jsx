import useProducts from "../../hooks/useProducts";
import Product from "../Produsct/Product";


const MobileCover = () => {
    const [products]=useProducts();
    const mobilecover = products.filter(item => item.category === 'mobilecover')
    return (
        <div>
            {
                 mobilecover.map(item => <Product key={item._id} item={item}></Product>)
            }
        </div>
    );
};

export default MobileCover;