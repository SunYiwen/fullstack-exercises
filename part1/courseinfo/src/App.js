const Header = (props) => <h1>{props.course}</h1>;

const Part = (props) => (
  <p>
    {props.part} {props.exercises}
  </p>
);

const Content = (props) =>
  props.parts.map((content) => (
    <Part
      key={content.name}
      part={content.name}
      exercises={content.exercises}
    />
  ));

const Footer = (props) => <p>Number of exercises {props.total}</p>;

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Footer
        total={course.parts.reduce((acc, cur) => {
          return acc + cur.exercises;
        }, 0)}
      />
    </div>
  );
};

export default App;
