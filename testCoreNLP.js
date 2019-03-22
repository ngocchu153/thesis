// import CoreNLP, { Properties, Pipeline, ConnectorServer } from 'corenlp';
// import lodash from 'lodash/fp'

// const connector = new ConnectorServer({ dsn: 'http://localhost:9000' });
// const props = new Properties({
//   annotators: 'tokenize,ssplit,pos,lemma',
// });
// const pipeline = new Pipeline(props, 'English', connector);
// let document = new CoreNLP.simple.Document('I would have gone. You could have been dead.');

// pipeline.annotate(document)
//   .then(document => {
//     let lastIndex = JSON.parse(lodash.at('_index', lodash.last(lodash.last(lodash.at('_sentences', document)))));
//     let jsonArray = [];
//     for (let i = 0; i <= lastIndex; i++) {
//       let sent = document.sentence(0);
//       let tempJSONArray = mapWord_POSTag(sent.words(), sent.posTags());
//       jsonArray = jsonArray.concat(tempJSONArray);
//     }
//     exportJSONFile(jsonArray, 'myjsonfile.json');
//   })
//   .catch(err => {
//     console.log('err', err);
//   });

// function mapWord_POSTag(words, posTags) {
//   let res = words.map((word, i) => {
//     return {word: word, POStag: posTags[i]}
//   })
//   return res;
// }

// function exportJSONFile(listString, fileName) {
//   var obj = {
//     list: []
//   };
//   listString.forEach( element =>
//     obj.list.push({word: element.word, POStag: element.POStag})
//   );
//   var json = JSON.stringify(obj);
//   var fs = require('fs');
//   fs.writeFile(fileName, json, 'utf8', (err) => {if (err) throw err; console.log('complete');});;
// }
