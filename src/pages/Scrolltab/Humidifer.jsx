import useProducts from "../../hooks/useProducts";
import Product from "../Produsct/Product";


const Humidifer = () => {
    const [products]=useProducts();
    const humidifier = products.filter(item => item.category === 'humidifier')
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 gap-16 mt-10'>
            {
                humidifier.map(item => <Product key={item._id} item={item}></Product>)
            }
        </div>
    );
};

export default Humidifer;