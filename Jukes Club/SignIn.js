let accounts = [
    {
        username: "GraigM",
        password: "Juke123"
    },
    {
        username: "grmc1",
        password: "Juke"
    },
]

function signin() {
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    for(i=0; i<accounts.length; i++){
        if(username == accounts[i].username && password == accounts[i].password){
            console.log(username + ' is logged in')
            return
        }    
    }
    console.log("incorrect username or password")
}

function signup() {
    let registerusername = document.getElementById("newuser").value
    let registerpassword = document.getElementById("newpassword").value
    let newuser = {
        username: registerusername,
        password: registerpassword
    }
    accounts.push(newuser)
    console.log(accounts)
}