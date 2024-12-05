
import useProducts from '../../hooks/useProducts';
import Product from '../Produsct/Product';

const SmarWatch = () => {
    const [products]=useProducts();
    const smarwatch = products.filter(item => item.category === 'smarwatch')
    return (
        <div>
            {
                 smarwatch.map(item => <Product key={item._id} item={item}></Product>)
            }
        </div>
    );
};

export default SmarWatch;