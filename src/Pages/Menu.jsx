import React, { useEffect, useState } from "react";
import "./Menu.css";
import { FaRegUser } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import { MdShoppingCart } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import axios from "axios";

const Menu = () => {
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [categorySelected, setCategorySelected] = useState("all");
  const [loading, setLoading] = useState(false);
  const userId = JSON.parse(sessionStorage.getItem("userId"));
  const [user, setUser] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  // console.log("this is the user", products);

  const BaseUrl =
    "https://group2-firstbite-project.onrender.com/product/categories";
  const Base_Url = "https://group2-firstbite-project.onrender.com/product";
  const BaseUrlUser = `https://group2-firstbite-project.onrender.com/user/${userId}`;

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

  useEffect(() => {
    fetchCategories();
    fetchProducts();
    handleGetUserdata();
    getGreeting();
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
      <div className="menu_Container">
        <div className="menu_wrapper">
          <div className="menu_wrap1">
            <div className="Bite_logo">
              <p>FirstBite.</p>
            </div>

            <div className="Location_holder">
              <CiLocationOn className="location_icon" />
              <p>{user?.deliveryAddress || "No Address Set"}</p>
            </div>
          </div>

          <div className="menu_wrap2">
            <div className="Input_holder_search">
              <div className="Input_search_container">
                <IoSearchOutline />
                <input
                  type="text"
                  placeholder="What would you like for breakfast?"
                />
              </div>
            </div>

            <div className="menu_cart_icon">
              <div className="cart_icon_holder">
                <div className="cart_icon">
                  <MdShoppingCart />
                </div>
                <div className="cart_count">
                  <span>0</span>
                </div>
              </div>
              <div className="menu_user_icon">
                <FaRegUser />
              </div>
            </div>
          </div>
        </div>
      </div>

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
                      <div className="menu-add">
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
          <p>No Orders Yet</p>
          <p>Add items to cart to view here</p>
          <IoCartOutline className="cart" />
        </div>
      </div>
    </div>
  );
};

export default Menu;
