import useProducts from "../../hooks/useProducts";
import Product from "../Produsct/Product";

const Fan = () => {
    const [products]=useProducts();
    const fan = products.filter(item => item.category === 'fan')
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 gap-16 mt-10'>
            {
                 fan.map(item => <Product key={item._id} item={item}></Product>)
            }
        </div>
    );
};

export default Fan;