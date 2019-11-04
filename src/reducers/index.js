
const initalState = {}

export default (state = initalState, action) => {
  switch (action.type) {
    case 'UPDATE_INPUT':
      return {...state, [action.name]: action.value}

    case 'SYNC_STORAGE':
      const data = JSON.parse(action.payload)
      return {...state, ...data}

    default:
      return state
  }
}