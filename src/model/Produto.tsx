export default interface Produto {
  id: number | null;
  status: string | null;
  codigo: string | null;
  dataIni: string | null;
  dataAlt: string | null;
  dataFim: string | null;
  vendedor: number | null;
  nome: string | null;
  estoque: number | null;
  tipoEstoque: string | null;
  imagem: string | null;
  preco: number | null;
  categoria: string | null;
  descQuantidade: number | null;
  pesoMedio: number | null;
  descricao: string | null;
}
