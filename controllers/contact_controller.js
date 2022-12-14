module.exports.phone = function(req, res){
    // res.end( '<h1>Contact me on 7060357307</h1> ')
    return res.render('contact/contact_phone', {
        title: 'phone'
    })
}
module.exports.email = function(req, res){
    // res.end( '<h1>Contact me on yogi.2210@gmail.com</h1>' )
    return res.render('contact/contact_email', {
        name: "yogesh's",
        title: 'email'
    })
}