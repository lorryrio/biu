const today = require("./data/result_2022_1_10.json");
const yesterday = require("./data/result_1_7_2022.json");

const arr = [];
for (today_item of today) {
  let isRepeat = false;
  for (yesterday_item of yesterday) {
    if (today_item.symbol === yesterday_item.symbol) {
      isRepeat = true;
    }
  }
  if (!isRepeat) {
    arr.push(today_item);
  }
}
console.table(arr);