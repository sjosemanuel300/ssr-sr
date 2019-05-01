import store from '../store';
 
/**
 * @description empty the whole notification state
 * @returns {Function}
 */
const clearNotification = () => {
    return (dispatch) => {
        var initNotification = {
                message: '',
                title: '',
                level: 0,
                errors: {
                    ...store.getState().notificationReducer.errors
                }
        };
        dispatch({
            type: 'NOTIFICATION',
            notification: initNotification
        })
    }
};
 
/**
 * @description [...]
 * @param notification
 * @returns {Function}
 */
const addNotification = ( notification ) => {
    return (dispatch) => {
        dispatch({
            type: 'NOTIFICATION',
            notification: notification
        })
    }
};
 
/**
 * @description handles clear input error
 * @param field
 * @param prefix [optional]
 * @returns {Function}
 */
const clear = (field, prefix = null) => {
    return (dispatch) => {
        let errors = store.getState().notificationReducer.errors;
 
        if (errors.hasOwnProperty(field)) {
            delete errors[field];
        }
        
        if (prefix) {
            field = `${prefix}.${field}`;
            delete errors[field]
        }
 
        dispatch({
            type: 'CLEAR_ERRORS',
            errors: errors
        })
    }
};
 
const closeNotification = () => {
    return (dispatch) => {
        dispatch({ 
            type: 'NOTIFICATION',
            notification: {
                level: 0
            }
        })
    }
}
 
/**
 * @description verifies if the given field exists in error's object
 * @param field
 * @returns {function(*): boolean}
 */
const has = (field) => {
    return (dispatch) => {
        return store.getState().notificationReducer.errors.hasOwnProperty(field);
    }
};
 
/**
 * @description retrieves the value for the given field
 * @requires has(field) to work properly
 * @param field
 * @returns {function(*): *}
 */
const get = (field) => {
    return (dispatch) => {
        return store.getState().notificationReducer.errors[field][0]
    }
};
 
/**
 * @description removes every single key from the error's object
 * @returns {Function}
 */
const vanish = () => {
    return (dispatch) => {
        dispatch({type: 'VANISH_ERRORS'});
    }
};
 
export { clearNotification, clear, has, get, vanish, addNotification, closeNotification };