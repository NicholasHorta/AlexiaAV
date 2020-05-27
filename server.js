const   expressRun  = require('express'),
        avServer    = expressRun(),
        bodParse    = require('body-parser'),
        mongoose    = require('mongoose'),
        upload      = require('express-fileupload')
        

avServer.set('view engine', 'ejs');
avServer.use(expressRun.static('public'));
avServer.use(bodParse.urlencoded({ extended: true }));
mongoose.connect('mongodb://localhost/AlexiaFormData');
avServer.use(upload({ safeFileNames: true }));

var AlexiaFormSchema = new mongoose.Schema({
    name: String,
    lastName: String,
    number: Number,
    email: String,
    interest: String,
    comment: String
});

var AlexiaAv = mongoose.model('AlexiaAv', AlexiaFormSchema);


avServer.get('/', function(req, res){
    res.redirect('/home');
});

avServer.get('/home', function(req, res){
    res.render('home');
});

avServer.get('/positions', function(req, res){
    res.render('positions');
});


avServer.get('/contact', function(req, res){
    res.render('contact');
})

avServer.get('/showcase', function(req, res){
    res.render('showcase');
})


avServer.post('/contact', function(req, res){
    var name = req.body.name,
        lastname = req.body.lastname,
        number = req.body.number,
        email = req.body.email,
        dept = req.body.dept,
        comment = req.body.comment,
        allFormData = {name: name, lastName: lastname, number: number, email: email, interest: dept, comment: comment}
        AlexiaAv.create(allFormData, function(err, newItemCreated){
            if(err){
                console.log(err);
            } else {
                console.log(allFormData);
                console.log(newItemCreated);
                if(req.files){
                    var fileInfo = req.files.referenceName;
                    var fileName = `${req.body.name}${req.body.lastname}${fileInfo.name}`;
                    fileInfo.mv('./upload/' + fileName, function(err){
                        if(err){
                            console.log(err);
                            res.send('An Error Occurred. Please try again. If the problem continues please try again later');
                        } else {
                            res.redirect('/contact');
                        }
                    });
                }
            }
        });
});

avServer.get('*', function(req, res){
    res.redirect('/home')
})


avServer.listen(5000, function(){
    console.log('AV Server is Active - PORT 5000');
});

