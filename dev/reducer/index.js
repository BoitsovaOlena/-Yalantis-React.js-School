let itemList = [
    {
        id: '01',
        month: 'January',
        names:[]
    },
    {
        id: '02',
        month: 'February',
        names:[]
    },
    {
        id: '03',
        month: 'March',
        names:[]
    },
    {
        id: '04',
        month: 'April',
        names:[]
    },
    {
        id: '05',
        month: 'May',
        names:[]
    },
    {
        id: '06',
        month: 'June',
        names:[]
    }, 
    {
        id: '07',
        month: 'July',
        names:[]
    },
    {
        id: '08',
        month: 'August',
        names:[]
    },
    {
        id: '09',
        month: 'September',
        names:[]
    },
    {
        id: '10',
        month: 'October',
        names:[]
    },
    {
        id: '11',
        month: 'November',
        names:[]
    },
    {
        id: '12',
        month: 'December',
        names:[]
    }
]

let Storage = localStorage.getItem('LIST');

const list = Storage ? JSON.parse(Storage): itemList;
const reducer = (store = list, action) => {
    switch(action.type) {
        case 'ADD_NAME': {
            Storage && (store = JSON.parse(Storage))
            !Storage &&
            store
            .forEach(bd => (action.payload
                .forEach((item) => (item.dob.substring(5,7)===bd.id ? bd.names.push(`${item.firstName} ${item.lastName}`) : null))));
                localStorage.setItem('LIST', JSON.stringify(store)) 
            return store;
                
            };
        

        default: {
            return store;
        }
    }
};

export default reducer;
