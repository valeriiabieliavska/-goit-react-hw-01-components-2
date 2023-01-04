import css from './Statistics.module.css';
import getRandomHexColor from './getRandom';

import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
  return (
    <div><section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statlist}>
        {stats.map(el => (
          <li
            key={el.id}
            className={css.item}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span className={css.label}>{el.label}</span>
            <span className={css.percentage}>{el.percentage}</span>
          </li>
        ))}
      </ul>
    </section></div>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default Statistics;

// <ul className={css.statlist}>
//   <li className={css.item}>
//     <span className={css.label}>.docx</span>
//     <span className={css.percentage}>4%</span>
//   </li>
//   <li lassName={css.item}>
//     <span className={css.label}>.mp3</span>
//     <span className={css.percentage}>14%</span>
//   </li>
//   <li lassName={css.item}>
//     <span className={css.label}>.pdf</span>
//     <span className={css.percentage}>41%</span>
//   </li>
//   <li lassName={css.item}>
//     <span className={css.label}>.mp4</span>
//     <span className={css.percentage}>12%</span>
//   </li>
// </ul>
