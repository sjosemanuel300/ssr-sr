import NotificationHandler from '../../handlers/Notifications';
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
 * @returns 
 */
const getTable = () => {
    return (dispatch) => {
            dispatch({
                type: 'SET_TABLE',
                data: initData
            })
        }
};

const searchDataString = ( data, searchValue ) => {
    let results = [];
    let no_results = [];
    data.forEach(element => {
        if (element.name.toLowerCase().search(searchValue.toLowerCase()) > -1){
            results.push(element);
        }else {
            no_results.push(element);
        }
    });
    return results.concat(no_results);
}

const searchDataSelecte = ( data, searchValue ) => {
    let results = [];
    let no_results = [];
    data.forEach(element => {
        if (element.position.toLowerCase().search(searchValue.toLowerCase()) > -1){
            results.push(element);
        }else {
            no_results.push(element);
        }
    });
    return results.concat(no_results);
}

const searchData = ( data ) => {
    return (dispatch) => {
        console.log( data );
        let table = initData;  
        let searchName = [], selectValue = [], res = [];
        if(data.searchValue !== ''){
            searchName = searchDataString( table.dataTransactions.data, data.searchValue);
        }
        if(data.selectValue !== '' ) {
            selectValue = searchDataSelecte( table.dataTransactions.data, data.selectValue);
        }
        console.log(selectValue);
        table.dataTransactions.data = searchName.concat( selectValue );
        
        dispatch({
            type: 'SET_TABLE',
            data: table
        })
    }
}

/**
 * @description updates user app data.
 * @returns 
 */
const updateUser = () => {
    
    return (dispatch) => {
        let aux_data = {
            "first_name": store.getState().clientReducer.user.new_first_name,
            "last_name": store.getState().clientReducer.user.new_last_name
        };
        dispatch({type: "WAIT_FOR_RESPONSE"});
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
    changeUserDefaultLanguage,
    searchData,
    searchDataString
};
