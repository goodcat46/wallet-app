import { useEffect, useState } from 'react';

import s from 'components/Currency/Currency.module.scss';

export default function Currency() {
  const [rates, setRates] = useState([]);
  // const [value, setValue] = useState(100);
  // const [exchangeType, setExchangeType] = useState('UAHUSD');

  useEffect(() => {
    const fetchCurrency = async () => {
      const data = await (
        await fetch(
          `https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5`
        )
      ).json();

      setRates(data);
    };
    fetchCurrency().catch(console.error);
  }, []);

  const usdBuy = rates.length > 0 ? Number(rates[0].buy).toFixed(2) : 0;
  const eurBuy = rates.length > 0 ? Number(rates[1].buy).toFixed(2) : 0;
  const usdSale = rates.length > 0 ? Number(rates[0].sale).toFixed(2) : 0;
  const eurSale = rates.length > 0 ? Number(rates[1].sale).toFixed(2) : 0;

  // const calculateExchange = (value, exchangeType) => {
  //   switch (exchangeType) {
  //     case 'UAHUSD':
  //       if (!value) {
  //         break;
  //       }
  //       return Number(value / usdBuy).toFixed(2);
  //     case 'UAHEUR':
  //       if (!value) {
  //         break;
  //       }
  //       return Number(value / eurBuy).toFixed(2);
  //     case 'USDUAH':
  //       if (!value) {
  //         break;
  //       }
  //       return Number(value * usdSale).toFixed(2);
  //     case 'EURUAH':
  //       if (!value) {
  //         break;
  //       }
  //       return Number(value * eurSale).toFixed(2);
  //     default:
  //       break;
  //   }
  // };

  // const result = calculateExchange(value, exchangeType);
  return (
    <div className={s.thumb}>
      <table className={s.table}>
        <thead className={s.thead}>
          <tr className={s.thRow}>
            <th className={s.th_1}>Currency</th>
            <th className={s.th_2}>Purchase</th>
            <th className={s.th_3}>Sale</th>
          </tr>
        </thead>
        <tbody className={s.tbody}>
          <tr className={s.tr}>
            <td className={s.td_1}>USD</td>
            <td className={s.td_2}>{usdBuy}</td>
            <td className={s.td_3}>{usdSale}</td>
          </tr>
          <tr className={s.tr}>
            <td className={s.td_1}>EUR</td>
            <td className={s.td_2}>{eurBuy}</td>
            <td className={s.td_3}>{eurSale}</td>
          </tr>
          {/* <tr className={[s.tr, s.trInput].join(' ')}>
            <td className={s.td_1}>
              <input
                className={s.inputField}
                name="value"
                type="number"
                value={value}
                onChange={e => setValue(e.target.value)}
              />
            </td>
            <td className={s.td_2}>
              <select
                className={s.selectField}
                name="exchangeType"
                value={exchangeType}
                onChange={e => setExchangeType(e.target.value)}
              >
                <option value="UAHUSD">UAH {'>'} USD</option>
                <option value="UAHEUR">UAH {'>'} EUR</option>
                <option value="USDUAH">USD {'>'} UAH</option>
                <option value="EURUAH">EUR {'>'} UAH</option>
              </select>
            </td>
            <td className={s.td_3}>
              <span className={s.resultField}>{result}</span>
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
}
