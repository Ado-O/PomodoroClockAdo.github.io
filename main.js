// pozivanje img  
$('body').css('background-image', 'url("http://newimageshd.com/wp-content/uploads/2016/05/Amazing-Clock-HD-Wallpaper.jpg")');
// pozivanje audio 
var buzzer = $("#buzzer")[0];
var count = parseInt($("#num").html());
var breakTime = parseInt($("#breakNum").html());
$("#reset, #minus5Break, #breakNum, #add5Break, #break, #title2").hide();

/***    button start     ***/
$("#start").click(function() {
    var counter = setInterval(timer, 1000);
    // mnozenjem dodajes sek
    count *= 60;

    function timer() {
        $('body').css('background-image', 'url("https://res.cloudinary.com/dcqcuv3gd/image/upload/v1491673397/WW_afipao.png")');
        //Hide variables
        $("#start, #minus5Clock, #add5Clock, #minus5Break, #add5Break, #breakNum, #title1").hide();
        count -= 1;
        // dajes do znanja da ocitava do 0
        if (count === 0) {
            $('body').css('background-image', 'url("http://newimageshd.com/wp-content/uploads/2016/05/Amazing-Clock-HD-Wallpaper.jpg")');
            buzzer.play();
            clearInterval(counter);
            $("#num").hide();
            $("#reset, #break, #minus5Break, #breakNum, #add5Break, #title2").show();
        }
        // logic and add sekund
        if (count % 60 >= 10) {
            $("#num").html(Math.floor(count / 60) + ":" + count % 60);
        } else {
            $("#num").html(Math.floor(count / 60) + ":" + "0" + count % 60);
        }
    }
});

/***    button break     ***/
// deklarisanje broja break i pozivanje s button
var brk = parseInt($("#breakNum").html());
$("#break").click(function() {
    var startBreak = setInterval(timerBreak, 1000);
    // mnozenjem dodajes sek
    brk *= 60;

    function timerBreak() {
        $('body').css('background-image', 'url("https://res.cloudinary.com/dcqcuv3gd/image/upload/v1491675579/WW_nfdevm.png")');
        //Hide variables
        $("#start, #minus5Clock, #add5Clock, #minus5Break, #add5Break, #title1, #title2, #break, #start, #reset").hide();
        brk -= 1;
        // dajes do znanja da ocitava do 0
        if (brk === 0) {
            $('body').css('background-image', 'url("http://newimageshd.com/wp-content/uploads/2016/05/Amazing-Clock-HD-Wallpaper.jpg")');
            buzzer.play();
            clearInterval(startBreak);
            $("#num").html(count);
            $("#start, #minus5Clock, #add5Clock, #num, #title1").show();
            $("#reset, #minus5Break, #breakNum, #add5Break, #break, #title2").hide();
        }
        // logic and add sekund
        if (brk % 60 >= 10) {
            $("#breakNum").html(Math.floor(brk / 60) + ":" + brk % 60);
        } else {
            $("#breakNum").html(Math.floor(brk / 60) + ":" + "0" + brk % 60);
        }
    }
});


/***    button reset    ***/
$("#reset").click(function() {
    $("#num").html(count);
    $("#start, #minus5Clock, #add5Clock, #num, #title1").show();
    $("#reset, #minus5Break, #breakNum, #add5Break, #break, #title2").hide();
});


/***    dodavanje i oduzimanje 5    ***/
$("#minus5Clock").click(function() {
    // moze samo radit ako je trenuntni time veci od 5
    if (count > 5) {
        count -= 5;
        $("#num").html(count);
    }
});
$("#add5Clock").click(function() {
    count += 5;
    $("#num").html(count);
});
$("#minus5Break").click(function() {
    if (breakTime > 5) {
        breakTime -= 5;
        $("#breakNum").html(breakTime);
    }
});
$("#add5Break").click(function() {
    breakTime += 5;
    $("#breakNum").html(breakTime);
});