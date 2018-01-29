// TEST:

const people = [
  { name: 'Abe', age: 60, number: 60 },
  { name: 'Bob', age: 21, number: 92 },
  { name: 'Cat', age: 45, number: 41 },
  { name: 'Don', age: 14, number: 11 },
  { name: 'Edy', age: 39, number: 93 }
]

// think about flexibility, composability, and not hard-coding values
// programmatically:
//   add a new key & value to each person
//   return only people with an age lower than their number
//   find the average age
//   write one function that can take other functions to facilitate doing all three




// TEST ANSWERS:

const people = [
  { name: 'Abe', age: 60, number: 60 },
  { name: 'Bob', age: 21, number: 92 },
  { name: 'Cat', age: 45, number: 41 },
  { name: 'Don', age: 14, number: 11 },
  { name: 'Edy', age: 39, number: 93 }
]

// think about flexibility, composability, and not hard-coding values
// programmatically:
//   add a new key & value to each person
//   return only people with an age lower than their number
//   find the average age
//   write one function that can take other functions to facilitate doing all three


// function that returns another function, if curried you can have it always work on a specific array or not , with a specific method or not, or with a different callback
const compose = array => method => cb => array[method](cb)

// creates a new object, gets the keys/values from another obj, sets variable key and value to the newly created object.  can also put new values into the original key
const set = key => value => obj => Object.assign({}, obj, {[key]: value})

// compares variable values across keys
const compare = firstKey => secondKey => obj => obj[firstKey] < obj[secondKey]

// gets values out of an obj and returns them
const get = key => x => x = x[key]

// get the sum of an array
const sum = (prev, curr) => prev + curr

// creates new array using people array adding, via map, the key of 'alive' with the value of true to each object
const addedKeysToPeople = compose(people)('map')(set('alive')(true)) //  = people.map(obj => Object.assign({}, obj, {alive: true}))

// creates new array using people array that filters them by a comparision of age and number values
const filteredPeople = compose(people)('filter')(compare('age')('number')) // = people.filter(obj => obj.age < obj.number)

// creates new array of just the ages from people
const ages = compose(people)('map')(get('age')) // = people.map(x => x= x.age)

// sums up the ages via reduce and divides by the length of the array
const averageAge = compose(ages)('reduce')(sum) / ages.length // = ages.reduce((prev, curr) => prev + curr) / ages.length


console.log('addedKeysToPeople',addedKeysToPeople)
console.log('filteredPeople', filteredPeople)
console.log('ages', ages)
console.log('averageAge', averageAge)

// currying
const onPeople = compose(people)
const mapOnPeople = onPeople('map')
const agesOfPeople = mapOnPeople(get('age')) // [60, 21, 45, 14, 39]
const namesOfPeople = mapOnPeople(get('name')) // ["Abe", "Bob", "Cat", "Don", "Edy"]

// console.log('namesOfPeople', namesOfPeople)
// console.log('agesOfPeople', agesOfPeople)