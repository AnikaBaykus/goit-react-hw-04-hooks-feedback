import PropTypes from 'prop-types';
import ResultFeedback from '../ResultFeedback';
import s from './Statistic.module.css';

function Statistic(props) {
  const { feedback, good, neutral, bad, total, positivePercentage } = props;

  return (
    <div>
      <ResultFeedback feedback={feedback} />
      <p className={s.name}>Total: {total}</p>
      <p className={s.name}>Positive feedback: {positivePercentage}%</p>
    </div>
  );
}

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistic;
