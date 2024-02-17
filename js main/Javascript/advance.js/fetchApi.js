fetch("https://api.github.com/users/hiteshchoudhary")
.then(function (response) {
    return response.json()
    
}).then(function (data) {
    console.log(data);
    console.log(data.public_repos);
    console.log(data.login);
    
}).catch(function (error) {
    console.log(error);
})