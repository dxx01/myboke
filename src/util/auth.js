//用来获取token 、存储token 、删除token （这里的token是存放在sessionStorage里面）
const TokenKey = "user_token";

//获取token
export function getToken() {
  return sessionStorage.getItem(TokenKey);
}
//存储token
export function setToken(token) {
  return sessionStorage.setItem(TokenKey, token);
}
//删除token
export function removeToken() {
  return sessionStorage.remove(TokenKey);
}
