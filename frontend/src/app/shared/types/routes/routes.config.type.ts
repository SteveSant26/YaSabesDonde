export interface RouteConfig {
  path: string;
  url: string;
  label: string;
}

export interface RoutesConfig {
  base: RouteConfig;
  children: any;
}