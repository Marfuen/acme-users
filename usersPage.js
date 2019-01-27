module.exports = user => `<!DOCTYPE html>
<html>
  <head>
    <link rel='stylesheet' type="text/css" href='/app.css'>
    <title>Acme Users</title>
  </head>
  <body>
    <h1 id="home"><a href="/">Home</a></h1>
    <p><a href="/users">Users</a></p>
    <ul id="userList">
    ${user.map(user => `
      <li><a href="/users/${user.id}">${user.name}</a></li>
    `).join('')}
    </ul>
  </body>
</html>
`
