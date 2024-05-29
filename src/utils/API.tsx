// Axios is a popular NPM package used for preforming API requests
import axios from 'axios';

// Using axios, we create a search method that is specific to our use case and export it at the bottom
const search = () =>
  axios.get(`https://api.github.com/users`);

export default search;
