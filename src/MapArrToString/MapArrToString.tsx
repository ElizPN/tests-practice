export const MapArrToString = (arr: any) => {
  return arr.filter((item: any) => Number.isInteger(item)).map(String);
};
