export const defaultEnv = {
  production: false,
  apiUrl: "https://thread-frost-buffet.glitch.me/"
};

class Environment {
  public apiUrl = "";
  public production: boolean;
  constructor() {
    this.production = false;
  }
  setEnvironment(val:any) {
    this.apiUrl = val;
  }
}

export const environment = new Environment();
