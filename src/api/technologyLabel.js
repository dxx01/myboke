import request from "@/api/request.js";

// 获取所有技术标签
export function Api_getAll() {
  return request({
    url: "/dev-api/technologyLabel/getAll",
    method: "get"
  });
}
