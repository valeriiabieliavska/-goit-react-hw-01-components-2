import css from './Transaction.module.css';

import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.history}>
      <thead className={css.thead}>
        <tr className={css.head}>
          <th className={css.text}>Type</th>
          <th className={css.text}>Amount</th>
          <th className={css.text}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={css.item}>
            <td className={css.desc}>{type}</td>
            <td className={css.desc}>{amount}</td>
            <td className={css.desc}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default TransactionHistory;
