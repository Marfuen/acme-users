module.exports = myUser =>
`<!DOCTYPE html>
<html>
  <head>
    <link rel='stylesheet' type="text/css" href='/app.css'>
    <title>Acme Users</title>
  </head>
  <body>
    <h1 id="home"><a href="/">Home</a></h1>
    <p><a href="/users">Users</a></p>
    <div class="userDetail">
      <p>${myUser.name}</p>
    </div>
  </body>
</html>
`
