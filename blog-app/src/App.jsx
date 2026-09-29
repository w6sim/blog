import React from 'react'
import './App.css'
import { useEffect , useState } from 'react';

function App() {

  const [products, setProducts] = useState([]);

  useEffect(_ => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then((json) => setProducts(json.products));
  }, [])

  return (
    <>
      <header className='font-bold text-center p-5 text-4xl'>
        
      </header>
      <main className='py-5'>
        <div className="container p-5 mx-auto text-center">
          <h2 className='font-bold text-2xl'>All Products</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos itaque?</p>
        </div>

        <div className='container mx-auto my-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3 xlg:grid-cols-4'>

          {
            products.map((product) =>
              <div className="mx-5 border text-center rounded-3xl shadow lg:shadow hover:bg-gray-100 p-5">
                <img src={product.thumbnail} alt="" /> 
                <h3 className='font-bold'>{product.title}</h3>
                <p className='line-clamp-2'>{product.description}</p>
                <button onClick = {_ => setExpanded(!expanded)}
                  className='text-blue-500 text-sm mt-2 font-bold'>
                    {expanded ? 'عرض المزيد' : 'عرض أقل...'}
                  </button>
                <p>{product.price}</p>
              </div>
            )
          }


        </div>
      </main>
    </>
  )
}

export default App