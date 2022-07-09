import validateDate from 'validate-date'

export default function isValidDate(date:string) {
  if(!validateDate(date, 'boolean')){
    throw new Error("Invalid date")
  }
}

//isValidDate('12/02/2020')