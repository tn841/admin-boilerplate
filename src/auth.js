const users = [
    { email: "test1@test.com", password: "123", name: "test1" },
    { email: "test2@test.com", password: "1234", name: "test2" },
  ]
  
  export function signIn({ email, password }) {
    const user = users.find(
      (user) => user.email === email && user.password === password
    )
    if (user === undefined) throw new Error()
    return user
  }