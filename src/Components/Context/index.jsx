import React, { createContext, useEffect, useState } from 'react'
import { datas } from "../../data"

export const ProductContextState = createContext()

const Context = ({children}) => {

    const [ObjectApi,setObjectApi] = useState({})
    const [inputUser,setInputUser] = useState("")
    const [products,setProducts] = useState(datas.products)

    const handleFilterProducts = () => {
      if(!inputUser) return setProducts(datas.products)
      setProducts(products.filter(item => item.shop.ware_house_region_name === inputUser))
    }

    const handleChange = (e) => {
        setInputUser(p => p = e.target.value)
    }

    const handleInputPrice = () => {
      const output = []

      datas.products.forEach(item => {
        if(output.filter(ele => ele === item.sale_price_max).length > 1){
          return 
        }
  
        output.push(item.sale_price_max)
      })

      return output
    }

    useEffect(() => {
      handleFilterProducts()
    },[inputUser])


    const data = {
        handleChange,
        handleFilterProducts,
        ObjectApi,
        setProducts,
        products,
        setObjectApi,
        handleInputPrice
    }


  return (
    <ProductContextState.Provider value={data}>{children}</ProductContextState.Provider>
  )
}

export default Context