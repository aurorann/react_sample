const people=[
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
];
const peopleInfo = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
  }, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
  }, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
  }, {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'chemist',
  }, {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
  }];

export default function List(){

    const chemists = peopleInfo.filter(person =>
      person.profession === 'chemist'
    );


    const filterChemist =peopleInfo.filter((item, index) => 
      item.profession === 'chemist',
    );
    console.log('Filetr:', filterChemist);


    return(
        <ul>
            {people.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    );
}