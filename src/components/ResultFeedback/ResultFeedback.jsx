import PropTypes from 'prop-types';
import s from './ResultFeedback.module.css';
import firstLatter from '../helpers/FirstLetter';

function ResultFeedback({ feedback }) {
  const keys = Object.keys(feedback);

  return (
    <ul className={s.list}>
      {keys.map(key => (
        <li className={s.item} key={key}>
          <p className={s.name}>
            {firstLatter(key)} : {feedback[key]}
          </p>
        </li>
      ))}
    </ul>
  );
}
ResultFeedback.propTypes = {
  feedback: PropTypes.object.isRequired,
};
export default ResultFeedback;
