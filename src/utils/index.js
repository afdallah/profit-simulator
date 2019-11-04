function format(num) {
  const result =  num ? 'Rp' + (parseInt(num, 10)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') : '-'
  return result
}

export { format }