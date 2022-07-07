import Categorys from "../models/CategoryModel.js";

export const getCategory = async (req, res) =>{
    try {
        const categorys = await Categorys.findAll({
            attributes:['id','title']
        });
        res.json(categorys);
    } catch (error) {
        console.log(error)
    }
}

export const createCategory = async (req, res) => {
        const { title } = req.body;
        try {
            await Categorys.create({
                title:title
            });
            res.status(201)
            res.json({msg:"Create Category Berhasil"});
        } catch (error) {
            console.log(error);
        }
}