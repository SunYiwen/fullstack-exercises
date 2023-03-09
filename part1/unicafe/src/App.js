import { useState } from "react";

const Header = ({ title }) => <h1>{title}</h1>;

const Item = ({ name, value }) => (
  <div>
    {name} {value}
  </div>
);

const Items = ({ items }) =>
  items.map((item) => (
    <Item name={item.name} value={item.value} key={item.name} />
  ));

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Buttons = ({ buttons }) =>
  buttons.map((button) => (
    <Button onClick={button.onClick} text={button.text} key={button.text} />
  ));

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(6);
  const [neutral, setNeutral] = useState(2);
  const [bad, setBad] = useState(1);

  const items = [
    { name: "good", value: good },
    { name: "neutral", value: neutral },
    { name: "bad", value: bad },
    { name: "all", value: good + neutral + bad },
    { name: "average", value: (good * 1 + bad * -1) / (good + neutral + bad) },
    { name: "positive", value: `${(good / (good + neutral + bad)) * 100}%` },
  ];

  const buttons = [
    {
      onClick: () => {},
      text: "good",
    },
    {
      onClick: () => {},
      text: "neutral",
    },
    {
      onClick: () => {},
      text: "bad",
    },
  ];

  return (
    <div>
      <Header title="give feedback" />

      <Buttons buttons={buttons} />

      <Header title="statistics" />

      <Items items={items} />
    </div>
  );
};

export default App;
