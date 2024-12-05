import useProducts from "../../hooks/useProducts";
import Product from "../Produsct/Product";


const PowerBank = () => {
    const [products]=useProducts();
    const powerbank = products.filter(item => item.category === 'powerbank')
    return (
        <div>
            {
                 powerbank.map(item => <Product key={item._id} item={item}></Product>)
            }
        </div>
    );
};

export default PowerBank;