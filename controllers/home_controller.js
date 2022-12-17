module.exports.home = function(req, res){
    
    res.cookie('user_id', 44)
    
    return res.render('home', {
        title: 'Home'
    })
}

