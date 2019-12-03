const app = require('./router.js');
const port = 3001;

app.listen(port, () => console.log('Serving up reviews on port', port));
