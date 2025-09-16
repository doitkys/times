const API_KEY = `4a54a306c22d41b3a3845502b5c0aedc`;
let news = [];
const getLatestNews = async () => {
  const url = new URL(
    `https://noona-times-be-5ca9402f90d9.herokuapp.com/top-headlines?country=us&apiKey=${API_KEY}`
  );
  const response = await fetch(url);
  const data = await response.json();

  news = data.articles;
  console.log('ddd', news);
};

getLatestNews();
