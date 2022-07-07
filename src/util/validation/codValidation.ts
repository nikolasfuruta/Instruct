export default function isValidCode(code: string | undefined): void {
  if(code === undefined) {
    throw new Error("Invalid code");
  }
}