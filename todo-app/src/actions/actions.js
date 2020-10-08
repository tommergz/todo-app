export const submitMethod = (data) => {
  return { 
    type: 'SUBMIT_METHOD',
    newData: data
  }
};

export const doneMethod = (data) => {
  return {
    type: 'DONE_METHOD',
    newData: data
  }
}

export const deleteMethod = (data) => {
  return {
    type: 'DELETE_METHOD',
    newData: data
  }
}

export const sortByTextMethod = (sortByText) => {
  return {
    type: 'SORT_BY_TEXT_METHOD',
    sortByText: !sortByText
  }
}

export const sortByDateMethod = (sortByDate) => {
  return {
    type: 'SORT_BY_DATE_METHOD',
    sortByDate: !sortByDate
  }
}

export const filterByTextMethod = (value) => {
  return {
    type: 'FILTER_BY_TEXT_METHOD',
    filterByText: value
  }
}

export const filterByDateMethod = (value) => {
  return {
    type: 'FILTER_BY_DATE_METHOD',
    filterByDate: value
  }
}

export const resetDateFilter = () => {
  return {
    type: 'RESET_DATE_FILTER_METHOD',
    filterByDate: ''
  }
}