const  express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const productV1 = require('./routers/product.router');
const auth = require('./routers/Authentication');
const pageNotFound = require('./middleware/404Handler');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const port = 3100;
app.use(bodyParser.json());
app.use(cors());


app.get('/', (req, res) => res.send('Hello World!'));

app.use('/user',auth);
app.use('/products',productV1);

app.use(pageNotFound);
app.use(errorHandler);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))