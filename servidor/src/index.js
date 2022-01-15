import express from "express"
import { graphqlHTTP } from "express-graphql"
import { dbConnection } from "./database/config"
import schema from "./graphql/schema"
import { validarJwt } from "./middleware/validat-jwt"
import cors from 'cors'

const app = express()

dbConnection()
app.use(cors())
app.use(validarJwt)
app.use('/graphql', graphqlHTTP((req) => ({
    graphiql: true,
    schema: schema,
    context:{
        user: req.user
    }
})))

app.listen(process.env.PORT || 4000, () => {
    console.log(`Servidor corriendo por el puerto ${process.env.PORT || 4000}`)
})
