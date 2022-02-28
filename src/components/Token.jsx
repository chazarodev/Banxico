
const Token = ({token, setToken}) => {

    return (
        <>
            <div className='container md:mx-auto my-4 flex flex-col xl:flex-row justify-center px-7'>
                <div className='mr-2 w-full xl:w-1/3 p-2 text-base md:text-2xl lg:text-2xl text-center xl:text-right'>
                    <h3>Coloca el token generado en Banxico:</h3>
                </div>
                <div className='w-full xl:w-2/3 mx-auto'>
                    <input 
                        type="text" 
                        className='w-full xl:w-4/5 p-2 border-2 rounded-sm border-mainBrand/30 focus:ring focus:ring-mainBrand focus:border-none focus:outline-none'
                        placeholder='token'
                        value={token}
                        onChange={e => setToken(e.target.value)}    
                    />
                </div>
            </div>
        </>
)
}

export default Token