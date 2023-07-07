/*
Task 2: Access and modify object properties
- Create an object with multiple properties.
- Use dot notation or bracket notation to access a specific property.
- Modify the property value using assignment.
- Log the object to the console to see the updated value.

*/

const playersAndClubs = {
  Saka: 'Arsenal',
  Sancho: 'Man Utd',
  Son: 'Spurs',
  Haaland: 'Man City',
  Salah: 'Liverpool'
}

let result = playersAndClubs.Son

console.log(result) // @logs Spurs

result = playersAndClubs.Haaland
console.log(result) // @logs Man City
