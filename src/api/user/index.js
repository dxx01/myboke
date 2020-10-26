import request from "@/api/request.js";

// 根据电话号码查询用户信息
export function Api_selectByPhone(phone) {
  return request({
    url: "/user_local/selectByPhone",
    method: "get",
    params: {
      phone: phone
    }
  });
}
