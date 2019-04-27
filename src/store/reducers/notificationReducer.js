const initialState = {
    preloader: false,
    message: "",
    level: 0,
    errors: {}
};

const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'NOTIFICATION':
            return { ...state, ...action.notification, preloader: false };

        case 'CLEAR_ERRORS':
            return { ...state, errors: action.errors };

        case 'VANISH_ERRORS':
            return { ...state, errors: {} };

        case 'REGISTER_SUCCESS':
            return {
                ...state,
                ...action.notification,
                preloader: false,
            };

        case 'REGISTER_ERROR':
            return {
                ...state,
                ...action.notification,
                preloader: false,

            };

        case 'NOTIFICATION_TOKEN':
            return {
                ...state,
                ...action.notification,
                preloader: false
            };

        case 'NOTIFICATION_TOKEN_ERROR':
            return {
                ...state,
                ...action.notification,
                preloader: false
            };

        case 'VERIFICATION_TOKEN_ERROR':
            return {
                ...state,
                ...action.notification,
                preloader: false
            };

        case 'WAIT_FOR_RESPONSE':
            return { ...state, preloader: !state.preloader };

        default: return state;
    }
};

export default notificationReducer;