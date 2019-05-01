import axios from 'axios';
import store from '../store';
import NotificationHandler from '../../handlers/Notifications';
var moment = require('moment');

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
        dispatch({type: "WAIT_FOR_RESPONSE"});
        return axios.get('https://football-players-b31f2.firebaseio.com/players.json?print=pretty').then( (res) => {
            
            let  _data = [];

            res.data.forEach(element => {
                let nacimiento=moment(element.dateOfBirth), hoy=moment(), anios=hoy.diff(nacimiento,"years");
                element.age = anios;
                _data.push(element);
            });

            dispatch({
                type: 'SET_TABLE',
                table: _data
            });

            dispatch({type: "WAIT_FOR_RESPONSE"});
 
        }).catch( (err) => {
            dispatch({type: "WAIT_FOR_RESPONSE"});
            dispatch({
                type: 'NOTIFICATION',
                notification: NotificationHandler(err.response)
            });
        });
    }
};

const searchDataString = ( data, searchValue, name) => {
    let results = [];
    let no_results = [];
    data.forEach(element => {
        if (element[name].toLowerCase().search(searchValue.toLowerCase()) > -1){
            results.push(element);
        }else {
            no_results.push(element);
        }
    });
    return results.concat(no_results);
}

const searchDataNum = ( data, searchValue, name) => {
    let results = [];
    let no_results = [];
    data.forEach(element => {
        if (element[name] === parseInt(searchValue)){
            results.push(element);
        }else {
            no_results.push(element);
        }
    });
    return results.concat(no_results);
}

const searchData = ( data ) => {
    return (dispatch) => {
        let table = store.getState().clientReducer.table;  
        let searchName = [], selectValue = [], searchValueNum = [];

        if(data.searchValueNum !== '' ) {
            searchValueNum = searchDataNum( table, data.searchValueNum, 'age');
        }

        if(data.selectValue !== '' ) {
            if(selectValue.length > 0){
                selectValue = searchDataString( selectValue, data.selectValue, 'position');
            } else {
                selectValue = searchDataString( table, data.selectValue, 'position');
            }
        }

        if(data.searchValue !== ''){
            if(selectValue.length > 0){
                searchName = searchDataString( selectValue, data.searchValue, 'name');
            } else {
                searchName = searchDataString( table, data.searchValue, 'name');
            }
        } else{
            if(selectValue.length > 0){
                searchName = selectValue;
            } else if( searchValueNum.length > 0 ) {
                searchName = searchValueNum;
            } else {
                searchName = table;
            }

        }
        
        dispatch({
            type: 'SET_TABLE',
            table : searchName
        })
    }
}


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
    changeUserDefaultLanguage,
    searchData,
    searchDataString
};
