import Button from 'components/Button'
import { useState } from 'react'

function ProductForm ({addProduct}) {
    
    const [newProduct, setNewProduct] = useState('')
    
    const click = () => {
        const product ={
            id:8,
            name:newProduct,
            isAdd: false
        }
        addProduct(product)
        setNewProduct('')
    }
    return (
        <div className="max-w-screen-md mx-auto mt-10 flex justify-center gap-10">
            <input onChange={(event) => setNewProduct(event.target.value)} 
            value={newProduct} 
            name="newProduct" 
            size={30} type="text" 
            placeholder="Добавить новый продукт" 
            className="border border-solid border-amber-300 border-2 rounded-md p-2"></input>
            <Button title="Добавить" click={click}/>            
        </div>
    )
}

export default ProductForm