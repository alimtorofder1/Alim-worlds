import useProducts from "../../hooks/useProducts";
import Product from "../Produsct/Product";

const Speaker = () => {
    const [products]=useProducts();
    const speaker = products.filter(item => item.category === 'speaker')
    return (
        <div>
            {
                 speaker.map(item => <Product key={item._id} item={item}></Product>)
            }
        </div>
    );
};

export default Speaker;