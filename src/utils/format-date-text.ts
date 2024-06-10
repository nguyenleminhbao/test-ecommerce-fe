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
  let objectDate = new Date(date)

  let hour = objectDate.getHours()
  let minute =
    objectDate.getMinutes() < 10 ? `0${objectDate.getMinutes()}` : objectDate.getMinutes()

  let day = objectDate.getDate()

  const month = objectDate.getMonth() + 1
  const monthText = getMonthText(month)

  let year = objectDate.getFullYear()
  return `${hour}:${minute} - ${day} ${monthText} ${year}`
}

export const formatDateDelivery = (date: string) => {
  let objectDate = new Date(date)
  let day = objectDate.getDate()

  const month = objectDate.getMonth() + 1
  const monthText = getMonthText(month)

  let year = objectDate.getFullYear()
  return `${day} ${monthText} ${year}`
}
