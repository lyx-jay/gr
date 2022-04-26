import { logMulLine } from "./util";
import { request } from "./request";

const outputReposName = async (userName: string) => {
  const reposInfo: string[] = [];
  const response = await request({
    userName: userName
  });
  const reposData = response.data;
  for (let repo of reposData) {
    reposInfo.push(repo.name);
  }
  const length = reposInfo.length;
  const columns = length < 5 ? length : 5;
  logMulLine(reposInfo, columns)
}


const userName = process.argv[2];
outputReposName(userName);