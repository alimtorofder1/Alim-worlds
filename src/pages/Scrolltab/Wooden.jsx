import useProducts from "../../hooks/useProducts";
import Product from "../Produsct/Product";


const Wooden = () => {
    const [products]=useProducts();
    const wooden = products.filter(item => item.category === 'wooden')
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 gap-16 mt-10'>
            {
                 wooden.map(item => <Product key={item._id} item={item}></Product>)
            }
        </div>
    );
};

export default Wooden;