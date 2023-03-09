const Total = ({ parts }) => (
  <div>
    total of {parts.reduce((acc, cur) => acc + cur.exercises, 0)} exercises
  </div>
);

export default Total;
