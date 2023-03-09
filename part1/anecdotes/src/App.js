import { useState } from "react";

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值
}

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];

  const [selected, setSelected] = useState(0);

  const [points, setPoints] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
  });

  const nextAnecode = () => {
    let random = selected;
    do {
      random = getRandomIntInclusive(0, 6);
    } while (random === selected);

    setSelected(random);
  };

  const vote = () => {
    const tempPoints = { ...points, [selected]: points[selected] + 1 };
    setPoints(tempPoints);

    const index = findMostVotesAnecdote(tempPoints);
    setMostVoteAnecdote(anecdotes[index]);
  };

  const [mostVoteAnecdote, setMostVoteAnecdote] = useState(anecdotes[0]);

  const findMostVotesAnecdote = (points) => {
    const keys = Object.keys(points);
    let index = keys[0];
    let point = points[index];

    for(let i=1; i<keys.length; i++) {
      if (points[keys[i]] > point) {
        index = keys[i];
        point = points[index];
      }
    }

    return index;
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <div>has {points[selected]} votes</div>
      <div>
        <button onClick={vote}>vote</button>
        <button onClick={nextAnecode}>next anecdote</button>
      </div>

      <h1>Anecdote with most votes</h1>
      { mostVoteAnecdote }

    </div>
  );
};

export default App;
