import useProducts from "../../hooks/useProducts";
import Product from "../Produsct/Product";


const Headset = () => {
    const [products]=useProducts();
    const headset = products.filter(item => item.category === 'headset')
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 gap-16 mt-10'>
            {
                 headset.map(item => <Product key={item._id} item={item}></Product>)
            }
        </div>
    );
};

export default Headset;