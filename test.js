const Gitrows = require('./gitrows/gitrows');
const projectInfo = {
  token: '',
  owner: 'lorryrio',
  projectName: 'biu',
  csv: { delimiter: ',' },
  cacheTTL: 10000, // You can tweak this value to have a custom cache validity time (3s here)
  type: 'json',
}
const getPath = (path, ns = 'github') => {
  const fullpath = `@${ns}/${projectInfo.owner}/${projectInfo.projectName}/${path}`;
  console.log(fullpath)
  return fullpath;
}
const gitrows = new Gitrows(projectInfo);

(async () => {
  const data = await gitrows.get(
    getPath('data/hot_list.json')
  );
  
  console.log(data);
})()
