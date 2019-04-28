export default {
    ready: true,
    dataTransactions: {
        data:[
            {
               id:1,
               name:'Manuel NEUER',
               team:'matches',
               age:28,
               position:'Central Midfield'
            },
            {
               id:2,
               name:'Jonas HECTOR',
               team:'F.C. Bayern Munchen',
               age:30,
               position:'Attacking Midfield'
            },
            {
               id:3,
               name:'Mats HUMMELS',
               team:'matches',
               age:25,
               position:'Attacking Midfield'
            },
            {
               id:4,
               name:'Sami KHEDIRA',
               team:'matches',
               age:35,
               position:'Left Midfield'
            },
            {
               id:5,
               name:'Toni KROOS',
               team:'matches',
               age:26,
               position:'Right-Back'
            },
            {
               id:6,
               name:'Timo WERNER',
               team:'F.C.Barcelona',
               age:20,
               position:'Centre-Back'
            },
            {
               id:7,
               name:'Mesut OEZIL',
               team:'F.C.Barcelona',
               age:30,
               position:'Centre-Back'
            },
            {
               id:8,
               name:'Marco REUS',
               team:'Real Madrid C.F.',
               age:22,
               position:'Defensive Midfield'
            },
            {
               id:9,
               name:'Leon GORETZKA',
               team:'Real Madrid C.F.',
               age:30,
               position:'Defensive Midfield'
            },
            {
               id:10,
               name:'Niklas SUELE',
               team:'F.C. Bayern Munchen',
               age:35,
               position:'Keeper'
            },
         ],
         links:{
            first : 'https://my-api/api/users?page=1',
            last : 'https://my-api/api/users?page=1',
            prev : null,
            next : null
         },
         meta:{
            current_page: 1,
            from: 1,
            last_page: 1,
            path :'https://my-api/api/users',
            per_page: 10,
            to: 5,
            total: 5
         }
    },
    limitTransactions: 10,
    pageTransactions: 1,
    ordTransactions: 'desc',
    sortTransactions: 'id',
    searchTransactions: ''
}