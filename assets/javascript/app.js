

//function to start the game
var startGame = $("#start-btn").on("click", function(){
    $(this).parent().hide();
    $(".container").show();
    countdown(60);
    questionDisplay();
})

var questionDisplay = function(){
    $(".questioins").empty();
    for(var i = 0; i <= 10; i++){
        $(".questions").prepend('<div class="' + questions[i].name + '"></div');


    }
}