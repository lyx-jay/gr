import axios from "axios";


type Config = {
  // url: string
  baseURL?: string;
  userName: string;
}



export function request (config: Config) {
  const instance = axios.create({
    baseURL: `https://api.github.com/users/${config.userName}/repos`
  })
  return instance(config);
}