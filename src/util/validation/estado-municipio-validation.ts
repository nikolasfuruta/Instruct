export default function isValidParam(estado: string, municipio: string|undefined){
  if(estado.length !== 2){
    throw new Error("Invalid Estado statement");
  }
  if(municipio !== undefined && municipio !== municipio.toLowerCase()) {
    throw new Error("Invalid Municipio statement");
  }
}