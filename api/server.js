import app from './src/config/api'
import 'dotenv/config'

const PORT = process.env.PORT || 3000

app.listen(3000, () => console.log(`Server rodando na porta ${PORT}`))