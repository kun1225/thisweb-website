type Func<T, U> = (arg: T) => U;

export function compose<T>(...functions: Func<T, T>[]): Func<T, T> {
  return (input: T): T => {
    return functions.reduceRight((result, func) => func(result), input);
  };
}

export function composeWithInitialValue<T>(
  initialValue: T,
  ...functions: Func<T, T>[]
): T {
  return functions.reduceRight((result, func) => func(result), initialValue);
}
