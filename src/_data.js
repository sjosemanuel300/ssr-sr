export default {
    ready: true,
    dataTransactions: {
        "data":[
            {
               "id":1,
               "name":"Emmanuel Rodriguez",
               "team":"erodriguez1@manzanares.com.ve",
               "age":30,
               "position":"es",
            },
            {
               "id":2,
               "name":"Jose Manuel Salazar",
               "team":"",
               "age":30,
               "position":"es",
            },
      
         ],
         "links":{
            "first":"https:\/\/my-api\/api\/users?page=1",
            "last":"https:\/\/my-api\/api\/users?page=1",
            "prev":null,
            "next":null
         },
         "meta":{
            "current_page":1,
            "from":1,
            "last_page":1,
            "path":"https:\/\/my-api\/api\/users",
            "per_page":"10",
            "to":5,
            "total":5
         }
    },
    limitTransactions: 10,
    pageTransactions: 1,
    ordTransactions: 'desc',
    sortTransactions: 'id',
    searchTransactions: ''
}