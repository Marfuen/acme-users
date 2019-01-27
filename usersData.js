let users = [
  {name: "Moe", id: 1},
  {name: "Larry", id: 2},
  {name: "Curly", id: 3}
]

const list = () => {
  return [...users] // Notice that we're returning a copy of the array, so the original data is safe. This is called 'immutability'.
};

const find = (id) => {
  const user = users.find(myUser => myUser.id === id);
  return {...user}; // Again, we copy the post data before returning so the original information is safe.
}


module.exports = { list: list, find: find };
