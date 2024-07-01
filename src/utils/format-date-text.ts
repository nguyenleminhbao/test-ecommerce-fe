function getMonthText(monthNumber: number) {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  if (monthNumber < 1 || monthNumber > 12) {
    return 'Invalid month number'
  }

  return monthNames[monthNumber - 1]
}

export const formatDateText = (date: string) => {
  const objectDate = new Date(date)

  const hour = objectDate.getHours()
  const minute =
    objectDate.getMinutes() < 10 ? `0${objectDate.getMinutes()}` : objectDate.getMinutes()

  const day = objectDate.getDate()

  const month = objectDate.getMonth() + 1
  const monthText = getMonthText(month)

  const year = objectDate.getFullYear()
  return `${hour}:${minute} - ${day} ${monthText} ${year}`
}

export const formatDateDelivery = (date: string) => {
  const objectDate = new Date(date)
  const day = objectDate.getDate()

  const month = objectDate.getMonth() + 1
  const monthText = getMonthText(month)

  const year = objectDate.getFullYear()
  return `${day} ${monthText} ${year}`
}
