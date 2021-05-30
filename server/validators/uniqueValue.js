
module.exports = {
    uniqueValue : (Model, key) => {
        return async (req, res, next) => {
            const value =  req.body[key];
            try {
                const document = await Model.findOne({[key]:value});
                if(document){
                    res.status(401).send({message:`The value ${key} has already been taken`});
                    return;
                }
                next();
            } catch {
                return null
            }
        }
    }
}