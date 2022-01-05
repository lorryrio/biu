const { biu } = require("./core");
const Gitrows = require('./gitrows/gitrows');
const { projectInfo } = require('./config');
const getPath = (path, ns = 'github') => {
  const fullpath = `@${ns}/${projectInfo.owner}/${projectInfo.projectName}/${path}`;
  return fullpath;
};

(async () => {
  try {
    const gitrows = new Gitrows(projectInfo);
    const hot_list = await gitrows.get(
      getPath('data/hot_list.json')
    );
    const today_result = await biu(hot_list, 3);
    const today = ((new Date()).toLocaleDateString()).replace(/\//g, "_");
    const jsonPath = `data/result_${today}.json`;

    const today_data = await gitrows.get(
      getPath(jsonPath)
    );

    if (!today_data) {
      const data = await gitrows.put(
        getPath(jsonPath),
        today_result
      );
      console.log(data);
    } else {
      const data = await gitrows.replace(
        getPath(jsonPath),
        today_result
      );
      console.log(data);
    }
  } catch (e) {
    console.log(e);
  }
})()
