import { useTheme } from '@mui/system';
import ReactEcharts from 'echarts-for-react';

const ComparisonChart = ({ height, color = ["#24A4C0", "#39DCFF"] }) => {
  const theme = useTheme();

  const option = {
    grid: { top: '10%', bottom: '10%', right: '5%' },
    legend: { show: false },
    color: ["#24A4C0", "#39DCFF"],
    barGap: 0,
    barMaxWidth: '64px',
    dataset: {
      source: [
        ['Month', 'Website', 'App'],
        ['Jan', 2200, 1200],
        ['Feb', 800, 500],
        ['Mar', 700, 1350],
        ['Apr', 1500, 1250],
        ['May', 2450, 450],
        ['June', 1700, 1250],
      ],
    },
    xAxis: {
      type: 'category',
      axisLine: { show: false },
      splitLine: { show: false },
      axisTick: { show: false },
      axisLabel: {
        fontSize: 13,
        fontFamily: 'roboto',
        color: theme.palette.text.secondary,
      },
    },
    yAxis: {
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: {
        lineStyle: { color: theme.palette.text.secondary, opacity: 0.15 },
      },
      axisLabel: {
        fontSize: 13,
        fontFamily: 'roboto',
        color: theme.palette.text.secondary,
      },
    },
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [{ type: 'bar' }, { type: 'bar' }],
  };

  return <ReactEcharts style={{ height: height }} option={{ ...option }} />;
};

export default ComparisonChart;
