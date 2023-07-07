/*
Task 3: Iterate over object properties
- Create an object with multiple properties.
- Use a loop (such as for...in) to iterate over the object properties.
- Perform an action on each property, such as logging its key and value to the console.

*/

const playersAndClubs = {
  Martinelli: 'Arsenal',
  Mount: 'Man Utd',
  Romero: 'Spurs',
  DeBruyne: 'Man City',
  Nunez: 'Liverpool'
}

for (const key in playersAndClubs) { console.log(`${key}: ${playersAndClubs[key]}`) } // @logs
/*  Martinelli: Arsenal
        Mount: Man Utd
        Romero: Spurs
        DeBruyne: Man City
        Nunez: Liverpool
        */
