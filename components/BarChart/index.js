import { useState, useEffect } from "react";
import styles from './BarChart.module.css';
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export default function BarChart() {

    const [chartData, setChartData] = useState({
        datasets: []
    })

    const [chartOptions, setChartOptions] = useState({})

    useEffect(() => {
        setChartData({
            labels: ["Sun", "Mon", "Tues", "Weds", "Thurs", "Fri", "Sat"],
            datasets: [
                {
                    label: 'Sales $',
                    data: [12353, 12345, 34054, 100432, 80432, 56765, 78765],
                    borderColor: 'rgb(53,163,235)',
                    backgroundColor: 'rgba(53, 163, 235,0.4)'
                }
            ]
        })

        setChartOptions({
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: "Daily Revenue"
                }
            },
            maintainAspectRation: false,
            responsive: true
        })

    }, [])

    return (
        <>
            <div className={styles.container}>
                <Bar data={chartData} options={chartOptions}/>
            </div>
        </>
    );
}