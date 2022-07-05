import db from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

db.connect(process.env.DBURI)
.then(res => console.log(`Conectado ao banco de dados com sucesso em "${process.env.DBURI}"`))
.catch(err => console.error(`Erro ao conectar ao banco de dados: ${err}`))