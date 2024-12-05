import useProducts from "../../hooks/useProducts";
import Product from "../Produsct/Product";

const Lamp = () => {
    const [products]=useProducts();
    const lamp = products.filter(item => item.category === 'lamp')
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 gap-16 mt-10'>
            {
                lamp.map(item => <Product key={item._id} item={item}></Product>)
            }
        </div>
    );
};

export default Lamp;