import { useState } from 'react';
import './App.css'
import Carts from './components/Carts/Carts';
import Products from './components/Products/Products';
import Product from './components/Product/Product';
import Cookings from './components/Product/Cookings/Cookings';

function App() {
  const [carts, setCarts] = useState([]);
  const [cooks, setCooks] = useState([]);
  const [runs, setRuns] = useState([]);
  console.log(runs);


  // const handleCart = p => {
  //   const isExist = carts.find(cart => cart.id === p.id);
  //   if(!isExist){
  //       setCarts([...carts, p])
  //   }
  //   else{
  //     alert('already exist')
  //   }
  //   // const newCarts = [...carts, p ]
  //   // setCarts(newCarts);
  // }
  // console.log(carts);

//   const handleDelete = id => {
//     const newCarts = carts.filter(cart => cart.id !== id);
//     setCarts(newCarts);
// }


  const handleCook = P => {
    const isExist = cooks.find(cook => cook.id === P.id );
    if(!isExist){
        setCooks([...cooks, P])
    }
    else{
      alert('already exist')
    }
  }

  const handlePrepare = (id, cook) => {
    // console.log(cook);
    // console.log(id);
    const newCooks = cooks.filter(cook => cook.recipe_id !== id);
      if(newCooks){
        setCooks(newCooks);
      }
      else{
        setRuns([...runs, cook]);
      }
}


  const handleCurrent = p => {
    console.log('going on', p);
  }


  return (
    <>
      <div>
      <div className='flex justify-around'>
      <Products
      handleCook={handleCook}></Products>
      <div className='mt-52'>
      <Carts
      cooks={cooks} 
      carts={carts}
      handlePrepare={handlePrepare}
      handleCurrent= {handleCurrent}
      ></Carts>
      <Cookings
      runs={runs}
      ></Cookings>
      </div>
      </div>
      </div>
    </>
  )
}

export default App



