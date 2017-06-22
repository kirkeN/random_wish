var promptWish = null;
var wishes = ["Galantselt klassikaline sünnipäevasoov: Palju õnne, kallis! Sinu ustav austaja.",
    "Sünnipäevad korduvad, sina oled korrutamatu. Palju õnne 1 ja ainus!",
    "Sõnad on inimkonna kangeim narkootikum, seega ... tead ju küll, miks ma sinu poole täna pöördun.",
    "Õnn pole mõistuse, vaid kujutelma ideaal. Ebamõistlikud õnnesoovid!",
    "Soovin õnne ja õnnelikke inimesi sinu ümber, sest õnn üksinda võib muutuda väljakannatamatuks.",
    "Tahaks teha sulle õnne update'i, kas sa oled online ja õnnelainel?",
    "Soojad sünnipäevasoovid sulatagu su suurepärast südant!"];

function getWish() {
        $('#get_wish').text(wishes[Math.floor(Math.random() * wishes.length)]);
    
        
}
function newWish() {
    promptWish = prompt("Sisesta oma originaalne õnnitlus siia");
    if (promptWish != null){
        wishes.push(promptWish);
        //document.write(wishes.toString());
        console.log(wishes.toString());
    }
}



