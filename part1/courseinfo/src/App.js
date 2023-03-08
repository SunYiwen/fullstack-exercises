const Header = (props) => <h1>{props.course}</h1>;

const Part = (props) => (
  <p>
    {props.part} {props.exercises}
  </p>
);

const Content = (props) =>
  props.contentList.map((content) => (
    <Part
      key={content.part}
      part={content.part}
      exercises={content.exercises}
    />
  ));

const Footer = (props) => <p>Number of exercises {props.total}</p>;

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  const contentList = [
    {
      part: part1,
      exercises: exercises1,
    },
    {
      part: part2,
      exercises: exercises2,
    },
    {
      part: part3,
      exercises: exercises3,
    },
  ];

  return (
    <div>
      <Header course={course} />
      <Content contentList={contentList} />
      <Footer
        total={contentList.reduce((acc, cur) => {
          return acc + cur.exercises;
        }, 0)}
      />
    </div>
  );
};

export default App;
