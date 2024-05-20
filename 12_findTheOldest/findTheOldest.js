const findTheOldest = function(people) {
    let oldestAge = 0;
    const oldestPerson = people.reduce((oldestPerson, currentPerson) => {
        let oldestAge = getAge(oldestPerson);
        let currentAge = getAge(currentPerson);
        return (currentAge > oldestAge) ? currentPerson : oldestPerson;
    })
    return oldestPerson;
};

function getAge(person) {
    return person.yearOfDeath ? person.yearOfDeath - person.yearOfBirth : (new Date()).getFullYear() - person.yearOfBirth;
}
findTheOldest([
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ])

// Do not edit below this line
module.exports = findTheOldest;
