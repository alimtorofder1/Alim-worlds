import useProducts from "../../hooks/useProducts";
import Product from "../Produsct/Product";


const KeyRing = () => {
    const [products]=useProducts();
    const keyring = products.filter(item => item.category === 'keyring')
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 gap-16 mt-10'>
            {
                 keyring.map(item => <Product key={item._id} item={item}></Product>)
            }
        </div>
    );
};

export default KeyRing;