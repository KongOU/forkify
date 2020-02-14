import axios from 'axios';

async function getResults(query) {
  // const proxy = 'https://cors-anywhere.herokuapp.com/';
  // const key = '';
  try {
    const res = await axios(`https://forkify-api.herokuapp.com/api/search?q=${query}`);
    const recipes = res.data.recipes;
    console.log(recipes);
  } catch (error) {
    alert(error);
  }
}
getResults('curry');
