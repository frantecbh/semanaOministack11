const cors = require('cors')
const express =  require('express');
const routes =  require('./routes')

const app = express();




app.use(cors())
app.use(express.json())
app.use(routes)

/**
 *  Metodos HTTP
 * 
 * GET: Buscar uma informação do Back-end
 * POST: Criar uma informação no Back-end
 * PUT: Alterar uma informação no Bakc-end
 * DELET : Deletando uma finformação no backend
 */

 /**
  * TIPOS DE PARAMETROS
  * 
  * Query Params: Parametros noemados enviados na rota após o simbolo de ? (filtros, paginação, )
  * Route Params: Parametros utilizados para identificar recursos
  * Request Body: {"nome": "Francisco Menezes"}
  * 
  * 
  */

  /**
   * SQL: MySql, SqLite, Microsoft SQL Server
   * NoSql: MongoDB, CouchDB
   * 
   * 
   */

   /**
    * 
    * 
    */







app.listen(3331, ()=>{

    console.log("estou logado: http://localhost:3331");

})