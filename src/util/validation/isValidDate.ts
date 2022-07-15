import moment from 'moment'

export default function isValidDate(date:string) {
  if(!moment(date).isValid()){
    throw new Error("Invalid date")
  }
}

//isValidDate('2020-11-20')