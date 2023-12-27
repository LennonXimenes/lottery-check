export interface ILotteryContext {
  lottery: ILotteries[];
  setLottery: React.Dispatch<React.SetStateAction<ILotteries[]>>;
  selectedLottery: string;
  setSelectedLottery: React.Dispatch<React.SetStateAction<string>>;
  result: Ilottery | null;
  setResult: React.Dispatch<React.SetStateAction<Ilottery | null>>;
}

export interface ILotteryProviderProps {
  children: React.ReactNode;
}

export interface ILotteries {
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

export interface Ilottery {
  loteria: string;
  concurso: number;
  data: string;
  local: string;
  dezenasOrdemSorteio: string[];
  dezenas: string[];
  trevos: unknown[];
  timeCoracao: string;
  mesSorte: string;
  premiacoes: Premiac[];
  estadosPremiados: unknown[];
  observacao: string;
  acumulou: boolean;
  proximoConcurso: number;
  dataProximoConcurso: string;
  localGanhadores: unknown[];
  valorArrecadado: number;
  valorAcumuladoConcurso_0_5: number;
  valorAcumuladoConcursoEspecial: number;
  valorAcumuladoProximoConcurso: number;
  valorEstimadoProximoConcurso: number;
}

export interface ILotteryArray {
  lotteries: Ilottery[];
}

export interface Premiac {
  descricao: string;
  faixa: number;
  ganhadores: number;
  valorPremio: number;
}
