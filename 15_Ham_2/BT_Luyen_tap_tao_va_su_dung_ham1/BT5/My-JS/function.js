let star = ['Polaris', 'Aldebaran', 'Deneb', 'Vega', 'Altair', 'Dubhe', 'Regulus'];
let constellation = ["Ursa Minor", "Tarurus", "Cygnus", "Lyra", "Aquila", "Ursa Major", "Leo"];

function checkStar() {
    let starname = prompt("Input Name of star:");
    let i = star.indexOf(starname);
    if (i !== -1) {
        alert("Star name: " + star[i] + " Constellation name: " + constellation[i]);
    } else
        alert("Not found");
}