const frameworkService = require('../services/framework');

module.exports = {
    createFrameworkByAdmin: async (req, res, next) => {
        const framework = {
            admin:req.body.user,
            name: req.body.name,
        }
        const createdFramework = await frameworkService.createFrameworkByAdmin(framework);
        if(createdFramework){
            return res.status(201).send(createdFramework);
        }
        return res.status(401).send({message:"could not create new framework"});
    },
    getFrameworkById: async (req,res,next) => {
        const {id} = req.params;
        const framework = await frameworkService.getFrameworkByID(id);
        if(framework){
            return res.status(200).send(framework);
        }
        return res.status(404).send({message:"could not create framework"});
    },  
}