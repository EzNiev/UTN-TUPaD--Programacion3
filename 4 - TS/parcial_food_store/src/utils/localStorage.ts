import type { IUser } from "../types/IUser";

export const saveUser = (user: IUser) => {
  const parseUser = JSON.stringify(user);
  localStorage.setItem("userData", parseUser);
};
export const getUSer = () => {
  return localStorage.getItem("userData");
};
export const removeUser = () => {
  localStorage.removeItem("userData");
};
// trae todos los usuarios registrados, si no hay ninguno devuelve un array vacio
export const getUsers = (): IUser[] => {
  const users = localStorage.getItem("users");
  if (!users) return [];
  return JSON.parse(users) as IUser[];
};
// agarra los usuarios que ya estaban, agrega el nuevo y vuelve a guardar todo
export const addUser = (user: IUser) => {
  const users = getUsers();
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
};
