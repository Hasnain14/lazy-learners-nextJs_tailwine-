import { GetUsers, User } from "./types";

const users: User[] = [{ completed: true, id: 1, title: "Title", userId: 12 }];

// approach one
export const getUsers: GetUsers = () => {
  return new Promise((resolve, reject) => {
    resolve(users);
  });
};

// approach two
export const getUsersWithDelay: GetUsers = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(users);
    }, 3000);
  });
};
