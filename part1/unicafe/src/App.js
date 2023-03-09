import { useState } from "react";

const Header = ({ title }) => <h1>{title}</h1>;

const StatisticLine = ({ name, value }) => (
  <div>
    {name} {value}
  </div>
);

const Statistics = ({ good, neutral, bad }) => {
  if (good + neutral + bad > 0) {
    return (
      <>
        <StatisticLine name="good" value={good} />
        <StatisticLine name="neutral" value={neutral} />
        <StatisticLine name="bad" value={bad} />
        <StatisticLine name="average" value={(good * 1 + bad * -1) / (good + neutral + bad)} />
        <StatisticLine name="positive" value={`${(good / (good + neutral + bad)) * 100}%`} />
      </>
    );
  }

  return <div>No feedback given</div>;
};

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Buttons = ({ buttons }) =>
  buttons.map((button) => (
    <Button onClick={button.onClick} text={button.text} key={button.text} />
  ));

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const buttons = [
    {
      onClick: () => setGood(good + 1),
      text: "good",
    },
    {
      onClick: () => setNeutral(neutral + 1),
      text: "neutral",
    },
    {
      onClick: () => setBad(bad + 1),
      text: "bad",
    },
  ];

  return (
    <div>
      <Header title="give feedback" />

      <Buttons buttons={buttons} />

      <Header title="statistics" />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
