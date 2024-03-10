const groupBy = <T extends Record<string, unknown>, K extends keyof T>(
  arr: readonly T[],
  keyProperty: K
) =>
  arr.reduce((output, item) => {
    const key = String(item[keyProperty]);
    output[key] ||= [];
    output[key].push(item);
    return output;
  }, {} as Record<string, T[]>);

export default groupBy;
