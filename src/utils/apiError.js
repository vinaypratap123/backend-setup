class ApiError extends Error{
    constructor(message='something went wrong',statusCode,errors=[],stack,){
        super(message),
        this.data = null,
        this.message = message,
        this.statusCode = statusCode,
        this.errors = errors,
        this.success = false
        if(stack){
            this.stack = stack
        }
        else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}
export {ApiError}