import { SeriesData } from './SeriesData'

const Series = ({token, series, setseries, setdataSeries, setspin}) => {

    const handleCheckBox = (serie) => {  
        setseries([...series, serie.serie]);
    }

    const handleSubmit = async () => {
        try {
            const url = `https://www.banxico.org.mx/SieAPIRest/service/v1/series/${series}/datos/1971-01-01/2020-01-08?token=${token}&mediaType=json`
            const response = await fetch(url)
            const result = await response.json()
            setdataSeries(result.bmx.series); 
        } catch (error) {
            console.log(error);
        }
        setTimeout(() => {
            setspin(false)
        }, 3000);
    }

    return (
        <div className='container mx-auto'>
            <h2 className='text-center font-bold text-lightAccent text-base md:text-2xl lg:text-3xl xl:text-2xl'>Selecciona las series que deseas consultar</h2>
            <ul className='p-6'>
                <li className='py-4 first:pt-0 last:pb-0'>
                    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4'>
                        {SeriesData.map(serie => (
                            <div key={serie.id} className='flex my-2 overflow-hidden'>
                                <div className='mr-2'>
                                    <label htmlFor="toggle-switch">
                                        <input
                                            type="checkbox" 
                                            value={serie.serie}
                                            className="cursor-pointer h-4 w-8 rounded-full appearance-none bg-mainBrand bg-opacity-30 checked:bg-lightAccent transition duration-200"
                                            onChange={() => handleCheckBox(serie)}
                                        />
                                    </label>
                                </div>
                                <div>
                                    <p>{serie.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className=''>
                        <button
                            type='submit'
                            className='mt-5 transition w-full xl:w-44 ease-in-out delay-100 bg-darkAccent text-lightShades p-2 rounded-md hover:-translate-y-1 hover:scale-110 hover:bg-lightAccent hover:shadow-darkShades'
                            onClick={() => handleSubmit()}
                        >
                            <p>Consultar</p>
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Series