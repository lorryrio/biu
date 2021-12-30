const { default: axios } = require("axios");
const { xueqiuHeaders } = require("./config");
const fs = require("fs");

const writeData2File = (filePath, data) => {
  const dataString = JSON.stringify(data);
  fs.writeFileSync(filePath, dataString);
};

const getHotStocks = () => {
  let nt = null;
  let currentTime = new Date().getTime();
  let publishTime = null;
  const ONE_MONTH = 3 * 24 * 60 * 60 * 1000;
  let hot_list = [];

  const f = async () => {
    if (publishTime && (currentTime - publishTime) > ONE_MONTH) {
      writeData2File("hot_list.json", hot_list);
      return;
    }

    const query = {
      cltplt: "h5",
      cltver: "9.0.1.0",
      body: {
        ps: 10,
        nt,
      }
    };
    const { data: res } = await axios({
      method: 'post',
      url: 'https://m.stock.pingan.com/news/api/v3/news/info/xgb/live/list',
      data: query,
    });
    const list = res.data.list;
    const length = list.length;
    publishTime = list[length - 1].publishTime;
    nt = res.data.nt;
    const this_list = list.map(article => {
      const title = article.title;
      return article.relStocks.map(stock => {
        return {
          // title,
          symbol: `${stock.codeType}${stock.code}`,
          name: stock.name,
        }
      })
    }).flat();

    hot_list = [...hot_list, ...this_list];

    if (nt) {
      f();
    }
  };

  f();
};

const biu = async (hot_list, unit = 2) => {
  for (item of hot_list) {
    const symbol = item.symbol;
    const query = {
      symbol,
      period: "1d"
    };
    const { data: res } = await axios({
      method: 'get',
      url: 'https://stock.xueqiu.com/v5/stock/chart/minute.json',
      params: query,
      headers: xueqiuHeaders,
    });
    const length = res.data.items.length;

    if (!length) {
      continue;
    }
    const currentPercent = res.data.items[length - 1].percent;
    const checkedVolumes = checkVolume(res.data.items, unit);
    const hotIndex = (checkedVolumes.reduce((sum, item) => sum + item.up, 0)).toFixed(2);
    item.hotIndex = Number(hotIndex);
    item.currentPercent = currentPercent;
  }

  console.table(hot_list.filter(item => item.hotIndex).sort((a, b) => b.hotIndex - a.hotIndex));
};

const checkVolume = (items, unit) => {
  const count = items.length;
  const volume_sum = items[count - 1].volume_compare.volume_sum;

  return items.map((item, index) => {
    const obj = {
      // time: (new Date(item.timestamp)).toLocaleString()
    };

    if (index > 0) {
      const beforePrice = items[index - 1].current;
      const currentPrice = item.current;
      const currentVolume = item.volume;
      const averageVolume = volume_sum / count;
      const inOrOut = currentPrice > beforePrice ? 1 : -1;

      if (currentVolume > (unit * averageVolume)) {
        return {
          up: inOrOut * (currentVolume / averageVolume).toFixed(2),
          ...obj
        };
      }
    }

    return {
      up: 0,
      ...obj
    };
  });
};

module.exports = {
  getHotStocks,
  biu
}
