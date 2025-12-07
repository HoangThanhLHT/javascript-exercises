function getAge(death, birth) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth
}

const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        const oldestAge = getAge(oldest.yearOfDeath, oldest.yearOfBirth);
        const personAge = getAge(person.yearOfDeath, person.yearOfBirth);
        return (oldestAge > personAge) ? oldest : person;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
