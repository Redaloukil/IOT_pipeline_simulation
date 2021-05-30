const { Framework } = require("../models/framework")


module.exports = {
    createFrameworkByAdmin: async (framework) => {
      let framework = new Framework(framework);
      framework = await framework.save();
      if(framework){
        return framework;
      }
      return null

    },
    getFrameworkByID:(id) => {
        const framework = Framework.findOne({_id:id});
        if(framework) {
            return framework;
        }
        return null;
    },
}