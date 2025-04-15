interface SetModelsData {
  [key: string]: {
    set: number[];
  };
}

export const setModelsData = (
  key: string,
  value: number[]
): SetModelsData => {
  return {
    [key]: {
      set: value,
    },
  };
};
