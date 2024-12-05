import useProducts from "../../hooks/useProducts";
import Product from "../Produsct/Product";


const Trimmer = () => {
    const [products]=useProducts();
    const trimmer = products.filter(item => item.category === 'trimmer')
    return (
        <div>
            {
                 trimmer.map(item => <Product key={item._id} item={item}></Product>)
            }
        </div>
    );
};

export default Trimmer;