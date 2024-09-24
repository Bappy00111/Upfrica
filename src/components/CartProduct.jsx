import React, { useEffect, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

// Reusable Quantity Control Component
const QuantityControl = ({ quantity, onDecrease, onIncrease }) => (
  <div className="flex items-center text-base">
    <button onClick={onDecrease} className="px-4 py-1 font-extrabold border bg-gray-100">
      -
    </button>
    <span className="font-bold bg-white py-1 px-4 border">{quantity}</span>
    <button onClick={onIncrease} className="px-4 border py-1 font-extrabold bg-gray-100">
      +
    </button>
  </div>
);

const CartProduct = () => {
  const [basket, setBasket] = useState([]);
  const navigate  = useNavigate();

  useEffect(() => {
    const storedBasket = JSON.parse(localStorage.getItem("basket")) || [];
    setBasket(storedBasket);
  }, []);

  const handleQuantityChange = (index, change) => {
    const newBasket = [...basket];
    newBasket[index].quantity = Math.max(1, newBasket[index].quantity + change);
    setBasket(newBasket);
    localStorage.setItem("basket", JSON.stringify(newBasket));
  };

  const handleRemoveProduct = (index) => {
    const newBasket = basket.filter((_, i) => i !== index);
    setBasket(newBasket);
    localStorage.setItem("basket", JSON.stringify(newBasket));
  };


  // const handleCheckOut = () =>{
  //    // লোকাল স্টোরেজ থেকে ইউজারের তথ্য খুঁজে বের করা
  //    const user = JSON.parse(localStorage.getItem('user'));


  //    if(user){
  //     // যদি ইউজার থাকে, তাহলে Checkout পেজে পাঠান
  //     useNavigate('/cartProdct')
  //    }else{
  //     navigation('/login')
  //    }
  // }

  const handleLogin = () => {
    // লোকাল স্টোরেজ থেকে ইউজারের তথ্য খুঁজে বের করা
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      // যদি ইউজার থাকে, তাহলে Checkout পেজে পাঠান
      navigate ("/checkout",{ state: { basket: basket } });
    } else {
      // যদি ইউজার না থাকে, তাহলে Login পেজে পাঠান
      navigate ("/login");
    }
  };

  return (
    <div className="lg:flex justify-center bg-gray-100 px-4 py-10">
      <div className="w-full lg:w-4/5 2xl:w-1/2 pt-10 space-y-5">
        <h1 className="text-xl xl:text-2xl font-bold tracking-wide p-2 border bg-white shadow-xl text-center">
          Shopping Basket
        </h1>
        {basket.map((product, index) => (
          <div key={index}>
            {/* Large Device Card */}
            <div className="hidden md:flex border p-8 bg-white justify-between space-x-4 text-base">
              <img className="h-20 lg:h-32 w-20 lg:w-32 rounded-md" src={product.image[0]} alt={product.title} />
              <p>{product.title.length > 15 ? `${product.title.substring(0, 15)} ...` : product.title}</p>
              <div>
                <QuantityControl
                  quantity={product.quantity}
                  onDecrease={() => handleQuantityChange(index, -1)}
                  onIncrease={() => handleQuantityChange(index, 1)}
                />
                <div className="text-center text-base">
                  <p className="font-bold">
                    {product.price.currency_iso} {product.price.cents / 100}
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-end">
                <MdDeleteOutline className="w-8 h-8 text-gray-800 cursor-pointer" onClick={() => handleRemoveProduct(index)} />
              </div>
            </div>

            {/* Small Device Card */}
            <div className="md:hidden border p-4 bg-white grid grid-cols-4 gap-2">
              <div className="col-span-1">
                <img className="h-20 w-20 rounded-md" src={product.image[0]} alt={product.title} />
              </div>
              <div className="col-span-3">
                <p className="underline">{product.title}</p>
                <div className="flex justify-between items-center mt-2">
                  <QuantityControl
                    quantity={product.quantity}
                    onDecrease={() => handleQuantityChange(index, -1)}
                    onIncrease={() => handleQuantityChange(index, 1)}
                  />
                  <div className="text-center text-base">
                    <p>
                      {product.price.currency_iso} {product.price.cents / 100}
                    </p>
                  </div>
                  <div className="flex justify-center items-end">
                    <MdDeleteOutline className="w-6 h-6 text-gray-800 cursor-pointer" onClick={() => handleRemoveProduct(index)} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="flex justify-between">
          {/* <Link to="/checkout"> */}
            <button onClick={handleLogin} className="text-base font-bold bg-[#F7C32E] px-4 py-1 rounded-3xl">
              Checkout
            </button>
          {/* </Link> */}
          <Link to="/categoryDetails">
            <button className="text-base font-bold border bg-gray-100 px-4 py-1 rounded-3xl">
              Continue shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
