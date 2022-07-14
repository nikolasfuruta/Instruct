export default function pascoaData(): Date{
  const ano  = new Date().getUTCFullYear();
  const a  = ano % 19;
  const b = Math.trunc(ano / 100);
  const c = ano % 100;
  const d = Math.trunc(b / 4);
  const e = b % 4;
  const f = Math.trunc((b + 8) / 25);
  const g = Math.trunc((b - f + 1) / 3);
  const h = Math.trunc((19 * a + b - d - g + 15) / 30);
  const i = Math.trunc(c / 4);
  const k = Math.trunc(c / 4);
  const l = Math.trunc((32 + 2*e + 2*i - h - k) / 7);
  const m = Math.trunc((a + 11*h + 22*l) / 451);
  const mes = Math.trunc((h + l - 7*m + 114) / 31);
  const dia = 1 + Math.trunc((h + l - 7*m + 114) / 31);
  console.log(new Date(dia,mes))
  return new Date(dia,mes)
}