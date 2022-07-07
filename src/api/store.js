//存入本地存储
export function setLocal(key, value) {
  localStorage.setItem(
    key,
    typeof value === "object" ? JSON.stringify(value) : value
  );
}
//获取用户token
export function getLocal(key) {
  let data = localStorage.getItem(key);
  try {
    return JSON.parse(data);
  } catch (e) {
    console.log(e);
  }
  return data;
}
