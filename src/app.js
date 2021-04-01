import { person, sayHello } from './lib'

const url = 'https://jsonplaceholder.typicode.com/posts'

async function getPosts(url){
  const response = await fetch(url)
  const data = await response.json()
  return data
}

getPosts(url).then( post => console.log(post))
getPosts('https://murmuring-inlet-13551.herokuapp.com/api/timestamp').then( post => console.log(post))
getPosts('https://murmuring-inlet-13551.herokuapp.com/api/timestamp/2016-11-20').then( post => console.log(post))
getPosts('https://murmuring-inlet-13551.herokuapp.com/api/timestamp/1479600000000').then( post => console.log(post))
getPosts('https://murmuring-inlet-13551.herokuapp.com/api/timestamp/badly_formated_date_string').then( post => console.log(post))
getPosts('https://murmuring-inlet-13551.herokuapp.com/api/shorturl').then( post => console.log(post))
getPosts('https://murmuring-inlet-13551.herokuapp.com/api/shorturl/hjklfj8i').then( post => console.log(post))
getPosts('https://murmuring-inlet-13551.herokuapp.com/api/shorturl/hjklfj8t').then( post => console.log(post))

console.log('drozerah')