type VerifyUserfn = (user: User, setValue: User)=> boolean;
type User = {username: string, password: string};

const verifyUser: VerifyUserfn = (user, setValue)=>  {
  return(
    user.username === setValue.username && user.password === setValue.password
  );
};

const UserOne = {
  username: 'Marlon',
  password: '1234'
};
const setUserOne = {
  username: 'Marlon',
  password: '1234'
};

const Login = verifyUser(UserOne, setUserOne);

console.log(Login);
