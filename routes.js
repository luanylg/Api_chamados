
import express from 'express'
import sql from 'mssql'
import { sqlConfig } from './server.js';

const pool = new sql.ConnectionPool(sqlConfig)
const routes = express.Router()
await pool.connect();

    routes.get('/', async (req, res)=>{
    try{
            const { recordset } =  await pool.query`select * from registro`
            return res.status(200).json(recordset)
    }
    catch(error){
            return res.status(501).json('NN encontrado... ')
    }
    })

    routes.get('/chamado/:id', async (req, res)=>{
        try{
            const { id } = req.params
            const { recordset } =  await pool.query`SELECT * from registro WHERE id = ${ id }`
            return res.status(200).json(recordset)
        }
        catch(error){
            return res.status(501).json('NN existente... ')
        }
    })
    
    routes.post('/chamado/novo', async (req, res)=>{
        try{
            const { data, nome, descricao} = req.body;
            await pool.query`insert into Produtos values(${data},${nome},${descricao} )`
            return res.status(201).json(`ok`)
        }

        catch(error){
            return res.status(501).json('erro ao inserir... ')
        }
    })

export default routes