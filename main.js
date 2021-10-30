var pkcards=["charizard","steelix","snorlax"];
pkcards.push("rayquaza");
pkcards.pop();
pkcards.unshift("umbreon");
pkcards.sort();
var a="";
for(var i=0;i<pkcards.length;i++){
a=a+pkcards[i]+"<br>";
}
console.log(a);

document.getElementById("ex1").innerHTML=a;