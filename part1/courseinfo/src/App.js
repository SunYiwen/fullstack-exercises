const Header = (props) => <h1>{props.course}</h1>;

const Part = (props) => (
  <p>
    {props.part} {props.exercises}
  </p>
);

const Content = (props) =>
  props.contentList.map((content) => (
    <Part
      key={content.name}
      part={content.name}
      exercises={content.exercises}
    />
  ));

const Footer = (props) => <p>Number of exercises {props.total}</p>;

const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  const contentList = [part1, part2, part3];

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
