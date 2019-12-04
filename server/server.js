/* eslint-disable no-console */
// eslint-disable-next-line import/newline-after-import
const app = require('./router.js');
const port = 3001;

app.listen(port, () => console.log('Serving up fresh reviews on port', port));
