const Gitrows = require('./gitrows/gitrows');
const { projectInfo } = require('./config');
const getPath = (path, ns = 'github') => {
  const fullpath = `@${ns}/${projectInfo.owner}/${projectInfo.projectName}/${path}`;
  return fullpath;
};
const gitrows = new Gitrows(projectInfo);

(async () => {
  // get all
  // const data = await gitrows.get(
  //   getPath('data/hot_list.json')
  // );

  // filter
  // const data = await gitrows.get(
  //   getPath('data/hot_list.json'),
  //   {
  //     "symbol":"SZ002460"
  //   }
  // );

  // try {
  //   const data = await gitrows.put(
  //     getPath('data/hot_list.json'),
  //     {
  //       "symbol": "xxx",
  //       "name": "1111"
  //     }
  //   );
  //   console.log(data);
  // } catch (e) {
  //   console.log(e);
  // }

  // try {
  //   const data = await gitrows.replace(
  //     getPath('data/hot_list.json'),
  //     {
  //       "symbol": "xxx",
  //       "name": "222"
  //     }
  //   );
  //   console.log(data);
  // } catch (e) {
  //   console.log(e);
  // }

})()
