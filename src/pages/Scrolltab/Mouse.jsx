
import useProducts from '../../hooks/useProducts';
import Product from '../Produsct/Product';

const Mouse = () => {
    const [products]=useProducts();
    const mouse = products.filter(item => item.category === 'mouse')
    return (
        <div>
            {
                 mouse.map(item => <Product key={item._id} item={item}></Product>)
            }
        </div>
    );
};

export default Mouse;