const initialState = {
  allData: {}
}

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_DATA':
      return {
        ...state,
        allData: action.data
      }
    case 'EDIT_DATA':
      return {
        ...state
      }
    case 'DELETE_DATA':
      return {
        ...state
      } 
    default:
      return state
  }
}

export default formReducer