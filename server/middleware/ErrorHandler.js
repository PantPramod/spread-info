import  constats  from '../constants.js'

const errorHandler = (err, req, res, next) => {
    
    // console.log(err)

    const statusCode = res.statusCode?res.statusCode:500

    switch (statusCode) {
        case constats.BAD_REQUEST:
            res.json({
                title: "Bad Request",
                message: err.message,
                stackTrace: err.stackTrace
            })
        
        case constats.FORBIDDEN:
            res.json({
                title: "Forbidden",
                message: err.message,
                stackTrace: err.stackTrace
            })
        
        case constats.UNAUTHORIZED:
            res.json({
                title: "Unauthorized",
                message: err.message,
                stackTrace: err.stackTrace
            })
       
        case constats.NOT_FOUND:
            res.json({
                title: "Not Found",
                message: err.message,
                stackTrace: err.stackTrace
            })
        
        case constats.SERVER_ERROR:
            res.json({
                title: "Internal Server Error",
                message: err.message,
                stackTrace: err.stackTrace
            })
          
        default:
            console.log(err)
            res.status(500).json({
                title: "Uncaught",
                message: err.message,
                stackTrace: err.stackTrace,
                status:res.statusCode
            })
         
            
    }
}

export default errorHandler

const mapCodeToMsg = {
    404: "Not Found",
    500: "Internal Server Error",
    403: "Forbidden",
    401: "Unauthorized"
}
