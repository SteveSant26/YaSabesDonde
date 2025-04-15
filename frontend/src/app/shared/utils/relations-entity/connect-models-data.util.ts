interface ConnectModelsData {
    [key: string]: {
        connect: number[];
    };
}

export const connectModelsData = (key : string, value: number[]): ConnectModelsData => {
  return {
    [key]: {
      connect: value,
    },
  }
};