import React from 'react'

const Signup = () => {
  return (
    <div>
        <h2>signup</h2>
        <form action="Signup" method="post">
        <label for="username">Username:</label>
        <input type="text" name="Username"id="uname"/><br/><br/>
        <label for="password">Password:</label>
        <input type="password" name="password"id="pwd"/><br/><br/>
        </form>
        </div>
  )
}

export default Signup