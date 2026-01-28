const Users = [
  {
    name: "Marcos",
    age: 18,
  },
];

// VERIFICA SE O USER JÁ EXISTE NO ARRAY E ADICIONA O USER Q VEIO NO PARAMETRO NO ARRAY
export function searchUser(user, UserObj) {
  const FindUser = Users.find((User) => User.name === user);

  if (!FindUser) {
    Users.push(UserObj);
  }

  if (FindUser) {
    throw new Error("user já existe");
  }
  return Users;
}
