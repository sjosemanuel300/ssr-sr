const initialState = {
    available_languages: ["es", "en"],
    lang_code: sessionStorage.getItem('lang_code') || "es",
    json_lang: sessionStorage.getItem('lang_code') ? require('../../language/'+ sessionStorage.getItem('lang_code') +'.json') :  require('../../language/es.json'),
    table: {
        ready: false,
        dataTransactions: [],
        limitTransactions: 10,
        pageTransactions: 1,
        ordTransactions: 'desc',
        sortTransactions: 'id',
        searchTransactions: ''
    }
};

const clientReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER_DEFAULT_LANGUAGE':
            return { ...state, lang_code: action.lang_code, json_lang: action.json_lang };

        case 'SET_TABLE':
            return {
                ...state,
                table: action.data
            };

        default:
            return state;

    }
};

export default clientReducer;
