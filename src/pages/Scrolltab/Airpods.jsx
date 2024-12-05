import useProducts from "../../hooks/useProducts";
import Product from "../Produsct/Product";


const Airpods = () => {
    const [products]=useProducts();
    const airpods = products.filter(item => item.category === 'airpods')
    return (
        <div>
            {
                 airpods.map(item => <Product key={item._id} item={item}></Product>)
            }
        </div>
    );
};

export default Airpods;