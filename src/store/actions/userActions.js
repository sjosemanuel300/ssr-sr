import NotificationHandler from '../../handlers/Notifications';
import axios from 'axios';
import store from '../store';
import initData from '../../_data';

/**
 * @description loads the selected language json file for the given code [es, en]
 * @param code
 * @returns {Promise<any>}
 */
let loadJsonLang = (code) => {
    return new Promise( (resolve, reject) => {
        resolve( require('./../../language/' + code + '.json') );
        reject(new Error("Archivo de idiomas no encontrado."));
    })
};

/**
 * @description fetch all users
 * @returns {function(*): Promise<AxiosResponse<any> | never | never>}
 */
const getTable = () => {
    return (dispatch) => {
            dispatch({
                type: 'SET_TABLE',
                data: initData
            })
        }
};

/**
 * @description updates user app data.
 * @returns {function(*): Promise<AxiosResponse<any> | never | never>}
 */
const updateUser = () => {
    
    return (dispatch) => {
        let aux_data = {
            "first_name": store.getState().clientReducer.user.new_first_name,
            "last_name": store.getState().clientReducer.user.new_last_name
        };
        dispatch({type: "WAIT_FOR_RESPONSE"});
        return axios.put(URL + '/users/' + store.getState().clientReducer.user.id, aux_data).then( (res) => {

            let data = res.data.user;
            data.new_first_name = res.data.user.first_name;
            data.new_last_name = res.data.user.last_name;
            data.new_email = res.data.user.email;
            data.new_email_confirmation = '';
            data.old_password = '';
            data.new_password = '';
            data.new_password_confirmation = '';
            data.apps = store.getState().clientReducer.user.apps;

            dispatch({
                type: 'FETCH_USER',
                user: data,
                session: res.data.user,
            });

            dispatch({
                type: 'NOTIFICATION',
                notification: NotificationHandler(res)
            })

        }).catch((err) => {
            dispatch({
                type: 'NOTIFICATION',
                notification: NotificationHandler(err.response)
            })
        });
    }
};

/**
 * @description change the current reading language for the new
 * given by code parameter
 * @param code
 * @returns {function(*): Promise<any | never>}
 */
const changeUserDefaultLanguage = (code) => {
    return (dispatch) => {
 
        dispatch({type: "WAIT_FOR_RESPONSE"});
        return loadJsonLang(code).then(
            response => {
                sessionStorage.setItem('lang_code', code);
                axios.defaults.headers.common['lang'] = code;
                dispatch({
                    type: "SET_USER_DEFAULT_LANGUAGE",
                    lang_code: code,
                    json_lang: response
                });
                dispatch({type: "WAIT_FOR_RESPONSE"})
            }
        )
    }
};

export {
    getTable,
    updateUser,
    changeUserDefaultLanguage
};
