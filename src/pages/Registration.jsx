import React from 'react'

export default function Registration() {
  return (
    <div>
      <form action="register" method="post">
         <label>Username</label>
         <input type="text" name="username"/>
         <br/>
         <label>Email</label>
         <input type="email" name="email"/>
         <br/>
         <label>Password</label>
         <input type="password" name="password"/>
         <br/>
<label>Gender</label>
M<input type="radio" name="gender" value="male"/>
F<input type="radio" name="gender" value="female"/>
O<input type="radio" name="gender" value="other"/>
<br/>
<label>Role</label>
Admin<input type="radio" name="role" value="admin"/>
Customer<input type="radio" name="role" value="customer"/>
<br/>
<label>Address</label>
<textarea name="address"></textarea>
<br/>
<input type="submit" value="REGISTER"/>

</form>
    </div>
  )
}
