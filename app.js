const express = require('express')
const app = express()
const port = 3009

app.get('/', (req, res) => {
  res.send('Proklamasi. Kami, Bangsa Indonesia dengan ini menjatakan kemerdekaan Indonesia. Hal2 yang mengenai pemindahan kekoeasaan d.l.l., diselenggarakan dengan tjara saksama dan dalam tempoh jang sesingkat-singkatnja. Djakarta, 17-08-05 wakil2 bangsa Indonesia,')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
