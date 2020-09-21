import format from 'date-fns/format'

export const formatDate = raw => {
  return format(raw, 'MMMM d, yyyy')
}

export const formatSlug = text => {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')
}
