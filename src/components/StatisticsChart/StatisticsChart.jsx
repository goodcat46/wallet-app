import { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import scss from 'components/StatisticsChart/StatisticChart.module.scss';

import { BASE_COLORS } from '../../constans/constans';

ChartJS.register(ArcElement, Tooltip);

const options = {
  cutout: '70%',
};

export default function StatisticsChart({
  statChartData = {},
  periodTotal = 0,
  expenseSummary = 0,
}) {
  const [data, setData] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');
  const [labels, setLabels] = useState('');
  const expenseValue =
    expenseSummary !== 0 ? expenseSummary.toString().slice(1) : 0;

  const donut = {
    labels: labels,
    datasets: [
      {
        label: '# of Votes',
        data: data,
        backgroundColor: backgroundColor,
        borderWidth: 0,
      },
    ],
  };

  useEffect(() => {
    const nameArr = statChartData.map(item => item.total);
    const colorsArr = statChartData.map((_, index) => BASE_COLORS[index]);
    const labelsArr = statChartData.map(item => item.name);
    setData(nameArr);
    setBackgroundColor(colorsArr);
    setLabels(labelsArr);
  }, [statChartData, periodTotal]);

  const plugins = [
    {
      beforeDraw: function (chart) {
        const width = chart.width,
          height = chart.height,
          ctx = chart.ctx;
        ctx.restore();
        const fontSize = (height / 160).toFixed(2);
        ctx.font = fontSize + 'em sans-serif';
        ctx.textBaseline = 'top';
        const text = `₴ ${expenseValue} `,
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2.2;
        ctx.fillText(text, textX, textY);
        ctx.save();
      },
    },
  ];
  if (periodTotal === 0) {
    return <h2 className={scss.noStatMessage}>No statistic information</h2>;
  }

  return (
    <Doughnut plugins={plugins} options={options} redraw={true} data={donut} />
  );
}
