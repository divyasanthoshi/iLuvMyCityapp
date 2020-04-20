exports.home =function(req,res){
    res.render('home',{title:'iLoveMyCity',
                     description:'every city has something to say about '});
}


exports.city = function(req,res){
    var city = req.params.city;
    var imageCount = 4;
    if(city === 'berlin'){
        title = 'Berlin';
        heading = "Berlin: Where love is in the air";
    }else if (city === 'madrid'){
        title = 'Madrid';
        heading = "Madrid: Buzz, Beautiful architecture and Football"
    } else if(city ==='paris'){
        title="Paris";
        heading="Paris: Good talkers are only found in Paris";
     }else if(city ==='london'){
        title="London";
        heading="London: Sparkling, Still, Food, Gorgeous";
     } else if(city ==='newyork'){
        title="New York";
        heading="New York: Come to New York to become someone new";
        imageCount=6;
     }
    
    res.render('city',{
        title : title,
        heading: heading,
        numberOfImages : imageCount,
        city :city
    });
}