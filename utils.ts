export type Identifiable = {
  id: number;
};

export type Nameable = {
  name: string;
};

export type Orderable = {
  order: number;
};

/**
 * Picks a key in a type and renames it.
 * @typeparam T base type
 * @typeparam K name of the key to pick
 * @typeparam R new name for the key
 */
export type PickRename<T, K extends keyof T, R extends PropertyKey> = {
  [P in R]: T[K];
};

/**
 * @typeparam T the type to only select the methods from
 */
type Methods<T> = ({
  [P in keyof T]: T[P] extends Function ? P : never;
})[keyof T];

/**
 * @typeparam T the type to only select the attributes from
 */
export type Attributes<T> = Omit<T, Methods<T>>;
