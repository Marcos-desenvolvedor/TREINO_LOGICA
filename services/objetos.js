const Users = [
  {
    name: "Marcos",
    age: 18,
  },
];

export function searchUser(user, UserObj) {
  //   const findUser = Users.includes(User);
  const FindUser = Users.find((User) => User.name === user);
  Users.push(UserObj);
  if (FindUser) {
    throw new Error("user já existe");
  }
  return Users;
}
