console.log("this is connected");

var interval;
var number = 10;
var questions = ['In which James Bond film did Adele perform the opening song?', 'How many days can the flu virus live on a dollar bill?', "How many squares are on a monopoly board?", "What is the largest planet in our solar system?"];
var answerone = ['Casino Royale', '4', '60', 'Jupiter'];
var answertwo = ['Golden Eye', '17', '20', 'Uranus'];
var answerthree = ['A Quantum of Solace', '12', '40', 'Saturn'];
var answerfour = ['Skyfall', '22', '80', 'Mercury'];
var random = Math.floor(Math.random() * 4);

reset = $(".buttonhead").click(function () {
    random = Math.floor(Math.random() * 4);

    console.log("working");
    $("#body").html(questions[random]);
    $('.question1').html(answerone[random]);
    $('.question2').html(answertwo[random]);
    $('.question3').html(answerthree[random]);
    $('.question4').html(answerfour[random]);
    $('#countdown').html('Time Countdown: ' + number);
    $('.buttonhead').hide();

    number = 10;
});

$(".buttonhead").click(function () {
    console.log("working");
    $("#body").html(questions[random]);
    $('.question1').html(answerone[random]);
    $('.question2').html(answertwo[random]);
    $('.question3').html(answerthree[random]);
    $('.question4').html(answerfour[random]);
    $('#countdown').html('Time Countdown: ' + number);

    interval = setInterval(decrement, 1000);

    function decrement() {
        number--;
        $('#countdown').html('Time Countdown: ' + number);

        if (number === 0) {
            console.log("LOSE!");
            clearInterval(interval);

            $("#body").html("YOU LOSE!");
            $('.info').html('');
            $('.question1').html('');
            $('.question2').html('');
            $('.question3').html('');
            $('.question4').html('');
            $('#countdown').html('');
            $('.buttonhead').html('PLAY AGAIN?');
            $('.buttonhead').show();

            $('.buttonhead').click(function () {
                reset();
            });
        }

    
    }


    $('.question1').click(function(){
        if(random === 3){
            console.log("WIN!");
            clearInterval(interval);

            $("#body").html("YOU WIN!");
            $('.info').html('');
            $('.question1').html('');
            $('.question2').html('');
            $('.question3').html('');
            $('.question4').html('');
            $('#countdown').html('');
            $('.buttonhead').html('PLAY AGAIN?');
            $('.buttonhead').show();

            $('.buttonhead').click(function () {
                reset();
            });

        }

        else {

            console.log("LOSE!");
            clearInterval(interval);

            $("#body").html("YOU LOSE!");
            $('.info').html('');
            $('.question1').html('');
            $('.question2').html('');
            $('.question3').html('');
            $('.question4').html('');
            $('#countdown').html('');
            $('.buttonhead').html('PLAY AGAIN?');
            $('.buttonhead').show();

            $('.buttonhead').click(function () {
                reset();
            });

        }

    });

    $('.question2').click(function(){
        if(random === 1){
            console.log("WIN!");
            clearInterval(interval);

            $("#body").html("YOU WIN!");
            $('.info').html('');
            $('.question1').html('');
            $('.question2').html('');
            $('.question3').html('');
            $('.question4').html('');
            $('#countdown').html('');
            $('.buttonhead').html('PLAY AGAIN?');
            $('.buttonhead').show();

            $('.buttonhead').click(function () {
                reset();
            });

        }

        else {

            console.log("LOSE!");
            clearInterval(interval);

            $("#body").html("YOU LOSE!");
            $('.info').html('');
            $('.question1').html('');
            $('.question2').html('');
            $('.question3').html('');
            $('.question4').html('');
            $('#countdown').html('');
            $('.buttonhead').html('PLAY AGAIN?');
            $('.buttonhead').show();

            $('.buttonhead').click(function () {
                reset();
            });

        }

    });

    $('.question3').click(function(){
        if(random === 2){
            console.log("WIN!");
            clearInterval(interval);

            $("#body").html("YOU WIN!");
            $('.info').html('');
            $('.question1').html('');
            $('.question2').html('');
            $('.question3').html('');
            $('.question4').html('');
            $('#countdown').html('');
            $('.buttonhead').html('PLAY AGAIN?');
            $('.buttonhead').show();

            $('.buttonhead').click(function () {
                reset();
            });

        }

        else {

            console.log("LOSE!");
            clearInterval(interval);

            $("#body").html("YOU LOSE!");
            $('.info').html('');
            $('.question1').html('');
            $('.question2').html('');
            $('.question3').html('');
            $('.question4').html('');
            $('#countdown').html('');
            $('.buttonhead').html('PLAY AGAIN?');
            $('.buttonhead').show();

            $('.buttonhead').click(function () {
                reset();
            });

        }

    });

    $('.question4').click(function(){
        if(random === 0){
            console.log("WIN!");
            clearInterval(interval);

            $("#body").html("YOU WIN!");
            $('.info').html('');
            $('.question1').html('');
            $('.question2').html('');
            $('.question3').html('');
            $('.question4').html('');
            $('#countdown').html('');
            $('.buttonhead').html('PLAY AGAIN?');
            $('.buttonhead').show();

            $('.buttonhead').click(function () {
                reset();
            });

        }

        else {

            console.log("LOSE!");
            clearInterval(interval);

            $("#body").html("YOU LOSE!");
            $('.info').html('');
            $('.question1').html('');
            $('.question2').html('');
            $('.question3').html('');
            $('.question4').html('');
            $('#countdown').html('');
            $('.buttonhead').html('PLAY AGAIN?');
            $('.buttonhead').show();

            $('.buttonhead').click(function () {
                reset();
            });

        }

    });
    

});

