export default interface Busca {
  pagina: number;
  tipoPreco: string | null;
  precoMin: number | null;
  precoMax: number | null;
  categoria: string | null;
  vendedor: string | null;
  nome: string | null;
}
