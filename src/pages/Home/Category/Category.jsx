import { Link } from 'react-router-dom';
import '../../../App.css';
import useProducts from '../../../hooks/useProducts';


const Category = () => {
    return (
        
        <div id='box-1' className="box">
            <ul>
                <li className='hover:link-secondary pl-4 pt-2'><Link to={'/humidifer'}>Humidifer</Link></li>
                <li className='hover:link-secondary pl-4 pt-2'><Link to={'/fan'}>Fan</Link></li>
                <li className='hover:link-secondary pl-4 pt-2'><Link to={'/lamp'}>Lamp</Link></li>
                <li className='hover:link-secondary pl-4 pt-2'><Link to={'/powerbank'}>PowerBank</Link></li>
                <li className='hover:link-secondary pl-4 pt-2'><Link to={'/clock'}>Clock</Link></li>
                <li className='hover:link-secondary pl-4 pt-2'><Link to={'/airpods'}>Airpods</Link></li>
                <li className='hover:link-secondary pl-4 pt-2'><Link to={'/Speaker'}>Speaker</Link></li>
                <li className='hover:link-secondary pl-4 pt-2'><Link to={'/tripod'}>Tripod</Link></li>
                <li className='hover:link-secondary pl-4 pt-2'><Link to={'/mouse'}>Mouse</Link></li>
                <li className='hover:link-secondary pl-4 pt-2'><Link to={'/keyboard'}>Keyboard</Link></li>
                <li className='hover:link-secondary pl-4 pt-2'><Link to={'/mouspad'}>Mouse Pad</Link></li>
                <li className='hover:link-secondary pl-4 pt-2'><Link to={'/headset'}>Headset</Link></li>
                <li className='hover:link-secondary pl-4 pt-2'><Link to={'/mobilestand'}>Mobile Stand</Link></li>
                <li className='hover:link-secondary pl-4 pt-2'><Link to={'/smartwatch'}>Smart Watch</Link></li>
                <li className='hover:link-secondary pl-4 pt-2'><Link to={'/watch'}>Watch</Link></li>
                <li className='hover:link-secondary pl-4 pt-2'><Link to={'/toys'}>Toys</Link></li>
                <li className='hover:link-secondary pl-4 pt-2'><Link to={'/keyring'}>Key Ring</Link></li>
                <li className='hover:link-secondary pl-4 pt-2'><Link to={'/stiker'}>Stiker</Link></li>
                <li className='hover:link-secondary pl-4 pt-2'><Link to={'/wooden'}>Wooden</Link></li>
                <li className='hover:link-secondary pl-4 pt-2'><Link to={'/trimmer'}>Trimmer</Link></li>
                <li className='hover:link-secondary pl-4 pt-2'><Link to={'/mobilecover'}>Mobile Cover</Link></li>
            </ul>
        </div>
    );
};

export default Category;