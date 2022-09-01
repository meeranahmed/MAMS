import * as SecureStore from "expo-secure-store";

export default async function authHeader() {
  const user = await SecureStore.getItemAsync("user");
  if (user) {
    return user;
  } else {
    return {};
  }
}
