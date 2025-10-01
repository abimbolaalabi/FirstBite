import React, { useEffect, useState } from 'react'
import "./NewMenu.css"
import axios from 'axios'
import { FaPlus } from "react-icons/fa";

const NewMenu = () => {
  const [categories, setcategories] = useState([])
  const [products, setProducts] = useState([])
  const [filteredProduct, setFilteredProduct] = useState([])
  const [categorySelected, setCategorySelected] = useState("all")
  const [loading, setLoading] = useState(false)
  const fetchCategories = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products/categories")
      setcategories(response.data)
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const fetchProducts = async () => {
    try {
      setLoading(true)
      const response = await axios.get("https://fakestoreapi.com/products")
      setProducts(response.data)
      setFilteredProduct(response.data)
      console.log(response.data)
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
              categories.map((item, index) => <button onClick={() => setCategorySelected(item)} key={index}>{item}</button>)
            }
          </div>

          {
            loading ? (<p>Loading...</p>) : (
              <div  className= "card-wrapper">
                {
                  filteredProduct.map((product) => (
                    <div className='new-menu-card' key={product.id}>
                      <div className='new-menu-img'>
                        <p>{product.category}</p>
                      </div>
                      <div className='new-menu-textwrapper'>
                        <div className='new-menu-text'>
                          <p>{product.title}</p>
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
