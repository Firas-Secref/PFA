export enum PatientActionsType {
  SEARCH_PATIENT,
  GET_PATIENT,
  GET_ALL_PATIENT,
  EDIT_PATIENT,
  DELETE_PATIENT,
  SHOW_PATIENT,
  UPDATE_PATIENT
}

export interface ActionEvent{
  type: PatientActionsType,
  payload?: any
}

export enum DataStateEnum{
  LOADING,
  LOADED,
  ERROR
}

export interface AppDataState<T> {
  dataState?: DataStateEnum,
  data?: T,
  errorMessage?: string
}
