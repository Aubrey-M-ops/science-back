const query = require("../mysql/index").query;

exports.findNewsByNodeId = (nodeId) => {
  let _sql = `select * from science.news where nodeId=${nodeId};`;
  return query(_sql);
};

exports.findNewsByNodeName = (nodeName) => {
  let _sql = `select * from science.news where nodeName="${nodeName}";`;
  return query(_sql);
};

exports.findSectionsByNodeId = (nodeId) => {
  let _sql = `select * from science.sections where nodeId=${nodeId};`;
  return query(_sql);
};

exports.findSectionsByNodeName = (nodeName) => {
  let _sql = `select * from science.sections where nodeName="${nodeName}";`;
  return query(_sql);
};
