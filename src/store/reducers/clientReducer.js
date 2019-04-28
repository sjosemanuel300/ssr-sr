const initialState = {
    available_languages: ["es", "en"],
    lang_code: sessionStorage.getItem('lang_code') || "en",
    json_lang: sessionStorage.getItem('lang_code') ? require('../../language/'+ sessionStorage.getItem('lang_code') +'.json') :  require('../../language/en.json'),
    table: []
};

const clientReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER_DEFAULT_LANGUAGE':
            return { ...state, lang_code: action.lang_code, json_lang: action.json_lang };

        case 'SET_TABLE':
            return {
                ...state,
                table: action.table
            };

        default:
            return state;

    }
};

export default clientReducer;
