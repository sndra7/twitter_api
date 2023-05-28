# twitter_api

<p align="center">
  <a href="#how-to-use">How To Use</a> •
  <a href="#files">Files</a> •
</p>

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/sndra7/twitter_api

# Install dependencies
$ npm install

# Run the app
$ node index.js
```

## Files

- index.js: Recoge toda la lógica de implementación, para realizar la búsqueda de tweets mediante el api. También incluye como se almacenarían los datos en mongodb. Por último un ejemplo de como se realizaría un gráfico de nube de tags con d3.js
- package.json: dependencias de librerias utilizdas en el proyecto
- tweets-table.js: ejecuta el codigo para pintar en una tabla en html (contenida en la carpeta public -> index.html) de los tweets recogidos desde el api.
