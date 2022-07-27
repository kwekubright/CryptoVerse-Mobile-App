import React, { useEffect } from 'react';
import * as CryptoCharts from 'cryptocharts';
import PropTypes from 'prop-types';
import _ from 'lodash';

const HomeChart = (props) => {
  const { itemId } = props;
  useEffect(() => {
    CryptoCharts.priceHistory({
      chart_id: 'mychart',
      cryptocompare_tickers: [_.upperCase(itemId)],
      last_days: 365,
      loading_indicator: true,
      options: {
        colors: ['#f7931a'],
        title: true,
        chart: {
          height: '300px',
          responsive: true,
          type: 'line',
          maintainAspectRatio: false,
          legend: {
            display: true,
          },
        },
      },
    });
  }, []);

  return (
    <><div id="mychart" /></>
  );
};

HomeChart.defaultProps = {
  itemId: 'BTC',
};

HomeChart.propTypes = {
  itemId: PropTypes.string,
};

export default HomeChart;
