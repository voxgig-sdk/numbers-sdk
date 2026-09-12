export interface GetNumberFact {
    found?: boolean;
    id?: string;
    number?: number;
    text?: string;
    type?: string;
}
export interface GetNumberFactLoadMatch {
    number: string;
    type: string;
    fragment?: boolean;
    json?: boolean;
    notfound?: string;
}
export interface GetNumberTrivia {
    found?: boolean;
    id?: string;
    number?: number;
    text?: string;
    type?: string;
}
export interface GetNumberTriviaLoadMatch {
    id: string;
    fragment?: boolean;
    json?: boolean;
    notfound?: string;
}
export interface Random {
    found?: boolean;
    id?: string;
    number?: number;
    text?: string;
    type?: string;
}
export interface RandomLoadMatch {
    id: string;
    fragment?: boolean;
    json?: boolean;
    max?: number;
    min?: number;
}
