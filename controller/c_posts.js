const postModel = require("../mysql/post");
const resultModel = require("../mysql/results");

//首页信息
exports.getPosts = async (ctx) => {
  //nodeId: 置顶-3, 丝路新闻-6, 科考动态-25, 科考实录-26
  const categories = [6, 25, 26];

  ctx.body = {
    data: [],
    bannerData: {},
  };

  //获取置顶新闻
  await postModel
    .findNewsByNodeId(3)
    .then((topNews) => {
      ctx.body.bannerData = { data: topNews };
    })
    .catch(() => {
      ctx.body = "置顶新闻出错啦";
    });

  //获取首页新闻(丝路新闻、科考动态、科考实录)
  for (i = 0; i < categories.length; i++) {
    await postModel.findSectionsByNodeId(categories[i]).then((siluSection) => {
      ctx.body.data.push(siluSection[0]);
    });
    await postModel.findNewsByNodeId(categories[i]).then((news) => {
      ctx.body.data[i].data = news;
    });
  }
};

//科考动态
exports.getDynamic = async (ctx) => {
  //nodeId: 综合新闻-27, 通知公告-28, 丝路动态-29, 科研进展-30
  const categories = [27, 28, 29, 30];

  ctx.body = {
    data: [],
    topData: {},
  };

  //获取置顶动态
  await postModel
    .findNewsByNodeId(28)
    .then((topNews) => {
      ctx.body.topData = { data: [topNews[0]] };
    })
    .catch(() => {
      ctx.body = "置顶新闻出错啦";
    });

  //获取全部动态
  for (i = 0; i < categories.length; i++) {
    await postModel.findSectionsByNodeId(categories[i]).then((section) => {
      ctx.body.data.push(section[0]);
    });
    await postModel.findNewsByNodeId(categories[i]).then((news) => {
      ctx.body.data[i].data = news;
    });
  }
};

//科研成果
exports.getResult = async (ctx) => {
  //nodeId: 科研论文-17, 知识产权-18, 科研项目-16, 数据汇交-22, 获奖与评价-39
  const categories = [17, 18, 16, 22, 39];

  ctx.body = {
    data: [],
  };

  for (i = 0; i < categories.length; i++) {
    await postModel.findSectionsByNodeId(categories[i]).then((section) => {
      ctx.body.data.push(section[0]);
    });
    await postModel.findResultsByNodeId(categories[i]).then((news) => {
      ctx.body.data[i].data = news;
    });
  }
};

//筛选
exports.getFilterResults = async (ctx) => {
  ctx.body = {
    data: [],
  };
  // const { nodeId, params } = ctx.req.body;
  const nodeId = 17,
    params = { name: "Abiotic and biotic controls of soil dissolved organic nitrogen along a precipitation gradient on the Tibetan plateau, PLANT AND SOIL, 2021, 通讯作者." };
  await resultModel.findResultsByfilter(nodeId, params).then((achievements) => {
    ctx.body.data = achievements;
  });
};
