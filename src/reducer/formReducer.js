import _ from 'lodash'

const initialState = {
  allData: {}
}

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_DATA':
      return {
        allData: action.data
      }
    case 'EDIT_DATA':
      return {
        ...state
      }
    case 'DELETE_DATA': {
      const remainData = _.omit(state.allData, action.id)
      return {
        allData: remainData
      } 
    }
    default:
      return state
  }
}

export default formReducer