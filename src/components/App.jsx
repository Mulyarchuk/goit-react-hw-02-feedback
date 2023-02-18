import React from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";

export class App extends React.Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  

countTotalFeedback(){
 return this.state.good + this.state.neutral + this.state.bad
  };

countPositiveFeedbackPercentage(){
return Math.round(this.state.good/(this.state.good + this.state.neutral + this.state.bad)*100)
  };

onLeaveFeedback = item => {
  this.setState ({[item]: this.state[item]+1})

  };

  render() {
    const { good, neutral,bad } = this.state;
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: `column`,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Section title="Please leave feedback">
    <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback}/>
    </Section>
    <Section title="Statistics">
    <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/>
    </Section>
    </div>
  );
    };
};


