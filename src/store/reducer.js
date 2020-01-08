const initialState = {
    firstPrice: null,
    currPrice: null,
    prePrice: null,
    isClose: false,
    tableData: null
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PRICE':
            return { ...state, prePrice: state.currPrice, currPrice: action.data }
        case 'SET_FIRST_PRICE':
            return { ...state, firstPrice: action.data, currPrice: action.data }
        case 'SET_IS_CLOSE':
            console.log('this is the action:', action)
            return { ...state, isClose: action.data }
        case 'SET_TABLE_DATA':
            console.log('this is the action:', action)
            return { ...state, tableData: action.data }
    }
    return state
};
export default reducer