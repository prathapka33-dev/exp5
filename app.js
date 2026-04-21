const axios = require("axios");

const apiKey = process.env.API_KEY;
const apiUrl = process.env.API_URL;

axios.get(apiUrl, {
  headers: { Authorization: `Bearer ${apiKey}` }
})
.then(res => console.log(res.data))
.catch(err => console.error(err));