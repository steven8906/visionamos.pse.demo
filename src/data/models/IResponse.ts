export interface IResponse<T> {
    code     : number;
    message  : string;
    response : T;
}
