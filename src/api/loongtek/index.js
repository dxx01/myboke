import request from "@/api/request.js";

// 获取模板页面标题
export function getTitleModel() {
  return request({
    url: "/page/findList",
    method: "get"
  });
}
