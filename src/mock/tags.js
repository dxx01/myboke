// 标签mock
// import Mock from "mockjs";
// const Random = Mock.Random;
// let data = [];
// for (let index = 0; index < Random.integer(10, 20); index++) {
//   let template = {
//     id: Random.id(),
//     name: Random.string("lower", 3, 5)
//   };
//   data.push(template);
// }

let data = [
  {
    id: 1,
    name: "java"
  },
  {
    id: 2,
    name: "mysql"
  },
  {
    id: 3,
    name: "redis"
  },
  {
    id: 4,
    name: "vue"
  },
  {
    id: 5,
    name: "html"
  },
  {
    id: 6,
    name: "js"
  },
  {
    id: 7,
    name: "服务器"
  },
  {
    id: 8,
    name: "springboot"
  },
  {
    id: 9,
    name: "正则"
  },
  {
    id: 10,
    name: "css"
  },
  {
    id: 11,
    name: "vscode"
  },
  {
    id: 12,
    name: "idea"
  },
  {
    id: 13,
    name: "插件"
  },
  {
    id: 14,
    name: "oracle"
  },
  {
    id: 15,
    name: "nginx"
  },
  {
    id: 16,
    name: "git"
  },
  {
    id: 17,
    name: "spring security"
  },
  {
    id: 18,
    name: "哈哈"
  }
];

export default {
  "get|/technologyLabel/getAll": () => {
    return {
      code: 200,
      message: "success",
      data: data
    };
  }
};
