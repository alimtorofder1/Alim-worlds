import useProducts from "../../hooks/useProducts";
import Product from "../Produsct/Product";


const Tripod = () => {
    const [products]=useProducts();
    const tripod = products.filter(item => item.category === 'tripod')
    return (
        <div>
            {
                 tripod.map(item => <Product key={item._id} item={item}></Product>)
            }
        </div>
    );
};

export default Tripod;