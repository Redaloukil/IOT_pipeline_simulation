module.exports = {
    isAuthenticated:(req,res,next) => {
        
    },  
    isAdmin:(req,res,next) => {
        next();
    }
    
}