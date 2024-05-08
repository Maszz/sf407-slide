interface Config {
  publicRuntimeConfig?: PublicRuntimeConfig;
  serverRuntimeConfig?: ServerRuntimeConfig;
}
export interface PublicRuntimeConfig {
  PUBLIC_URL: string;
}
export interface ServerRuntimeConfig {
  BACKEND_URL: string;
  BACKEND_API_KEY: string;
}

type PathKeys<T, Prefix extends string = ""> = T extends object
  ? {
      [K in keyof T & string]:
        | `${Prefix}${K}`
        | PathKeys<T[K], `${Prefix}${K}.`>;
    }[keyof T & string]
  : "";

type ConfigKeys = PathKeys<Config>;
type ValueOf<T> = T[keyof T];
type A =
  | PublicRuntimeConfig
  | ServerRuntimeConfig
  | ValueOf<PublicRuntimeConfig | ServerRuntimeConfig>;

const useConfig = <T extends A = PublicRuntimeConfig>(
  key?: ConfigKeys
): T | undefined => {
  const o = { PUBLIC_URL: "http://localhost:3000" } as T;
  return o as T;
};

export { useConfig };
