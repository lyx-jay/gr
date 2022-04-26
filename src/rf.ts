import { request } from "./request";
import { logMulLine } from "./util";
// const { program } = require('commander');

const filterRepo = async (userName: string, keywords: string) => {
  const reposInfo: string[] = [];
  const response = await request({
    userName: userName
  });
  const reposData = response.data;

  for (let repo of reposData) {
    if (repo.name.includes(keywords)) {
      reposInfo.push(repo.name);
    }
  }
  const length = reposInfo.length;
  const columns = length < 5 ? length : 5;
  logMulLine(reposInfo, columns);
}

const args = process.argv[2];  
const [userName, keywords] = args.split('/')

filterRepo(userName, keywords);

