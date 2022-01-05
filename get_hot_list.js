const { getHotStocks } = require("./core");
const Gitrows = require('./gitrows/gitrows');
const { projectInfo } = require('./config');
const getPath = (path, ns = 'github') => {
  const fullpath = `@${ns}/${projectInfo.owner}/${projectInfo.projectName}/${path}`;
  return fullpath;
};

setTimeout(async () => {
  try {
    const hot_list = await getHotStocks();
    const gitrows = new Gitrows(projectInfo);
    const data = await gitrows.replace(
      getPath('data/hot_list.json'),
      hot_list
    );

    console.log(data);
  } catch (e) {
    console.log(e);
  }
}, 1000 * 60 * 5)
