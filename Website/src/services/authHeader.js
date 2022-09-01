export default async function authHeader() {
  const user = await localStorage.getItem("userToken");
  if (user) {
    console.log("anahena", user);
    return user;
  } else {
    return {};
  }
}
