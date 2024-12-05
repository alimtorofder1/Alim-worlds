import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useProducts from '../../hooks/useProducts';
import Product from '../Produsct/Product';
import { Helmet } from 'react-helmet-async';


const Shop = () => {
  const [tabIndex , setTabindex]=useState(0)
  const [products]=useProducts();
  const Low_Price = products.filter(item=> item.price <= 400);
  const Medium_Price = products.filter(item=> item.price >= 500 && item.price <1000);
  const High_price = products.filter(item=> item.price > 1000 );
  
  return (
   <div>
        <>
      <Helmet>
        <title>Shop | Alim's World </title>
      </Helmet>
    </>
    <div>
       <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabindex(index)}>
            <TabList>
               <div className='text-center mt-10'>
               <Tab>All</Tab>
                <Tab>Low Price</Tab>
                <Tab>Medium Price</Tab>
                <Tab>High Price</Tab>
               </div>
                
            </TabList>
            <TabPanel>
               <div className='grid md:grid-cols-4 gap-14 mb-10'>
               {
                  products.map(item => <Product key={item._id} item={item}></Product>)
                }
                </div>
            </TabPanel>
            <TabPanel>
               <div className='grid md:grid-cols-4 gap-14 mb-10'>
               {
                  Low_Price.map(item => <Product key={item._id} item={item}></Product>)
                }
               </div>
            </TabPanel>
            <TabPanel>
            <div className='grid md:grid-cols-4 gap-14 mb-10'>
               {
                  Medium_Price.map(item => <Product key={item._id} item={item}></Product>)
                }
               </div>
            </TabPanel>
            <TabPanel>
            <div className='grid md:grid-cols-4 gap-14 mb-10'>
               {
                  High_price.map(item => <Product key={item._id} item={item}></Product>)
                }
               </div>
            </TabPanel>
            </Tabs>
    </div>
    </div>
  );
};

export default Shop;