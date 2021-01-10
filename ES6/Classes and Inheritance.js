class User {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }

    register() {
        console.log(this.username + ' is registered')
    }
}

let a = new User('test', 'test@gmail.com', 123)

a.register()

class Members extends User {
    constructor(username, email, password, member_package) {
        super(username, email, password)
        this.member_package = member_package
    }

    getPackage() {
        console.log(this.username + ' is Subscribed to' + ' ' + this.member_package + ' Package')
    }


}


let mike = new Members('mike', 'mike@gmail.com', '123456789', 'standard')

mike.getPackage()