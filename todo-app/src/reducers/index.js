let initialState = {
  data: [
    {id: 1, done: true, text: 'Wake up', date: '2020-08-17'},
    {id: 2, done: true, text: 'Eat', date: '2020-07-17'},
    {id: 3, done: false, text: 'Go to sleep', date: '2020-08-17'}
  ],
  sort: false,
  sortByText: null,
  sortByDate: null,
  filterByText: '',
  filterByDate: '',
  datePickerInputValue: ''
}

if (localStorage.getItem("state")) {
  const localStorageState = JSON.parse(localStorage.getItem("state"));
  initialState = {
    data: localStorageState.data,
    sort: localStorageState.sort,
    sortByText: localStorageState.sortByText,
    sortByDate: localStorageState.sortByDate,
    filterByText: localStorageState.filterByText,
    filterByDate: localStorageState.filterByDate,
  }
}


const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'SUBMIT_METHOD':
      return {
        ...state,
        data: action.newData,
      };
    
    case 'DONE_METHOD':
      return {
        ...state,
        data: action.newData,
      };  
      
    case 'DELETE_METHOD':
      return {
        ...state,
        data: action.newData,
      }; 

    case 'SORT_BY_TEXT_METHOD':
      return {
        ...state,
        sort: "sortByText",
        sortByText: action.sortByText,
      }; 

    case 'SORT_BY_DATE_METHOD':
      return {
        ...state,
        sort: "sortByDate",
        sortByDate: action.sortByDate,
      };   

    case 'FILTER_BY_TEXT_METHOD':
      return {
        ...state,
        filterByText: action.filterByText,
      };   
    
    case 'FILTER_BY_DATE_METHOD':
      return {
        ...state,
        filterByDate: action.filterByDate,
      };  

    case 'RESET_DATE_FILTER_METHOD':
      return {
        ...state,
        filterByDate: action.filterByDate,
      };  
      
    default:
      return state;
  }
};

export default reducer;