// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Header() {
    return (
        <header className='bg-amber-400 py-10 font-semibold text-xl mb-10'>
            <div className='max-w-screen-lg mx-auto flex justify-between'>
                <div className="flex gap-6 px-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
                        viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                        className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" 
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                        {/* <FontAwesomeIcon icon="far fa-sd-card" /> */}
                        <p>Для пикника</p>
                </div>
                
                <div className="px-6">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                        fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                        stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round"
                        d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>
                </div>
            </div>
            
        </header>
    )
}

export default Header