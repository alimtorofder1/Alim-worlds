import useProducts from "../../hooks/useProducts";
import Product from "../Produsct/Product";


const Toys = () => {
    const [products]=useProducts();
    const toys = products.filter(item => item.category === 'toys')
    return (
        <div>
            {
                 toys.map(item => <Product key={item._id} item={item}></Product>)
            }
        </div>
    );
};

export default Toys;