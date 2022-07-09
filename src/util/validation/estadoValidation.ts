export default function isValidEstado(estado: string){
  if(estado.length !== 2){
    throw new Error("Invalid Estado statement");
  }
}