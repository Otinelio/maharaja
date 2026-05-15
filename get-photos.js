const https = require('https');

function getPhotos(query) {
  return new Promise((resolve) => {
    https.get(`https://unsplash.com/s/photos/${query}`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const matches = [...data.matchAll(/images\.unsplash\.com\/photo-([a-zA-Z0-9\-]+)\?/g)];
        if(matches.length > 0) {
          resolve(matches.map(m => m[1]));
        } else {
          resolve([]);
        }
      });
    });
  });
}

(async () => {
  console.log("Biryani:", (await getPhotos("biryani")).slice(0, 3));
  console.log("Naan:", (await getPhotos("naan")).slice(0, 3));
})();
