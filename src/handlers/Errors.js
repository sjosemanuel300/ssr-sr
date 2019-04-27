export default function Errors (error) {
    //Es casi seguro de que si errors no contiene response, es un 500
    if(error.response === undefined) {
        return {
            server: '500'
        }
    }

    if( error.response.hasOwnProperty('status') ) {
        switch(error.response.status) {
            case 401:
                return error.response.data.error.message
            case 422:
                return error.response.data.errors
            default: break;
        }
    }
}
