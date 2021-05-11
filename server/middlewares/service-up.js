const isServiceUp = (seviceReady) => {
    return (req,res,next) => {
        if(!seviceReady) {
            return res.status(500).json({message:"Internal service error"});
        }
        next();
    }
}

module.exports = {
    isServiceUp,
}
