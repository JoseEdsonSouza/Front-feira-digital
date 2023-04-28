import UserRecord from "./UserRecord";

export default interface CadastroCliente {
    nome: string | null,
    documento: string | null,
    tipoDocumento: string | null,
    celular: string | null,
    email: string | null,
    tipoPessoa: string | null,
    userRecord: UserRecord
}