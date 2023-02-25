// import 'components/Products/styles.css'

function Product (props) {
    const { product, deleteProducts } = props
    return (
        <div className='background'>
            <div className='max-w-screen-md mx-auto'>
            <div className='bg-yellow-300 flex justify-between my-10 p-10 shadow-xl rounded-3xl'>
                <div className="text-2xl font-semibold">
                    <p>{product.name}</p>
                </div>
                <div className="">
                    <button className="hover:underline mx-5">Добавить</button>
                    <button className="hover:underline mx-5" onClick={() => deleteProducts(product.id)}>Удалить</button>
                </div>
            </div>
        </div>
        </div>
        
    )
}

export default Product