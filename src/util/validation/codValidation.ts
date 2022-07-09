export default function isValidCode(code: string | undefined): string{
  if(code === undefined) {
    throw new Error("Invalid code");
  }
  else {
    return code
  }
}