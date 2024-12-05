import useProducts from "../../hooks/useProducts";
import Product from "../Produsct/Product";


const Keyboard = () => {
    const [products]=useProducts();
    const keyboard = products.filter(item => item.category === 'keyboard')
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 gap-16 mt-10'>
            {
                 keyboard.map(item => <Product key={item._id} item={item}></Product>)
            }
        </div>
    );
};

export default Keyboard;