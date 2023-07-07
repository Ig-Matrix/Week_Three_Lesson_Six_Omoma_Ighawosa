/*
Task 5: Merge objects
- Create multiple objects with different properties.
- Use the Object.assign() method to merge the objects into a single object.
- Log the merged object to the console.

*/

const bukayoSaka = {
  name: 'Bukayo Saka',
  country: 'England',
  club: 'Arsenal'
}

const bukayoSakaDetails = {
  age: 21,
  occupation: 'Footballer',
  country_of_origin: 'Nigeria'
}

const bukayoSakaLikes = {
  favourite_food: 'Fufu',
  favourite_stadium: 'Emirates',
  goals_last_season: 15
}
const bukayoSakaCombined = {}

Object.assign(bukayoSakaCombined, bukayoSaka, bukayoSakaDetails, bukayoSakaLikes)

console.log(bukayoSakaCombined) // @logs { name: 'Bukayo Saka', country: 'England', club: 'Arsenal', age: 21, occupation: 'Footballer', country_of_origin: 'Nigeria', favourite_food: 'Fufu', favourite_stadium: 'Emirates', goals_last_season: 15 }
