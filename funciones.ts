const username1="Gilberto";
const age1=42;

console.log("Hello World¡, Mi nombre es: ",(username1) +  " tengo "  + (age1) + " años de edad")

function buildmente(name:string){
    console.log("Hello World¡¡,", +(name.toUpperCase()!!))
}
buildmente("Jose C");

//More Function

function printPosition(position:{Lat:number, long: number}):void {
    console.log("Latitud y longitud son: LAT:", (position.Lat) +"LONG:" + (position.long));
}
printPosition({Lat: 3, long: 55});

//

function data(correo:string|number, Nombre?:string){
    console.log("Hello,", {correo()}!!);
}
data("");

//
let subtract:(a:number,b:number)=>number
subtract = function (a,b) {
    return a-b
}
//
let subtract1:(a:string,b:string)=>string{
    return a+b

}
function PrintPosition(position:{Lat:number, Long: number}){
    console.log("Latitud y longitud son: " , "Lat:" + (position.Lat) + "Long:" +(position.Long));
}
PrintPosition({Lat: 3, Long: 55});

//
var text = 'sdabhikagathara@rediffmail.com, "assdsdf" <dsfassdfhsdfarkal@gmail.com>, "rodnsdfald ferdfnson" <rfernsdfson@gmal.com>, "Affdmdol Gondfgale" <gyfanamosl@gmail.com>, "truform techno" <pidfpinfg@truformdftechnoproducts.com>, "NiTsdfeSh ThIdfsKaRe" <nthfsskare@ysahoo.in>, "akasdfsh kasdfstla" <akashkatsdfsa@yahsdfsfoo.in>, "Bisdsdfamal Prakaasdsh" <bimsdaalprakash@live.com>,; "milisdfsfnd ansdfasdfnsftwar" <dfdmilifsd.ensfdfcogndfdfatia@gmail.com>';    

function extractemails (text)
{
    return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
}

$("#emails").text(extractemails(text).join('\n'));
//
function extractEmails (text)
{
    return text.match(/([a-zA-Z0-9._+-]+@[a-zA-Z0-9._-]+.[a-zA-Z0-9._-]+)/gi);
}
     
$("#emails").text(extractEmails(text).join('n'));