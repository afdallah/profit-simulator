
const iniitalState = {
  profit: '',
  price: '',
  margin: '',
  category: ''
}

export default (state = iniitalState, action) => {
  switch (action.type) {
    case 'UPDATE_INPUT':
      return {...state, }
    default:
      return state
  }
}