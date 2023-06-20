export enum RoutesName {
  MAIN = 'main',
  ABOUT = 'about'
}

export const RoutesPath: Record<RoutesName, string> = {
  [RoutesName.MAIN]: '/',
  [RoutesName.ABOUT]: '/about'

}
