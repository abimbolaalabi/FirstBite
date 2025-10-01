import React, { useEffect, useState } from 'react'
import "./NewMenu.css"
import axios from 'axios'
import { FaPlus } from "react-icons/fa";

const NewMenu = () => {
  const [category, setcategory] = useState([])
  const [products, setProducts] = useState([])
  const [filteredProduct, setFilteredProduct] = useState([])
  const [categorySelected, setCategorySelected] = useState("all")
  const [loading, setLoading] = useState(false)
  const fetchCategories = async () => {
    try {
      const response = await axios.get("https://group2-firstbite-project.onrender.com/product/categories")
      setcategory(response.data.data)
      console.log(response.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  const fetchProducts = async () => {
    try {
      setLoading(true)
      const response = await axios.get("https://group2-firstbite-project.onrender.com/product")
      setProducts(response.data.data)
      setFilteredProduct(response.data.data)
      console.log(response.data.data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCategories()
    fetchProducts()
  }, [])

  useEffect(() => {
    setFilteredProduct(
      categorySelected === "all" ? products :
        products.filter((product) => product.category === categorySelected)
    )
  }, [categorySelected, products])
  return (
    <div className='new-menu-wrapper'>

      <div className='new-menu-pic'></div>
      <div className='new-menu-container'>
        <div className='new-menu-wrapped'>
          <div className='new-menu-btn'>
            <button onClick={() => setCategorySelected("all")}>All</button>
            {
              category.map((item, _id) => <button onClick={() => setCategorySelected(item)} key={item._id}>{item}</button>)
            }
          </div>g

          {
            loading ? (<p>Loading...</p>) : (
              <div  className= "card-wrapper">
                {
                  filteredProduct.map((product) => (
                    <div className='new-menu-card' key={product._id}>
                      <div className='new-menu-img'>
                        <p>{product.category}</p>
                      </div>
                      <div className='new-menu-textwrapper'>
                        <div className='new-menu-text'>
                          <p>{product.description}</p>
                          <h4>NGN 3,500</h4>
                        </div>
                        <div className='new-menu-add'>
                          <p>< FaPlus/></p>
                        </div>

                      </div>

                    </div>

                  ))
                }

              </div>
            )
          }


        </div>

      </div>

    </div>


  )
}

export default NewMenu
