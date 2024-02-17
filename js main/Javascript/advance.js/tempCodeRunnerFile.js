async function getallusername() {
  try {
    const response = await fetch(
      "https://api.github.com/users/hiteshchoudhary"
    );
    const data =  await response.json();
    console.log(data);
  } catch (error) {
    console.log("E", error);
  }
}
getallusername();