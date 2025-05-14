class ExpressError extends Error {
    constructor(statusCode , message){
        super();
        console.log("ExpressError created with:", statusCode, message);
      this.statusCode=statusCode;
      this.message=message;
    }
}
module.exports=ExpressError;