import React, { Component } from 'react';
import './App.css';
import Container from './Container';
import Section from './Section';
import Statistic from './Statistic';
import Feedback from './Feedback';
import Notification from './Notification';

export class App extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  sumTotal = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  positiveFeedback = (positive, total) => {
    return Math.round((positive / total) * 100) || 0;
  };

  onClickBtn = type => {
    this.setState(prevState => {
      return { [type]: prevState[type] + 1 };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const { state } = this;
    const total = this.sumTotal();
    const positivePercentage = this.positiveFeedback(good, total);

    return (
      <>
        <Container>
          <Section title="Please leave feedback">
            <Feedback
              options={['good', 'neutral', 'bad']}
              onFeedback={this.onClickBtn}
            />
          </Section>
          <Section title="Statistic">
            {total === 0 ? (
              <Notification message="No feedback given"></Notification>
            ) : (
              <Statistic
                feedback={state}
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={positivePercentage}
              />
            )}
          </Section>
        </Container>
      </>
    );
  }
}

export default App;
