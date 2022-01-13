const express = require('express')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))

// Static Homepage
app.get('/', (req, res) => {
	res.send('index')
})

// Starting Server
const PORT = process.env.PORT || 5000
app.listen(PORT, ()=> {
	console.log(`Server started on port ${PORT}`)
})