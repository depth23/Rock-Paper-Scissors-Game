var wins = 0;
var losses = 0;
var ties = 0;
var wns = document.getElementById('wns');
var loss = document.getElementById('lss');
var ts = document.getElementById('ts');
var wnnr = document.getElementById('winner');

var computer_choice = function() {
    var rpk = ['r', 'p', 's'];
    var num = Math.floor(Math.random()*rpk.length);
    var com_choice = rpk[num];
    return com_choice;
}

document.onkeyup = function(e) {
    var c_choice = computer_choice();
    var char_code = e.keyCode;
    var u_choice = String.fromCharCode(char_code).toLowerCase();
    if(u_choice === 'r' || u_choice === 'p' || u_choice === 's') {
        if(u_choice === c_choice) {
            ties++;
            ts.innerHTML = ties;
            wnnr.innerHTML = 'You and the computer have tied.';
        }
        else if(u_choice === 'r' && c_choice === 'p') {
            losses++;
            loss.innerHTML = losses;
            wnnr.innerHTML = 'You have lost.<br>The computer wins this round.';
        }
        else if(u_choice === 'r' && c_choice === 's') {
            wins++;
            wns.innerHTML = wins;
            wnnr.innerHTML = 'You Win!<br>Tell the computer to byte this!';
        }
        else if(u_choice === 'p' && c_choice === 's') {
            losses++;
            loss.innerHTML = losses;
            wnnr.innerHTML = 'You have lost.<br>The computer wins this round.';
        }
        else if(u_choice === 'p' && c_choice === 'r') {
            wins++;
            wns.innerHTML = wins;
            wnnr.innerHTML = 'You Win!<br>Tell the computer to byte this!';
        }
        else if(u_choice === 's' && c_choice === 'r') {
            losses++;
            loss.innerHTML = losses;
            wnnr.innerHTML = 'You have lost.<br>The computer wins this round.';
        }
        else if(u_choice === 's' && c_choice === 'p') {
            wins++;
            wns.innerHTML = wins;
            wnnr.innerHTML = 'You Win!<br>Tell the computer to byte this!';
        }
    }
    else {
        wnnr.innerHTML = 'Please Type<br>"R" for Rock,<br>"P" for Paper, or<br>"S" for Scissors.';
    }
    
} 