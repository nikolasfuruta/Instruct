import validateDate from "validate-date";

export default function isValidDate(data: string): void {
  if(!validateDate(data, "boolean")) {
    throw new Error("Invalid date")
  }
}