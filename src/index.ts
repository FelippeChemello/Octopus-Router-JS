import express from 'express'
import cors from 'cors'
import path from 'path'
import 'express-async-errors'

//@ts-ignore
import routesConfig from './routesConfig.js'
// import errorHandler from './errors/handler'

interface Route {
    pathToEntrypoint: string
    entryPointRoutes: string
    path: string
}

const app = express()

app.use(cors())
app.use(express.json())

const routes = routesConfig.default as Route[]
routes.forEach(route => {
    const applicationRoutes = require(path.join(__dirname, '..', 'projects', route.pathToEntrypoint, route.entryPointRoutes))

    app.use(`/${route.path}`, applicationRoutes.default)
})

// app.use(errorHandler)

app.listen(3000, '0.0.0.0', () => {
    console.log('Escutando na porta 3000')
})
