import { QueryKeys } from './enum';

interface CarData {
    name: string;
    color: string;
  }
  
  interface CarFullData  extends CarData {
    id: number;
  }
  
  interface WinnerData {
    wins: number;
    time: number;
  }
  
  interface WinnerFullData extends WinnerData {
    id: number;
  }

  type WinnersSort = 'id' | 'wins' | 'time';
  type WinnersOrder = 'ASC' | 'DESC';
  type ParamValue = number | WinnersSort | WinnersOrder | undefined;
  
  interface QueryParams {
    [QueryKeys.LIMIT]?: number;
    [QueryKeys.PAGE]?: number;
    [QueryKeys.SORT]?: WinnersSort;
    [QueryKeys.ORDER]?: WinnersOrder;
  }
  
  interface PageTemplate {
    carsAmount: number;
    winnersAmount: number;
    carsList: string;
    estimatedCarsPages: number;
  }

  export {
    CarData,
    CarFullData,
    QueryParams,
    WinnerData,
    WinnerFullData,
    WinnersSort,
    WinnersOrder,
    ParamValue,
    PageTemplate,
  };