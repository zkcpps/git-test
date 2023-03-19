console.log("feat-2.js feat-1 change");
console.log("feat-2 分支更改 feat-2.js文件");
console.log("feat-1 分支更改 feat-2.js文件");

const dayFormatYear = (days) => {
  const year = days / 365;
  const day = days % 365;
  return year >= 1
    ? `${Math.floor(year)}年${day > 0 ? `${day}天` : ""}`
    : `${days}天`;
};

console.log(dayFormatYear(365));
console.log(dayFormatYear(364));
console.log(dayFormatYear(-1));
