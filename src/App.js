import { useContext } from 'react';
import './App.css';
import {ProductContextState} from "./Components/Context"
import {datas} from "./data"

function App() {
  const {products,handleChange,handleInputPrice} = useContext(ProductContextState)
  datas.typeList[13].attribute_value.map(item =>console.log(item))

  
  return (
    <div>
      {
        products.map((item,i) => {
          return <h6 key={i}>{item.name}</h6>
        })
      }
      
      {
        datas.typeList[0].attribute_value.map((item,i) => {
          return <div key={i}>{item.option_name}  <input type={"checkbox"} value={"TP.HCM"}  onChange={handleChange}/> </div>
        })
      }
      {
        <div > <input type={"checkbox"} value={45000}  onChange={handleChange}/> </div>
      }
      {/* {
        handleInputPrice()?.map((item,i) => {
          return <div key={i}> {item} <input type={"checkbox"} value={item}  onChange={handleChange}/> </div>
        })
      } */}
      {
        datas.typeList[13].attribute_value.map((item,i) =>{
          return <div>{item.gtprice} {">"} {item.ltprice} <input type={"checkbox"} value={i} /> </div>
        })
      }
     
      
    </div>
  );
}

export default App;
