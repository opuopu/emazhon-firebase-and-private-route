import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    // const {result,count} = useLoaderData();
    const[page,setpage] = useState(0)
    const [size,setsize] = useState(10)
    const [result,setresult] = useState([])
    const [count,setcount] = useState(0)
    useEffect(()=>{
  fetch(`http://localhost:3000/products?page=${page}&size=${size}`)
  .then(res=>res.json())
  .then(data=>{
    setresult(data.result)
    setcount(data.count)
  })
    },[page,size])
    const [cart, setCart] = useState([]);

    let pages = Math.ceil(count/size)

    const clearCart = () =>{
        setCart([]);
        deleteShoppingCart();
    }

    useEffect( () =>{
        const storedCart = getStoredCart();
        const ids = Object.keys(storedCart)
        console.log(ids)
        const savedCart = [];
        fetch(`http://localhost:3000/productsbyid`,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(ids)
        })
        .then(res=>res.json())
        .then(data=>{
            for(const id in storedCart){
                const addedProduct =data.find(product => product._id === id);
                if(addedProduct){
                    const quantity = storedCart[id];
                    addedProduct.quantity = quantity;
                    savedCart.push(addedProduct);
                }
            }
            setCart(savedCart);
        })
   
      
    }, [result])

    const handleAddToCart = (selectedProduct) =>{
        console.log(selectedProduct);
        let newCart = [];
        const exists = cart.find(product => product._id === selectedProduct._id);
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else{
            const rest = cart.filter(product => product._id !== selectedProduct._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        
        setCart(newCart);
        addToDb(selectedProduct._id);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    result.map(product=><Product 
                        key={product._id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart clearCart={clearCart} cart={cart}>
                    <Link to="/orders">
                        <button>Review Order</button>
                    </Link>
                </Cart>
            </div>
            <div className="pagination">
                {
                    [...Array(pages).keys()].map(number=><button onClick={()=>setpage(number)} className={page==number && 'selected'} key={number}>
                              {number}
                    </button>)
                }
             <select name="" id="" onChange={(e)=>setsize(e.target.value)}>
                <option value="5">5</option>
                <option value="10" selected>10</option>
                <option value="15">15</option>
                <option value="20"></option>
             </select>
            </div>
        </div>
    );
};

export default Shop;