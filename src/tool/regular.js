import { Api_selectByPhone } from "@/api/user/index.js";

// 手机号校验
let validatePhone = async (rule, value, callback) => {
  if (value === "") {
    callback(new Error("请输入手机号"));
  } else {
    if (
      !/^[1](([3][0-9])|([4][0,1,4-9])|([5][0-3,5-9])|([6][2,5,6,7])|([7][0-8])|([8][0-9])|([9][0-3,5-9]))[0-9]{8}$/.test(
        value
      )
    ) {
      callback(new Error("请输入正确的手机号"));
    } else {
      let data = await Api_selectByPhone(value);
      console.log(data);
      if (data.code === "200") {
        callback(new Error("该电话号码已注册"));
      }
    }
    callback();
  }
};
// 手机号校验
let validatePassword = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("密码不能为空"));
  } else {
    if (
      !/^(?=.*([a-zA-Z].*))(?=.*[0-9].*)[a-zA-Z0-9-*/+.~!@#$%^&*()]{6,18}$/.test(
        value
      )
    ) {
      callback(new Error("至少包含数字跟字母，长度6-18，不包含特殊字符"));
    }
    callback();
  }
};
export default {
  validatePhone,
  validatePassword
};
