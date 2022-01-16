const { response } = require('express');
const connection = require('../database/connection')
const responseModel = {
    success: false,
    data: [],
    error: []
}
module.exports = {

    async create(req,res){
        const{data}  = req.body;
        const [, affectRows] = await connection.query(
            `
            INSERT INTO category VALUES(DEFAULT,'${namecategory}', NOW(), NOW());
            INSERT INTO device VALUES(DEFAULT,'${namedevice}','${color}','${partnumber}','${idcategory}', NOW(), NOW());
            `
        )
        response.success = affectRows > 0
        return res.json(response)
        
    },
    async findAllDevice(req,res){
        const{data}  = req.body;
        const [, affectRows] = await connection.query(
            `
            SELECT * FROM device;
            `
        )
        response.success = affectRows > 0
        return res.json(response)
    },
    async findAllCategory(req,res){
        const{data}  = req.body;
        const [, affectRows] = await connection.query(
            `
            SELECT * FROM category;
            `
        )
        response.success = affectRows > 0
        return res.json(response)
    },
    async findOneDevice(req,res){
        const{data}  = req.body;
        const [, affectRows] = await connection.query(
            `
            SELECT * FROM device WHERE id=${id};
            `
        )
        response.success = affectRows > 0
        return res.json(response)
    },
    async findOneCategory(req,res){
        const{data}  = req.body;
        const [, affectRows] = await connection.query(
            `
            SELECT * FROM category WHERE id=${id};
            `
        )
        response.success = affectRows > 0
        return res.json(response)
    },
    async insertDevice(req,res){
        const{data}  = req.body;
        const [, affectRows] = await connection.query(
            `
            INSERT INTO device (id, namedevice, color, partnumber, idcategory, create_at, updated_at) VALUES (${id}, ${namedevice}, ${color}, ${partnumber}, ${idcategory}, ${create_at}, ${updated_at});
            `
        )
        response.success = affectRows > 0
        return res.json(response)
    },
    async insertCategory(req,res){
        const{data}  = req.body;
        const [, affectRows] = await connection.query(
            `
            INSERT INTO category (id, namecategory, create_at, updated_at) VALUES (${id}, ${namecategory}, ${create_at}, ${updated_at});
            `
        )
        response.success = affectRows > 0
        return res.json(response)
    },
    async deleteDevice(req,res){
        const{data}  = req.body;
        const [, affectRows] = await connection.query(
            `
            DELETE FROM device WHERE id = ${id};
            `
        )
        response.success = affectRows > 0
        return res.json(response)
    },
    async deleteCategory(req,res){
        const{data}  = req.body;
        const [, affectRows] = await connection.query(
            `
            DELETE FROM category WHERE id = ${id};
            `
        )
        response.success = affectRows > 0
        return res.json(response)
    }
}