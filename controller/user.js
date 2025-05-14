const User= require('../models/user');


module.exports.rendersignup=(req,res)=>{
    res.render("users/signup.ejs");
};
module.exports.signup=async(req,res)=>{
    try{
        let {username , email , password}= req.body;
   const newUser=new User({username , email});
  const registeredUser= await User.register(newUser, password);
  req.login(registeredUser ,(err)=>{
    if(err){
        next(err);
    }
    req.flash("success" , "welcome to WanderLust ");
    res.redirect("/listings");
  });
 
    }
    catch(e){
        req.flash("error", e.message);
        res.redirect("/signup");
    }
}

module.exports.renderlogin=(req,res)=>{
    res.render("users/login.ejs");
}

module.exports.login=async (req, res)=> {
    req.flash("success" , "Welcome to WanderLust you gare logged in");
    let redirect=res.locals.redirectUrl || "/listings";
    res.redirect(redirect);
    };
  
    module.exports.logout=  (req,res,next)=>{
        req.logOut((err)=>{
            if(err){
               return next(err);
            }
            req.flash("success", "You are Logged out");
            res.redirect("/listings");
        })
      
    }