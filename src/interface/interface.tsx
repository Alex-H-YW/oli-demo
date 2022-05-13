

export interface ApiListState {
    ApiList: ListBase[]

}
export interface ListBase {
    id: number,
    name:string, 
    url: string, 
    description: string, 
    params: ParamsBase[],

}

export interface ParamsBase {
    name: string,
    type: string, 
    description:string, 
    require:string
}
