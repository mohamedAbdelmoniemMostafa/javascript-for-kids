var cnt =0;
var strikes = 0;
var word;
var secret = [];
var pass=0;
function startgame() {
    if(cnt==0){
        word = $('#word').val();
        for (var i = 0; i < word.length; i++) {
            secret.push("_");
        }
        $('#result').text(secret.join(" ")+" player2, guess secret");
        $('#linkbtn').text('check');
        $('#word').val('');
        cnt++;
    }else{
        var letter = $('#word').val();
        while(strikes < 3 && secret.indexOf("_") >= 0){
            if (word.indexOf(letter) < 0) {

                strikes++;
                var div = document.createElement("div");
                div.style.width = "30px";
                div.style.height = "30px";
                div.style.background = "#777";
                div.style.margin="5px";
                div.style.color = "white";
                div.innerHTML = letter;
                div.style.display="inline-block";
                div.style.borderRadius ="5px";
                document.getElementById("mainbad").appendChild(div);
                $('#word').val('');
                break;
            } else {
                for (i = 0; i < word.length; i++) {
                    if (word[i] === letter) {
                        secret[i] = letter;
                        $('#result').text(secret);
                        $('#word').val('');
                    }
                }
                break;
            }
        }
        if (strikes === 3) {
            $('#result').text("you loss the secret word is "+word);
            $('#m').css('display',"none");
            $('#result').css('color',"white");
            $('#myDiv').css({'backgroundColor':'#d9534f','borderRadius':'15px','max-width':'450','height':'210px','opacity':'.9'});
            $('#myDiv').fadeOut(3000,function () {
                window.location.reload();
            });
            window.reload();
        }if( comparr(word,secret)){
            $('#result').text("you win");
            $('#m').css('display',"none");
            $('#result').css('color',"white");
            $('#myDiv').css({'backgroundColor':'#5cb85c','borderRadius':'15px','max-width':'450px','height':'210px','opacity':'.9'});
            $('#myDiv').fadeOut(3000,function () {
                window.location.reload();
            });

        }
    }
}

function comparr(arr1, arr2) {
    if(arr1.length !== arr2.length)
        return false;
    for(var i = arr1.length; i--;) {
        if(arr1[i] !== arr2[i])
            return false;
    }

    return true;
}