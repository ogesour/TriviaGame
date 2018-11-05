
//object containing all the questions w/ answers
var questions = [{
            ques: "What is the name of Jon's direwolf?",
            ans: ["Hans", "Sean", "Joe", "Ghost"],
            name: "direwolf",
            correct: "Ghost",
            divClass: ".ghost"
        },
        {
            ques: "Which name is given to the bastards of The Reach?",
            ans: ["Flowers", "Boys", "Unwanted", "jquery"],
            name: "bastards",
            correct: "Flowers",
            divClass: ".flowers"
        },
        {
            ques: "Which House is a direct vassal of House Baratheon of King's Landing?",
            ans: ["Stark", "Stokeworth", "Tanksley", "Roshan"],
            name: "baratheon",
            correct: "Stokeworth",
            divClass: ".house"
        },
        {
            ques: " In the first episode, King Robert Baratheon says 'In my dreams, I kill him every night.' To whom is the King referring and why?",
            ans: ["Joe", "Hans", "Rheagar Targaryen", "Sean"],
            name: "Robert",
            correct: "Rheagar Targaryen",
            divClass: ".rheagar"
        },
        {
            ques: " At Hoster Tully's funeral, who shot the burning arrow that hit its mark?",
            ans: ["Brynden Tully", "Jon Snow", "Rheagar Targaryen", "Littlefinger"],
            name: "brynden",
            correct: "Brynden Tully",
            divClass: ".arrow"
        },
        {
            ques: " Who is king of Westeros when the the series begins?",
            ans: ["Robert Baratheon", "Jon Snow", "Geoffrey Baratheon", "YOU"],
            name: "robert",
            correct: "Robert Baratheon",
            divClass: ".king"
        },
        {
            ques: " What is the name of the continent on which most of the action of Game of Thrones' takes place?",
            ans: ["Westeros", "Africa", "North America", "Asia"],
            name: "westeros",
            correct: "Westeros",
            divClass: ".westeros"
        },
        {
            ques: "What noble house is Catelyn Stark from?",
            ans: ["House Targaryen", "House Tully", "House Tyrell", "House Stark"],
            name: "tully",
            correct: "House Tully",
            divClass: ".tully"
        },
        {
            ques: "Why could Jon leave the Night's Watch, since his vows were for life?",
            ans: ["Loop Hole", "He felt like it", "Just Cause", "He Died"],
            name: "died",
            correct: "He Died",
            divClass: ".died"
        },
        {
            ques: " How many fingertips did Stannis Baratheon chop off of Davos' hand(s)?",
            ans: ["2", "3", "4", "5"],
            name: "four",
            correct: "4",
            divClass: ".four"
        }

    ]
    console.log(questions);
//End of  questions

var labels = ["first", "second", "third", "forth"];
//click to start
var startGame = $("#start-btn").on('click', function(){
    $(this).parent().hide();
    $('.container').show();
    countdown(60);
    questionDisplay();
});

// display the 10 questions
var questionDisplay = function(){
    $(".questions :not('#sub-but')").empty();

    for (var i = 0; i < 10; i++){
        $('.questions').prepend('<div class="' + questions[i].name + '"></div>');
        $(questions[i].divClass).append('<div class="ques-title">' + questions[i].ques + '</div>'); 

        for (var j = 0; j <= 3; j++) {
            $(questions[i].divClass).append('<input type="radio" name="' + questions[i].name + '" value="' + questions[i].ans[j] + '"/><label for="' + labels[j] + '">' + questions[i].ans[j] + '</label>');
        }
        $('questions').prepend('<hr />');
    }
}

//countown
var countdown = function(seconds){
    
    var timer = setInterval(function(){
        seconds = seconds -1;
        $('#time-remain').html(seconds);

        if(seconds <= 0) {
            $('.container').fadeOut(500);
            var correctAnswer = 0;
            var wrongAnswer = 0;
            var unAnswered = 0;

            for (var i = 0; i < 10; i++){
                if($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct){
                    correctAnswer++;
                }else{
                    wrongAnswer++;
                };
            }
            $('#correctNoTime').append(correctAnswer);
            $('#wrongNoTime').append(wrongAnswer);
            $('#timesUp').fadeIn(1000).show();
            clearInterval(timer);
            return;
        }
    }, 1000);

    $('#sub-but').on('click', function(){
        clearInterval(timer);
    })
};

var gradeTest = $('#sub-but').on('click', function(){

    var correctAnswer = 0;
    var wrongAnswer = 0;
    var unAnswered = 0;

    for(var i = 0; i<10; i++){
        if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct){
            correctAnswer++
        }else{
            wrongAnswer++;
        };

    };

    countdown();
    $('.container').fadeOut(500);
    $('#answers').show();
    $('#correct').append(correctAnswer);
    $('#wrongs').append(wrongAnswer);



});