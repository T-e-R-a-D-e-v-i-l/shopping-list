// import 'components/Products/styles.css'

function Product (props) {
    const { product, deleteProducts, changeBtn } = props
    return (
        <div className='max-w-screen-md mx-auto'>
            <div className='bg-yellow-300 flex justify-between mt-10 p-10 shadow-xl rounded-3xl'>
                <div className="text-2xl font-semibold">
                    <p>{product.name}</p>
                </div>
                <div className="">
                    {product.isAdd ? 
                    <button onClick={() => changeBtn(product.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" 
                            fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                            stroke="currentColor" className="w-7 h-7 ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                    </button> :
                    <button className="hover:underline mx-5" onClick={() => changeBtn(product.id)}>Добавить</button>}
                    <button className="hover:underline mx-5" onClick={() => deleteProducts(product.id)}>Удалить</button>
                </div>
            </div>
        </div>
        
    )
}

export default Product