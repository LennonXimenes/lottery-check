export interface ILottery {
    maismilionaria: string;
    megasena: string;
    lotofacil: string;
    quina: string;
    lotomania: string;
    timemania: string;
    duplasena: string;
    federal: string;
    diadesorte: string;
    supersete: string;
}

export interface ILotteryArray {
    ILottery: ILottery[];
}

export interface IMegaSena {
    loteria: string
    concurso: number
    data: string
    local: string
    dezenasOrdemSorteio: string[]
    dezenas: string[]
    trevos: unknown[]
    timeCoracao: string
    mesSorte: string
    premiacoes: Premiac[]
    estadosPremiados: unknown[]
    observacao: string
    acumulou: boolean
    proximoConcurso: number
    dataProximoConcurso: string
    localGanhadores: unknown[]
    valorArrecadado: number
    valorAcumuladoConcurso_0_5: number
    valorAcumuladoConcursoEspecial: number
    valorAcumuladoProximoConcurso: number
    valorEstimadoProximoConcurso: number
  }
  
  export interface Premiac {
    descricao: string
    faixa: number
    ganhadores: number
    valorPremio: number
  }
  