const express = require('express');
const app = express();
const port = 3333; // Puerto servidor

app.use(express.static('public'));

 
const Twit = require('twit');
let MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

const client = new Twit({
  consumer_key: 'YJBM6AtfVLluqt1SFIk7uEXwk',
  consumer_secret: 'kRyWCwrnrXPfvFmUJTn4zWtjkmGlSvkQE6KGBJwbgnLFOgXXhW',
  access_token: '224633212-JdqR174FU2g60MDeK6d4Hp1Z5Yd5CPoW6abegxHO',
  access_token_secret: '0LhZNLVTT8KbBpMD7cJ1exrL88BeoNzNhqEVYxfs0MEhs',
});

const params = {
    q: '#vacaciones',
    count: 100,
    result_type: 'recent',
  };
  const tweets = "";
  client.get('search/tweets', params, (err, data, response) => {
    if (err) {
      console.log('Ocurrió un error:', err);
    } else {
      tweets = data.statuses;
      tweets.forEach((tweet) => {
        console.log(tweet.text);
      });
    }
  });

  app.post('/', (req, res) => {
    MongoClient.connect(url, function(err, db) {
        if (err) {
            console.error('An error occurred while connecting to MongoDB:', err);
            return;
          }
        var dbo = db.db("twitter");
        dbo.collection("tweets").insertMany(tweets, (err, result) => {
            if (err) {
              console.error('An error occurred while inserting tweets:', err);
              return;
            }
          
            console.log(`${result.insertedCount} tweets inserted successfully`);
        });
    });

});

/*
  function createTagCloud(tags) {
    // Configuración de la nube de etiquetas
    var width = 800;
    var height = 400;
   
    // Crea la escala de tamaños para las etiquetas
    var fontSize = d3.scaleLinear()
      .domain([d3.min(tags, d => d.value), d3.max(tags, d => d.value)])
      .range([10, 50]);
  
    // Crea el diseño de la nube de etiquetas
    var layout = d3.layout.cloud()
      .size([width, height])
      .words(tags.map(d => ({text: d.tag, size: fontSize(d.value)})))
      .padding(5)
      .rotate(() => ~~(Math.random() * 2) * 90)
      .fontSize(d => d.size)
      .on("end", draw);
  
    // Genera la nube de etiquetas
    layout.start();
  
    // Función para dibujar la nube de etiquetas
    function draw(words) {
      d3.select("#tagCloud")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
        .selectAll("text")
        .data(words)
        .enter()
        .append("text")
        .style("font-size", d => d.size + "px")
        .style("fill", "steelblue")
        .attr("text-anchor", "middle")
        .attr("transform", d => "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")")
        .text(d => d.text);
    }
  }
  
  // Ejemplo de uso
  var tags = [
    { tag: "tag1", value: "#f1" },
    { tag: "tag2", value: "#f1Alonso" },
    { tag: "tag3", value: "#f1Hamilton" },

  ];
  
  createTagCloud(tags);
  */