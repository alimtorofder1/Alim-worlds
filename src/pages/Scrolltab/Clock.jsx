import useProducts from "../../hooks/useProducts";
import Product from "../Produsct/Product";


const Clock = () => {
    const [products]=useProducts();
    const clock = products.filter(item => item.category === 'clock')
    return (
        <div>
            {
                 clock.map(item => <Product key={item._id} item={item}></Product>)
            }
        </div>
    );
};

export default Clock;