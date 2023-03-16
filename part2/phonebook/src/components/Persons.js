const Persons = ({ persons, filter }) => 
  (filter
    ? persons.filter(
        (person) => person.name.toLowerCase().indexOf(filter.toLowerCase()) > -1
      )
    : persons
  ).map((person) => (
    <div key={person.name}>
      {person.name} {person.number}
    </div>
  ));

export default Persons;
