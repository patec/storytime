const { extract } = require('article-parser');
const Readability = require('moz-readability-node').Readability;

const handle = (req, res) => {
  console.log('query: ' + req.query.url);
  const url = req.query.url;

  extract(url)
    .then(article => {
      console.log(article);
      res.send(article);
    })
    .catch(err => {
      console.log(err);
    });
};
//   var JSDOM = require('jsdom').JSDOM;
//   var doc = new JSDOM("<!DOCTYPE html><body>Here's a bunch of text</body>", {
//     url: url
//   });
//   console.log(doc.window.document.querySelector('body').textContent);

//   var location = doc.window.document.location;
//   var uri = {
//     spec: location.href,
//     host: location.host,
//     prePath: location.protocol + '//' + location.host,
//     scheme: location.protocol.substr(0, location.protocol.indexOf(':')),
//     pathBase:
//       location.protocol +
//       '//' +
//       location.host +
//       location.pathname.substr(0, location.pathname.lastIndexOf('/') + 1)
//   };

//   let reader = new Readability(doc.window.document);
//   let article = reader.parse();
//   console.log('article: ' + article);
// };

// var JSDOM = require('jsdom').JSDOM;
// var doc = new JSDOM("<body>Here's a bunch of text</body>", {
//   url: 'https://www.example.com/the-page-i-got-the-source-from'
// });
// let reader = new Readability(doc.window.document);
// let article = reader.parse();

export default handle;
