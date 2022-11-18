import chartColorsArr from 'assets/chartColorsArr';
import exempleDataStat from 'assets/exempleDataStat';

// Замінити exempleDataStat на дані зі стейту
const data = exempleDataStat;

export const preparedData = {
  labels: [],
  datasets: [
    {
      label: '# of Votes',
      data: [],
      backgroundColor: [
        '#FED057',
        '#FFD8D0',
        '#FD9498',
        '#C5BAFF',
        '#6E78E8',
        '#4A56E2',
        '#81E1FF',
        '#24CCA7',
        '#00AD84',
        '#00AD34',
        '#60AD20',
      ],

      borderWidth: 0,
    },
  ],
};

preparedData.labels = data.categoriesSummary
  .filter(item => item.type === 'EXPENSE')
  .map(el => el.name);

preparedData.datasets[0].data = data.categoriesSummary
  .filter(item => item.type === 'EXPENSE')
  .map(el => el.total);

preparedData.datasets[0].backgroundColor = chartColorsArr;
