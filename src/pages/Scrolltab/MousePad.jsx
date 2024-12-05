import useProducts from "../../hooks/useProducts";
import Product from "../Produsct/Product";


const MousePad = () => {
    const [products]=useProducts();
    const mousepad = products.filter(item => item.category === 'mousepad')
    return (
        <div>
            {
                 mousepad.map(item => <Product key={item._id} item={item}></Product>)
            }
        </div>
    );
};

export default MousePad;