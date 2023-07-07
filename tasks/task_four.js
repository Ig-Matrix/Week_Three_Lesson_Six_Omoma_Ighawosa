/*
Task 4: Remove properties from an object
- Create an object with multiple properties.
- Use the delete keyword to remove a specific property from the object.
- Log the object to the console to see the updated properties

*/

const playersAndClubs = {
  Martinelli: 'Arsenal',
  Mount: 'Man Utd',
  Romero: 'Spurs',
  DeBruyne: 'Man City',
  Nunez: 'Liverpool'
}

delete playersAndClubs.Martinelli
delete playersAndClubs.Nunez

console.log(playersAndClubs) // @logs { Mount: 'Man Utd', Romero: 'Spurs', DeBruyne: 'Man City' }
