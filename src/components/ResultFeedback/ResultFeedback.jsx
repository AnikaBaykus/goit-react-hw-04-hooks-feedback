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
export default ResultFeedback;

//  <li className={s.item}>
//         <p className={s.name}>Good: {good}</p>
//       </li>
//       <li className={s.item}>
//         <p className={s.name}>Neutral: {neutral}</p>
//       </li>
//       <li className={s.item}>
//         <p className={s.name}>Bad: {bad}</p>
//       </li>
