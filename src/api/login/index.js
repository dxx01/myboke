import request from "@/api/request.js";

// 注册
export function Api_register(data) {
  return request({
    url: "/register",
    method: "post",
    data: data
  });
}

// 登录
export function Api_login() {
  return request({
    url: "/home",
    method: "get"
  });
}
