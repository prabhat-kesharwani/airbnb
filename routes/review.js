const express=require('express');
const router=express.Router({mergeParams :true});
const {validateReview, isLoggedIn, isReviewAuthor}= require("../middleware.js");
const wrapAsync = require('../utlis/wrapAsync.js');
const reviewController=require('../controller/review.js');

// review post route
router.post("/",isLoggedIn,validateReview ,wrapAsync(reviewController.createReview));
// delete the reviews
router.delete("/:reviewId",isLoggedIn ,isReviewAuthor,reviewController.destroyReview );
    
module.exports=router;