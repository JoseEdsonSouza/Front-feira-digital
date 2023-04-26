export default interface Busca {
  pagina: number;
  tipoPreco: 'MAIOR_PRECO' | 'MENOR_PRECO';
  precoMin: number | null;
  precoMax: number | null;
  categoria: string | null;
  vendedor: string | null;
  nome: string | null;
}
