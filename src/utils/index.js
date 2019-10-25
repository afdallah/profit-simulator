function format(num) {
  return 'Rp' + (parseInt(num, 10)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');  // 12,345.67
}

export { format }