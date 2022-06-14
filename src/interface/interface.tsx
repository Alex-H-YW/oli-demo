//export type IApiList = IApiItem[];
export interface IApiItem {
  id: number;
  name: string;
  url: string;
  description: string;
  params: IParams[];
  responseKey: string[];
};

export interface IParams  {
  id?: number;
  name: string;
  default: string;
  type: string;
  description: string;
  require: string;
};



