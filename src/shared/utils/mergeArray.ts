export function mergeArray<T = any>(data: T) {
  if (!Array.isArray(data)) return [];

  const arrays = data
    .map((job) => job?.data || job)
    .reduce((acc, curr) => {
      return [...acc, ...curr];
    }, []);

  return arrays;
}
