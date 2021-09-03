import PropTypes from 'prop-types';
import s from './Feedback.module.css';
import firstLatter from '../helpers/FirstLetter';

function Feedback({ options, onFeedback }) {
  return (
    <div className={s.feedback}>
      {options.map(type => (
        <button
          type="button"
          key={type.toString()}
          onClick={() => onFeedback(type)}
          className={s.button}
        >
          {firstLatter(type)}
        </button>
      ))}
    </div>
  );
}

Feedback.propTypes = {
  options: PropTypes.array.isRequired,
  onFeedback: PropTypes.func.isRequired,
};
export default Feedback;
