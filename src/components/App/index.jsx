import './App.css';
import Header from 'components/Header';
import { useState } from 'react';
import Product from 'components/Products';
import Footer from 'components/Footer';
import ProductForm from 'components/ProductForm'

function App() {
    const [products, setProducts] = useState([
        {
            id:1,
            name:'Хлеб',
            isAdd: false
        },
        {
            id:2,
            name:'Сок',
            isAdd: false
        },
        {
            id:3,
            name:'Овощи'
        },
        {
            id:4,
            name:'Фрукты',
            isAdd: false
        },
        {
            id:5,
            name:'Печенье',
            isAdd: false
        },
        {
            id:6,
            name:'Сыр',
            isAdd: false
        },
        {
            id:7,
            name:'Колбаса',
            isAdd: false
        }
    ])

    const deleteProducts = (id) => {
        const filteredProducts = products.filter(product => product.id !==id)
        setProducts(filteredProducts)
    }

    const addProduct = (product) => {
        setProducts([...products, product])
    }

  return(
    <div>
        <Header />
        <h1 className='text-3xl text-center font-semibold'>Список необходимых продуктов</h1>
        <div className='mx-10 min-h-screen'>
            <ProductForm addProduct={addProduct}/>
            {products.length === 0 && (
                <div className='text-center text-xl mt-10'>Список пуст</div>
            )}
            {products.length > 0 && products.map((product) => {
                return (
                    <Product key={product.id} product={product} deleteProducts={deleteProducts}/>
                )
            })}
        </div>
        <Footer />
    </div>
  )
}

export default App;
