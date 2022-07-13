import validateDate from 'validate-date'

export default function isValidDate(date:string) {
  if(!validateDate(date, 'boolean',"yyyy-mm-dd")){
    throw new Error("Invalid date")
  }
}

//isValidDate('2020-11-20')