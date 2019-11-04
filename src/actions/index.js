export const updateInput = (name, value) => ({
  type: 'UPDATE_INPUT',
  name,
  value
})

export const syncStorage = (obj) => ({
  type: 'SYNC_STORAGE',
  payload: obj
})