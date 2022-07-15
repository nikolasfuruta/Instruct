export default function isValidCode(code: string | undefined): string{
  if(code === undefined) {
    throw new Error("Code Not Found");
  }
  else {
    return code
  }
}