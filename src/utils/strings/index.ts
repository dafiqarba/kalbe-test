export const formatCurrency = (val: string) => {
  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

export const getUserNameAlias = (name: string | undefined) => {
  if (name !== undefined) {
    const arrName = name.split(' ')
    return `${arrName[0].slice(0, 1)}${arrName[arrName.length - 1].slice(0, 1)}`
  }
  return ''
}
