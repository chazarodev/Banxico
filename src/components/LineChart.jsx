import { useState, useEffect } from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import {Line} from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
)

const LineChart = ({dataSerie}) => {

    const [chartData, setchartData] = useState({
        datasets:[]
    })

    const [chartOptions, setchartOptions] = useState({})

    const {idSerie, titulo, datos} = dataSerie

    const labels = datos.map(dato => dato.fecha)
    const data = datos.map(dato => dato.dato)

    useEffect(() => {
      setchartData({
          labels,
          datasets: [
              {
                data: data,
                label: titulo,
                position: top,
                borderColor: '#ECAD62',
                backgroundColor: '#ECAD62',
                borderWidth: 2,
                tension: 0.4,
              }
          ],
      })
      setchartOptions({
          options: {
            responsive: true,
            maintainAspectRatio: true
          },
          layout: {
            padding: 20
          },
          datasets: {
            line: {
                pointRadius: 0
            },
          },
          plugins: {
              legend: {
                display: false
                // position: 'top'
              },
              title: {
                display:true,
                text: titulo,
                color: '#31262F',
                font: {
                    size: 20,
                }
              },
          }
      })
    }, [])

    return (
        <>
            <div className='bg-info md:w-2/3 mx-auto py-2 rounded-t-md'>
                <p className='text-center font-bold text-lightShades text-2xl'>Serie: {idSerie}</p>
            </div>
            <div className='container mx-auto md:w-2/3 border-l-2 border-b-2 border-r-2 border-mainBrand/30 mb-8'>
                <Line options={chartOptions} data={chartData} />
            </div>
        </>
    )
}

export default LineChart