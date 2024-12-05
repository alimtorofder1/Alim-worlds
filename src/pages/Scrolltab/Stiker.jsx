import useProducts from "../../hooks/useProducts";
import Product from "../Produsct/Product";


const Stiker = () => {
    const [products]=useProducts();
    const stiker = products.filter(item => item.category === 'stiker')
    return (
        <div>
            {
                 stiker.map(item => <Product key={item._id} item={item}></Product>)
            }
        </div>
    );
};

export default Stiker;