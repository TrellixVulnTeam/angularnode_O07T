const connection = require('../database/connection');

const responseModel = {
    success:false,
    data: [],
    error:[]
}

module.exports = {

    async create(req, res){
        const response = {...responseModel}

        const { username, password} = req.body;

        const [, affectRows] = await connection.query(
            `INSERT INTO categorias VALUES (DEFAULT, '${namecategoria}' ,NOW(), NOW());`
        )
        const [, affectRows] = await connection.query(
            `INSERT INTO dispositivos VALUES (DEFAULT, '${namedispositivo}','${cor}','${partnumber}','${iddispositivo}' ,NOW(), NOW());`
        )
        response.success = affectRows > 0 
        return res.json(response)
    },
    async login(req, res){
        const response = {...responseModel}

        return res.json(response)
    }
}