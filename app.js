const express = require(`express`)
const mongoose = require(`mongoose`)
const passport = require(`passport`)
const path = require(`path`)
const bodyParser = require(`body-parser`)
const cors = require(`cors`)
const morgan = require(`morgan`)
//const authRoutes = require(`./routes/auth`)
const adminRoutes = require(`./routes/admin`)
const categoryRoutes = require(`./routes/category`)
//const contactRoutes = require(`./routes/contact`)
//const homeRoutes = require(`./routes/home`)
//const portfolioRoutes = require(`./routes/portfolio`)
const postRoutes = require(`./routes/post`)
//const priceRoutes = require(`./routes/price`)
const clientPath = path.join(__dirname, `client`)
const keys = require(`./config/keys`)
const app = express()

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true 
})
 .then(() => console.log(`MongoDB connected...`))
 .catch(error => console.log(error))

app.use(passport.initialize())
require(`./middleware/passport`)(passport)

app.use(morgan(`dev`))
app.use(`/uploads`, express.static(`uploads`))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

//app.use(`/api/auth`, authRoutes)
app.use(`/api/admin`, adminRoutes)
app.use(`/api/admin/category`, categoryRoutes)
//app.use(`/api/contact`, contactRoutes)
//app.use(`/api/home`, homeRoutes)
//app.use(`/api/portfolio`, portfolioRoutes)
app.use(`/api/admin/post`, postRoutes)
//app.use(`/api/price`, priceRoutes)
app.use(express.static(clientPath))



module.exports = app

