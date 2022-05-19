import express from 'express'
import {engine} from 'express-handlebars'

const app = express()

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './templates')
const state = 'red'



app.get('/', (req, res) => {
    // console.log(req.query) rodo konsolei ivesta info
    // res.send('Titulinis')
    // const vardas=req.query.vardas
    // console.log(vardas)
    // console.log(req.query.kodas)
    const kodas = req.query.kodas
    // if (
    //     kodas !=undefined &&
    //     kodas.length === 3 &&
    //     kodas.includes(`1`) &&
    //     kodas.includes(`2`) &&
    //     kodas.includes(`3`)
    //     ) {
    //         console.log('Kodas teisingas')
    //     } else {
    //         console.log(`Blogas kodas`)
    //     }
    // let spalva = 'white'
    // if (kodas == 1) {
    //     spalva = 'red'
    // }
    // res.render('index', {spalva})
})


app.post('/', (req, res) => {
    const kodas = req.query.kodas
    console.log(kodas)
    res.render('index')
})






// perduota duomenys i about
app.get('/about', (req, res) => {
   let x = 10
   let array = [10, 15, 'zalgiris', 19999]
   let object = [
       {vardas : 'Test', pavarde : 'Testinis'},
       {vardas : 'Adoms', pavarde : 'Mickevicius'}
   ]
   let salis = {
       salis : {
           pavadinimas : 'Lietuva',
           sostine :   'Vilnius'
       }
   }
   res.render('about', {x, z : true, array, object, salis})
})



 



app.listen(3000)