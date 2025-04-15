interface DisconnectModelsData {
  [key: string]: {
    disconnect: number[];
  };
}

export const disconnectModelsData = (
  key: string,
  value: number[]
): DisconnectModelsData => {
  return {
    [key]: {
      disconnect: value,
    },
  };
};
