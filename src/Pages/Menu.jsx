import React, { useEffect, useState } from "react";
import "./Menu.css";
import { FaPlus } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import axios from "axios";
import NewHeader from "../Components/NewHeader/NewHeader";

const Menu = () => {
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [categorySelected, setCategorySelected] = useState("all");
  const [loading, setLoading] = useState(false);
  const userId = JSON.parse(sessionStorage.getItem("userId"));
  const [user, setUser] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [cart, setCart] = useState([])
  // console.log("this is the user", products);

  const BaseUrl =
    "https://group2-firstbite-project.onrender.com/product/categories";
  const Base_Url = "https://group2-firstbite-project.onrender.com/product";
  const BaseUrlUser = `https://group2-firstbite-project.onrender.com/user/${userId}`;
  const BaseUrll = "https://group2-firstbite-project.onrender.com/cart"

  // Handle selecting an address from suggestions
  const handleGetUserdata = async () => {
    try {
      const res = await axios.get(BaseUrlUser);
      setUser(res?.data?.data);
    } catch (err) {
      console.log("this s the post error", err);
    }
  };
  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) {
      return "Good Morning";
    } else if (hour < 18) {
      return "Good Afternoon";
    } else if (hour < 18) {
      return "Good Afternoon";
    } else if (hour < 23) {
      return "Good Evening";
    } else {
      return "Good Night";
    }
  };
  // Fetch Categories
  const fetchCategories = async () => {
    try {
      const res = await axios.get(BaseUrl);
      setCategory(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch Products
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(Base_Url);
      setProducts(response.data.data);
      setFilteredProduct(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  //fetching usercart
  // adding to cart

  const fetchCart = async () => {
    try {
      const res = await axios.get(`${BaseUrll}/${userId}`);
      setCart(res.data.data || [])
    } catch (error) {
      console.log("fetch cart error", error)
    }
  }
  const addToCart = async (productId) => {
    try {
      const res = await axios.post(BaseUrll,
        {
          userId: userId,
          productId: productId,
          quantity: 1,
        }
      );

      setCart((prev) => [...prev, res.data.item || { productId, quantity: 1 }]);

      console.log("adding cart", res.data)
    } catch (error) {
      console.log("this is error", error)
    }
  }

  useEffect(() => {
    fetchCategories();
    fetchProducts();
    handleGetUserdata();
    getGreeting();
    fetchCart();
  }, []);

  useEffect(() => {
    setFilteredProduct(
      categorySelected === "all"
        ? products
        : products.filter((product) => product.category === categorySelected)
    );
  }, [categorySelected, products]);

  return (
    <div className="menu-container">
       <NewHeader/>
      <div className="menu-section">
        <div className="menu-items">
          <h1>{`${getGreeting()}, ${user ? user.fullName : "Guest"}!!`}</h1>
          <div className="menu-pic">
            <h1>Menu</h1>
            <p>
              Quickly order your favorite breakfast items and get them delivered
            </p>
          </div>
          <div className="menu-btn">
            <button
              className={categorySelected === "all" ? "active" : ""}
              onClick={() => setCategorySelected("all")}
            >
              All
            </button>

            {category.map((item, index) => (
              <button
                key={index}
                className={categorySelected === item ? "active" : ""}
                onClick={() => setCategorySelected(item)}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Product cards */}
          <div className="menu-card-wrapper">
            {loading ? (
              <p>Loading...</p>
            ) : (
              filteredProduct?.map((product) => {
                {
                  /* console.log("product", product.productImages[0].imageUrl); */
                }
                return (
                  <div className="menu-card" key={product._id}>
                    <div
                      className="menu-img"
                      style={{
                        backgroundImage: `url(${product?.productImages[0]?.imageUrl})`,
                      }}
                    >
                      <p>{product.category}</p>
                    </div>

                    <div className="menu-textwrapper">
                      <div className="menu-text">
                        <p>{product.description}</p>
                        <h4>NGN {product.price}</h4>
                      </div>
                      <div className="menu-add" onClick={() => addToCart(product._id)}>

                        <FaPlus />
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Right side - Cart */}
        <div className="menu-cart">
          <h2>Cart</h2>
          {cart.length === 0 ? (
            <>
              <p>No Orders Yet</p>
              <p>Add items to cart to view here</p>
              <IoCartOutline className="cart" />
            </>
          ) : (
            <div className="cart-container">
              {cart.map((item, index) => (
                <div key={index} className="cart-item">
                  <img src={item.productId?.imageUrl} alt={item.productId?.description} className="item-image" />
                  <div className="item-details">
                    <p className="item-description">{item.productId?.description}</p>
                    <p className="item-price">NGN {item.productId?.price}</p>
                    <div className="quantity-control">
                      <button onClick={() => decreaseQuantity(index)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => increaseQuantity(index)}>+</button>
                    </div>
                  </div>
                  <button onClick={() => removeItem(index)} className="delete-button">🗑️</button>
                </div>
              ))}

              <div className="cart-total">
                <p>Total</p>
                <p>NGN{cart.reduce((sum, item) => sum + item.productId?.price * item.quantity, 0)}</p>
              </div>

              <button className="checkout-button">Checkout</button>
            </div>

          )}
//cart
        </div>
      </div>
    </div>
  );
};

export default Menu;
