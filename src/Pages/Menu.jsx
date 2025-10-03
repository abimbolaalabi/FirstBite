import React, { use, useEffect, useState } from "react";
import "./Menu.css";
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
  const [cart, setCart] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const navigator = useNavigate();

  const BaseUrl =
    "https://group2-firstbite-project.onrender.com/product/categories";
  const Base_Url = "https://group2-firstbite-project.onrender.com/product";
  const BaseUrlUser = `https://group2-firstbite-project.onrender.com/user/${userId}`;
  const BaseUrll = "https://group2-firstbite-project.onrender.com/cart";

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
    } else if (hour < 22) {
      return "Good Evening";
    } else {
      return "You sshould be sleeping by now!";
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

  const handleGetCart = async () => {
    try {
      const res = await axios.get(`${BaseUrll}/${userId}`);
      console.log("get user cart", res.data.cart);
      setCart(res.data.cart || []);
    } catch (err) {
      console.log("this s the post error", err);
    }
  };
  const addToCart = async (productId) => {
    try {
      const res = await axios.post(BaseUrll, {
        userId: userId,
        productId: productId,
        quantity: 1,
      });

      handleGetCart();
      toast.success("Item added to cart");
      console.log("adding cart", res.data);
    } catch (error) {
      console.log("this is error", error);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const closeDropdown = () => {
    setIsDropdownVisible(false);
  };

  const deleteCartItem = async (productId) => {
    try {
      await axios.delete(`${BaseUrll}/${userId}/${productId}`);
      toast.success("Item deleted successfully");
      handleGetCart();
    } catch (error) {
      console.error("Error deleting cart item:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchProducts();
    handleGetUserdata();
    getGreeting();
    handleGetCart();
  }, []);

  useEffect(() => {
    setFilteredProduct(
      categorySelected === "all"
        ? products
        : products.filter((product) => product.category === categorySelected)
    );
  }, [categorySelected, products]);

  useEffect(() => {}, [isDropdownVisible]);

  useEffect(() => {}, [closeDropdown]);

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
                  <span>{cart.length}</span>
                </div>
              </div>
              <div className="menu_user_icon">
                <FaRegUser />
                <div className="profile-dropdown"></div>
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
                      <div
                        className="menu-add"
                        onClick={() => addToCart(product._id)}
                      >
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
          {cart?.goods?.length <= 0 || cart?.goods === undefined ? (
            <>
              <p>No Orders Yet</p>
              <p>Add items to cart to view here</p>
              <IoCartOutline className="cart" />
            </>
          ) : (
            <div className="cart-container">
              {cart?.goods?.map((item, index) => (
                <div key={index} className="cart-item">
                  <img
                    src={item.productId?.imageUrl}
                    alt={item.productId?.description}
                    className="item-image"
                  />
                  <div className="item-details">
                    <p className="item-description">
                      {item.productId?.productName}
                    </p>
                    <p className="item-price">NGN {item.productId?.price}</p>
                    <div className="quantity-control">
                      <button onClick={() => decreaseQuantity(index)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => increaseQuantity(index)}>+</button>
                    </div>
                  </div>
                  <button
                    onClick={() => deleteCartItem(item.productId._id)}
                    className="delete-button"
                  >
                    🗑️
                  </button>
                </div>
              ))}

              <div className="cart-total">
                <p>Total</p>
                <p>
                  NGN
                  {cart?.totalPrice}
                </p>
              </div>

              <button
                className="checkout-button"
                onClick={() => navigator("/ordersummary")}
              >
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
