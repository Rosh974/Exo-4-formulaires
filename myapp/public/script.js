
//SOLUTION FINALE

$("#send").click(function () {
    var nbr1 = $('#nombre1').val();
    console.log(nbr1)
    var nbr2 = $('#nombre2').val();
    console.log(nbr2)
    
    var url = "http://localhost:3045/addition"
    
    $.post(url, { nbr1: nbr1, nbr2: nbr2 }, function (data) {
        console.log(data);
        $('#result').append(data);

    });

});