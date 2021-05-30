const { Framework } = require("../models/framework");


module.exports = {
    createFrameworkByAdmin: async (framework) => {
        try {
            let createdFramework = new Framework(framework);
            createdFramework = await framework.save();
            if(createdFramework){
                return createdFramework;       
            }
            return null;
        } catch {
            return null;
        }
    },
    getFrameworkByID: async (id) => {
        try {
            const framework = await Framework.findOne({_id:id});
            if(framework) {
                return framework;
            }
            return null;
        } catch {
            return null;
        }
    },
}