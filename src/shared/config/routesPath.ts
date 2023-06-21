export enum RoutesName {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not_found'
}

export const RoutesPath: Record<RoutesName, string> = {
  [RoutesName.MAIN]: '/',
  [RoutesName.ABOUT]: '/about',
  [RoutesName.NOT_FOUND]: '*'
}
