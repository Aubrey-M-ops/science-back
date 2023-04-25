const query = require("../mysql/index").query;

//科研成果
exports.findResultsByNodeId = (nodeId) => {
  let _sql = `select * from science.achievements where nodeId=${nodeId};`;
  return query(_sql);
};

//按条件筛选
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

//获取对应field下的所有项
exports.findItemsByField = (nodeId, fieldName) => {
  let _sql = `      
      select distinct ${fieldName}
      FROM science.achievements
      INNER JOIN science.achievements_to_authors ON science.achievements.id = science.achievements_to_authors.achievement_id
      INNER JOIN science.authors ON science.achievements_to_authors.author_id = science.authors.author_id
      WHERE nodeId=${nodeId}`;
  return query(_sql);
};
