type BuildModes = 'development' | 'production';
type BuildPaths = {
  html: string;
  entry: string;
  build: string;
  src: string;
};

type BuildEnv = {
  mode: BuildModes;
  port: number;
  ci: boolean;
};

export default interface BuildOptions {
  mode: BuildModes;
  paths: BuildPaths;
  isDev: boolean;
  ci: boolean;
  port: number;
}
