import useProducts from "../../hooks/useProducts";
import Product from "../Produsct/Product";


const MobileStand = () => {
    const [products]=useProducts();
    const mobilestand = products.filter(item => item.category === 'mobilestand')
    return (
        <div>
            {
                 mobilestand.map(item => <Product key={item._id} item={item}></Product>)
            }
        </div>
    );
};

export default MobileStand;