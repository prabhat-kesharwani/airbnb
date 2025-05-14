const express=require('express');
const router=express.Router();

const wrapAsync = require('../utlis/wrapAsync.js');

const {isLoggedIn, isOwner ,validateListing}= require("../middleware.js");
const listingController =require('../controller/listing.js');
const multer  = require('multer')
const {storage} =require('../cloudConfig.js');
const upload = multer({storage});

router.route("/")
.get( wrapAsync(listingController.index))
.post(isLoggedIn,upload.single('listing[image]'),validateListing ,wrapAsync(listingController.createListing));


router.get("/new",isLoggedIn ,listingController.rendernewForm)

router.route("/:id")
.get( wrapAsync(listingController.showListing))
.put(isLoggedIn,isOwner,upload.single('listing[image]'),validateListing,wrapAsync(listingController.updatelisting))
.delete(isLoggedIn ,isOwner, wrapAsync(listingController.destroylisting));

router.get("/:id/edit" ,isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm));



 module.exports=router;

 // index route
//  router.get("/", wrapAsync(listingController.index));
 // new route get request
//  router.get("/new",isLoggedIn ,listingController.rendernewForm)
 // show route
//  router.get("/:id" , wrapAsync(listingController.showListing));
 // new post request or create route
//  router.post("/",isLoggedIn,validateListing ,wrapAsync(listingController.createListing));
 //edit get request
//  router.get("/:id/edit" ,isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm));
 //edit put route
//  router.put("/:id",isLoggedIn,isOwner,validateListing,wrapAsync(listingController.updatelisting));
 // delete route
// router.delete("/:id",isLoggedIn ,isOwner, wrapAsync(listingController.destroylisting));