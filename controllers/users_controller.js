module.exports.profile = function(req, res){
    // return res.end( '<h1>User Profile</h1>' )
    return res.render('users', {
        title: "Users Profile"
    })
}

module.exports.signUp = function(req, res){
    return res.render('user_sign_up',{
        title: "Codeial | Sign Up"
    })
}

module.exports.signIn = function(req, res){
    return res.render('user_sign_in', {
        title: "Codeial | Sign In"
    })
}

//get the sign up data
module.exports.create = function(req, res){
    //todo later
}

// sign in and create a session for user
module.exports.createSession = function(req, res){
    // todo later
}