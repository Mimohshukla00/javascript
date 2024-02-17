async function getallusername() {
  try {
    const response = await fetch(
      "https://api.github.com/users/hiteshchoudhary"
    );
    const data =  await response.json();
    console.log(data);
    console.log(data.login);
    console.log(data.followers_url);
  } catch (error) {
    console.log("E", error);
  }
}
getallusername();
