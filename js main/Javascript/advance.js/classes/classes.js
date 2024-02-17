const user = {
  userName: "mimohshukla",
  logincount: 9,
  signedIn: true,
  getUserDetails: function () {
    console.log("Got user details");
    console.log(`username:${this.userName}`);
    console.log(this);
  },
};
console.log(user.userName);
console.log(user.getUserDetails());
console.log(this);
