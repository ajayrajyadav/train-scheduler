$(document).ready(function () {
    buildhtml();
    function buildhtml(){
        $("body").append($("<div>").addClass("container"));
        addJumboTron();
    }
    function addJumboTron(){
        $(".container").append($("<div>").addClass("jumbotron").attr("id", "myJumbotron"));
        $("#myJumbotron").append($("<h1>").addClass("text-center").html("Ajay's Trains"))
        $("#myJumbotron").append($("<h3>").addClass("text-center").html("Train Schecule"))
    }

});