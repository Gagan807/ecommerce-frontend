import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale);

const SalesOverTime = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        axios.get('/api/sales-over-time').then(response => {
            const { labels, values } = response.data;
            setData({
                labels,
                datasets: [{
                    label: 'Sales Over Time',
                    data: values,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    fill: false
                }]
            });
        });
    }, []);

    return (
        <div>
            <h2>Total Sales Over Time</h2>
            <Line data={data} />
        </div>
    );
};

export default SalesOverTime;
