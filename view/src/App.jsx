import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  function getData() {
    fetch('http://localhost:5000/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }
  useEffect(() => {
    getData()
    setIsLoading(!isLoading)
  }, [])



  return (
    <>
      {isLoading ? <h1>Loading...</h1> :
        <div className="wrapper">
          {products.map(item => (
            <div className="card">
              <div className="img">
                <img src={item.image} alt="" />
              </div>
              <div className="texts">
                <h2>{item.title}</h2>
                <span>Type: <span className='property'>{item.type}</span></span>
                <span>Weight limit: <span className='property'>{item.weight}Wt</span></span>
                <span>Price: <span className='property'>${item.price}.00</span></span>
                <div className="rating">
                  <i className='fa-solid fa-star'></i>
                  <i className='fa-solid fa-star'></i>
                  <i className='fa-solid fa-star'></i>
                  <i class="fa-solid fa-star-half-stroke"></i>
                  <i class="fa-solid fa-star-half-stroke"></i>

                </div>
              </div>
            </div>

          ))}
        </div>
      }

    </>
  )
}

export default App
