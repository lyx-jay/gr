import axios from "axios";
import { logMulLine } from "./util";



function main(userName: string) {

  const reposInfo: Map<string, string> = new Map();
  const BASE_URL: string = `https://api.github.com/users/${userName}/repos`;
  axios.get(BASE_URL)
    .then(res => {
      const reposData = res.data;
      for (let repo of reposData) {
        reposInfo.set(repo.name, repo.ssh_url);
      }
      logMulLine(Array.from(reposInfo.keys()), 5)
    })
    .catch(err => {
      console.log(err)
    })
}

export default main;