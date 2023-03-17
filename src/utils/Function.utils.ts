export function composeFn(...functions: (() => void)[]) {
  return () => {
    functions.forEach((fn) => fn())
  }
}
