import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.jpeg'
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { BsTelephoneOutboundFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { BsChevronRight } from "react-icons/bs";
const Footer = () => {
    return (
        <footer className="footer bg-base-200 text-base-content p-10">
  <aside>
            <div className='flex'>
            <div className="avatar">
            <div className="w-24 rounded">
            <div className="avatar">
            <div className="w-24 rounded">
                <img src={logo} />
            </div>
            </div>
            </div>
            </div>
           <div className='text-5xl ml-5 font-bold'>
           <h2>Alim's <br /> World</h2>
           </div>
        </div>
    <p>
    Your ultimate destination for the latest <br /> gadgets and cutting-edge lighting products <br />in  Bangladesh. Discover our curated selection <br /> to your  world and stay ahead in the digital realm.
    </p>
    <div className='flex text-3xl gap-2 mt-4'>
        <a href="https://www.facebook.com/profile.php?id=61566932700309&mibextid=ZbWKwL"><FaFacebook /></a>
        <Link><FaYoutube /></Link>
        <a href="https://www.facebook.com/profile.php?id=61566932700309&mibextid=ZbWKwL"><FaInstagram /></a>
        <a href="https://www.tiktok.com/@abid__hasan__28?is_from_webapp=1&sender_device=pc"><FaTiktok /></a>
  </div>
  </aside>
  <nav>
    <h6 className="footer-title">Quick Links</h6>
    <a className="link link-hover">Shop</a>
    <a className="link link-hover">Offers</a>
    <a className="link link-hover">Top Sales</a>
    <a className="link link-hover">All Products</a>
  </nav>
  <nav>
    <h6 className="footer-title">About Business</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Privacy Policy</a>
    <a className="link link-hover">Terms & Conditions</a>
  </nav>
  <nav>
    <h6 className="footer-title">Contact Us</h6>
    <a className="link link-hover">Maderganj, Jamalpur <br /> Dhaka Bangladesh</a>
    <p className='flex mt-7'><BsTelephoneOutboundFill /><span className='-my-1 mx-3'> 01820-114924</span></p>
    <a className="link link-hover flex "><IoMdMail /><span className=' -my-1 mx-3'> alimtorofder43@gmail.com</span></a>
  </nav>
</footer>
    );
};

export default Footer;