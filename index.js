const express = require('express');
const { extract } = require('article-parser');

const url = 'https://goo.gl/MV8Tkh';

const fetchArticle = (res, url) => {
  console.log('extracting url ' + url);
  extract(url)
    .then(article => {
      console.log(article);
      res.send(article);
    })
    .catch(err => {
      console.log(err);
    });
};

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => fetchArticle(res, url));

app.put('/fetch', (req, res) => fetchArticle(res, req.data));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
