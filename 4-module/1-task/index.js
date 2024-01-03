function makeFriendsList(friends) {
  let elem = document.createElement("ul");
  document.body.append(elem);
  friends.map((person) => {
    let elemFriends = document.createElement("li");
    elemFriends.textContent = `${person.firstName} ${person.lastName}`;
    elem.append(elemFriends);
    return elemFriends;
  });
  return elem;
}
