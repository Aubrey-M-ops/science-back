let fs = require("fs");

require("fs");
const data = [
  {
    nodeId: 39,
    id: 292,
    name: "多链融合的非CO2温室气体核算区块链体系架构与交易并发处理研究",
    type: "行业协会奖",
    level: "一等奖",
    award: "自然科学奖",
    year: "2022",
    file: "http://silk-web.dms.heyfuture.com.cn//file/1/2023/03/10/e920ca38-e2df-470c-936c-56813514fede.pdf",
    summary: "",
  },
  {
    nodeId: 39,
    id: 291,
    name: "高级氧化法烟气多污染协同控制理论与技术研究",
    type: "省部级",
    level: "",
    award: "自然科学奖",
    year: "2023",
    file: "http://silk-web.dms.heyfuture.com.cn//file/1/2023/03/10/17f8c881-8c3b-4bf5-9530-2052478a721f.pdf",
    summary: "",
  },
];
data.forEach((item) => {
  const values = Object.values(item).map((val) => {
    return `"${val}"`;
  });
  const writes =
    "INSERT INTO `science`.`news` (`nodeId`, `id`, `name`,`type`, `level`, `award`,`year`,`file`, `summary`) \n VALUES" +
    `(${values.join(",")});` +
    "\n";
  fs.appendFileSync("res.sql", writes);
});
