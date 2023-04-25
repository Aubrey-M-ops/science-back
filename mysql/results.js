const query = require("../mysql/index").query;

//科研成果
exports.findResultsByNodeId = (nodeId) => {
  let _sql = `select * from science.achievements where nodeId=${nodeId};`;
  return query(_sql);
};

//按作者筛选
exports.findResultsByfilter = (nodeId, filter_params) => {
  let filters = "";
  Object.keys(filter_params).forEach((param) => {
    filters += `and ${param} = '${filter_params[param]}'`;
  });
  let _sql = `select *
  from science.achievements
  where id in (        
      select id
      FROM science.achievements
      INNER JOIN science.achievements_to_authors ON science.achievements.id = science.achievements_to_authors.achievement_id
      INNER JOIN science.authors ON science.achievements_to_authors.author_id = science.authors.author_id
      WHERE nodeId=${nodeId} ${filters}
      group by id
  )`;
  return query(_sql);
};

//按作者筛选
exports.findResultsByNodeIdAndAuthor = (nodeId, author) => {
  let _sql = `SELECT *
    FROM science.achievements
    INNER JOIN science.achievements_to_authors ON science.achievements.id = science.achievements_to_authors.achievement_id
    INNER JOIN science.authors ON science.achievements_to_authors.author_id = authors.id
    WHERE nodeId=${nodeId} and author_name = ${author}`;
  return query(_sql);
};

//按文章名称筛选
exports.findResultsByNodeIdAndName = (nodeId, name) => {
  let _sql = `select * from science.achievements where nodeId=${nodeId} and name=${name};`;
  return query(_sql);
};

//按期刊筛选
exports.findResultsByNodeIdAndMag = (nodeId, mag) => {
  let _sql = `select * from science.achievements where nodeId=${nodeId} and mag=${mag};`;
  return query(_sql);
};

//按年份筛选
exports.findResultsByNodeIdAndYear = (nodeId, year) => {
  let _sql = `select * from science.achievements where nodeId=${nodeId} and year=${year};`;
  return query(_sql);
};

//按类型筛选
exports.findResultsByNodeIdAndType = (nodeId, type) => {
  let _sql = `select * from science.achievements where nodeId=${nodeId} and type=${type};`;
  return query(_sql);
};

//按等级筛选
exports.findResultsByNodeIdAndLevel = (nodeId, level) => {
  let _sql = `select * from science.achievements where nodeId=${nodeId} and level=${level};`;
  return query(_sql);
};

//按奖项筛选
exports.findResultsByNodeIdAndAward = (nodeId, award) => {
  let _sql = `select * from science.achievements where nodeId=${nodeId} and award=${award};`;
  return query(_sql);
};
