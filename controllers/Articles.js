import Articles from "../models/ArticleModel.js";

export const getArticle = async (req, res) =>{
    try {
        const articles = await Articles.findAll({
            where: { 'is_visible': true },
            attributes:['id','title','short_desc','desc','category_id','is_visible','image'],
        });
        res.json(articles);
    } catch (error) {
        console.log(error)
    }
}

export const getArticlebyID = async (req, res) =>{
    try {
        const article = await Articles.findByPk(req.params.id);
        if (article === null) {
            console.log('Not found!');
          } else {
            res.json(article);
          } 
        
    } catch (error) {
        console.log(error)
    }
}
export const createArticle = async (req, res) => {
        const { title, short_desc,desc, category_id, is_visible, image } = req.body;
        try {
            await Articles.create({
                title:title,
                short_desc:short_desc,
                desc:desc, 
                category_id : category_id,
                is_visible: is_visible,
                image:image
            });
            res.status(201);
            res.json({msg:"Create Article Berhasil"});
        } catch (error) {
            console.log(error);
        }
}