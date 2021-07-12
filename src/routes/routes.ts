import express, { request, Response, response } from 'express';
import authRoute from '../routes/routes.auth' 
import Session from '../routes/routes.session'
import User from '../routes/routes.user'
const routes = express.Router()

routes.use('/noticia', authRoute)
routes.use('/session',Session)
routes.use('/user',User)
routes.get('/',(request, response)=>{
    response.send({message:"Teste"})
})

export default routes;




