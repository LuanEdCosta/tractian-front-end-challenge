type RequiredProperty<T> = { [P in keyof T]: Required<NonNullable<T[P]>> }

type UnionToIntersection<U> = (
  U extends unknown ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never

type LastOf<T> = UnionToIntersection<
  T extends unknown ? () => T : never
> extends () => infer R
  ? R
  : never

type Push<T extends unknown[], V> = [...T, V]

type Union2Tuple<
  T,
  L = LastOf<T>,
  N = [T] extends [never] ? true : false,
> = true extends N ? [] : Push<Union2Tuple<Exclude<T, L>>, L>
