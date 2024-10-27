import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.routes.js'

dotenv.config()

const app = express()

app.use('/api/auth',authRoutes)

const PORT = process.env.PORT || 5000

app.listen(5000,()=>{
    console.log(`Server running on port http://localhost:${PORT}`)
})
