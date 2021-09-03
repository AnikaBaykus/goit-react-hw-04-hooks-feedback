import { useState } from 'react';
import './App.css';
import Container from './Container';
import Section from './Section';
import Statistic from './Statistic';
import Feedback from './Feedback';
import Notification from './Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedback = { good, neutral, bad };

  const sumTotal = good + neutral + bad;

  const positiveFeedback = Math.round((good / sumTotal) * 100);

  const onClickBtn = event => {
    const name = event;
    if (name === 'good') setGood(state => state + 1);
    if (name === 'neutral') setNeutral(state => state + 1);
    if (name === 'bad') setBad(state => state + 1);
    return;
  };

  return (
    <>
      <Container>
        <Section title="Please leave feedback">
          <Feedback
            options={['good', 'neutral', 'bad']}
            onFeedback={onClickBtn}
          />
        </Section>
        <Section title="Statistic">
          {sumTotal === 0 ? (
            <Notification message="No feedback given"></Notification>
          ) : (
            <Statistic
              feedback={feedback}
              total={sumTotal}
              positivePercentage={positiveFeedback}
            />
          )}
        </Section>
      </Container>
    </>
  );
}
