let fs = require("fs");

require("fs");
const data = [
  {
    nodeId: 22,
    id: 3,
    name: "多链融合的非CO2温室气体核算区块链体系架构与交易并发处理研究",
    keywords: "",
    type: "",
    team: "",
    size: "",
    photo: "",
    url: "",
    year: "",
    summary: "",
  },
  {
    nodeId: 22,
    id: 2,
    name: "国科大研究团队发现青藏高原高寒草甸退化加快了土壤线虫群落的时间周转率",
    keywords: "",
    type: "",
    team: "",
    size: "1MB",
    photo: "",
    url: "",
    year: "2023",
    summary:
      "2023年1月5日，中国科学院大学资源与环境学院研究团队在国际知名环境微生物学期刊Applied and Environmental Microbiology上发表题为“Plant Community Associates with Rare Rather than Abundant ...",
  },
  {
    nodeId: 22,
    id: 1,
    name: "国科大研究团队发现青藏高原高寒草甸退化加快了土壤线虫群落的时间周转率",
    keywords: "",
    type: "待定一",
    team: "国科大",
    size: "22kb",
    photo: "",
    url: "",
    year: "2022",
    summary:
      "2023年1月5日，中国科学院大学资源与环境学院研究团队在国际知名环境微生物学期刊Applied and Environmental Microbiology上发表题为“Plant Community Associates with Rare Rather than Abundant ...",
  },
];
data.forEach((item) => {
  const values = Object.values(item).map((val) => {
    return `"${val}"`;
  });
  const writes =
    "INSERT INTO `science`.`achievements` (`nodeId`, `id`,  `name`,`keywords`,`type`, `team`, `size`,`photo`,`url`,`year`,`summary`) \n VALUES" +
    `(${values.join(",")});` +
    "\n";
  fs.appendFileSync("res.sql", writes);
});
