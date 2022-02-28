import { useState } from 'react'
import Token from '../components/Token'
import Series from '../components/Series'
import LineChart from '../components/LineChart'
import Spinner from '../components/spinner/Spinner'

const Main = () => {

    const [token, setToken] = useState('')
    const [series, setseries] = useState([])
    const [dataSeries, setdataSeries] = useState([])
    const [spin, setspin] = useState(true)
        
    return (
        <main className='container m-auto'>
            <section>
                <h2 className='text-info px-2 text-center my-4 text-base md:text-2xl lg:text-3xl xl:text-2xl'>
                    Bienvenido al sistema de consulta de información económica consumiendo la API de Banxico
                </h2>
                <div className='flex-col md:flex md:px-2 justify-center items-center'>
                    <div>
                        <p className='text-info mb-2 text-center text-base md:text-2xl lg:text-3xl xl:text-2xl md:mx-auto font-light'>
                            Para la consulta es necesario obtener un token el cual lo puedes conseguir dando click aquí:
                        </p>
                    </div>
                    <div className='mt-5 xl:mt-0 flex justify-center'>
                        <button className='text-base md:text-2xl lg:text-3xl xl:text-2xl transition ease-in-out delay-100 bg-darkAccent text-lightShades p-2 rounded-md hover:-translate-y-1 hover:scale-110 hover:bg-mainBrand hover:shadow-darkShades'>
                            <a href="https://www.banxico.org.mx/SieAPIRest/service/v1/token" target="_blank">Token Banxico</a>
                        </button>
                    </div>
                </div>
                <Token
                    token={token} 
                    setToken={setToken}
                />
                <Series 
                    token={token}
                    series={series}
                    setseries={setseries}
                    setdataSeries={setdataSeries}
                    setspin={setspin}
                />
                {Object.keys(dataSeries).length === 0 ? (
                    <div className='mb-3'>
                        <p className='text-center pb-5 font-bold text-info text-2xl'>Realiza una Consulta</p>
                    </div>
                ) : (
                    spin ? <Spinner /> : (
                        dataSeries.map(dataSerie => (
                            <LineChart
                            key={dataSerie.idSerie}
                            dataSerie={dataSerie}
                            />
                        )
                    ))
                )}
            </section>
        </main>
    )
}

export default Main