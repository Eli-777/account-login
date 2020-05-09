function loginCheck(options) {
  const users = [
    {
      firstName: 'Tony',
      email: 'tony@stark.com',
      password: 'iamironman'
    },
    {
      firstName: 'Steve',
      email: 'captain@hotmail.com',
      password: 'icandothisallday'
    },
    {
      firstName: 'Peter',
      email: 'peter@parker.com',
      password: 'enajyram'
    },
    {
      firstName: 'Natasha',
      email: 'natasha@gamil.com',
      password: '*parol#@$!'
    },
    {
      firstName: 'Nick',
      email: 'nick@shield.com',
      password: 'password'
    }
  ]


  //帳號密碼一樣回傳名字，不一樣回傳錯誤訊息
  for (i = 0; i < users.length; i++) {
    if (options.email === users[i].email && options.password === users[i].password) {
      return users[i].firstName;
    }
  }
  return 'Username/Password 錯誤'
}

module.exports = loginCheck