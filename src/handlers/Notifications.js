import store from '../store/store';

var lang = store.getState().clientReducer.json_lang;

export default function NotificationHandler (request) {
    /**
     ***************** AVAILABLE LEVELS **************** 
     *   0  => DONT USE THIS ONE IS JUST FOR INITIALIZATION,
     *   1  => info,
	 *	 2  => success,
	 *	 3  => warning,
     *	 4  => error
     ***************************************************
     */

     /**
      * *********** FORMAT FOR ERROR CODES *************
      *   200, 201          => response (res)
      *   401, 403, 422     => error.response (err.response)
      */

    /**
     * default text is loaded by default as an error
     */
    let notification = {
        message: lang.notifications.default_msg_error,
        level: 4
    };

    /**
     * if request.response is equal to undefined its possible to be error 500,
     * anyway, if we don't know the status code of the request, we must show
     * the default message text for errors
     */
    if(request !== undefined) {

        switch (request.status) {
            case 200:
            case 201:
                notification = {
                    level: 2,
                    message:  request.data.message,
                    errors: {}
                };
                break;
			case 402:
				alert();
				break;
            case 401:
            case 403:
            case 404:
            case 422:
            case 400:
                notification = {
                    level: 4,
                    message: request.data.message || request.data.error.message,
                    errors: request.data.errors || {}
                };
                break;
			case 409:
				notification = {
					level: 4,
					message: lang.notifications.company_already_created,
					errors: {}
				}
				break;
            default: break;
        }
    }

    return notification;
}
