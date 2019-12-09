const express = require('express')
const app = express()
app.set('secret', '2323232323')
app.use(require('cors')())
app.use(express.json())
app.use('/uploads', express.static(__dirname + '/uploads')) /*托管静态文件*/
app.use('/admin', express.static(__dirname + '/admin')) /*托管静态文件*/
app.use('/', express.static(__dirname + '/web')) /*托管静态文件*/
require('./routes/admin')(app)
require('./plugins/db')(app)
require('./routes/web')(app)
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(3000, () => console.log(`http://localhost:3000`))