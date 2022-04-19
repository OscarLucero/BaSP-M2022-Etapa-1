var numaleat;
numaleat = Math.random(0,1);
if (numaleat >= 0.5) {
    console.log("ex04-if-else-A: Greater than 0,5")
} else {
    console.log("ex04-if-else-A: Lower than 0,5")
}

var age = Math.floor(Math.random() * 101)

if (age <= 2) {
    console.log("ex04-if-else-B: Bebe " + age)
}else if ((age > 2) && (age <= 12)) {
    console.log("ex04-if-else-B: Niño " + age)
}else if ((age > 12) && (age <= 19)) {
    console.log("ex04-if-else-B: Adolescente " + age)
}else if ((age > 19) && (age <= 30)) {
    console.log("ex04-if-else-B: Joven " + age)
}else if ((age > 30) && (age <= 60)) {
    console.log("ex04-if-else-B: Adulto " + age)
}else if ((age > 60) && (age <= 75)) {
    console.log("ex04-if-else-B: Adulto Mayor " + age)
}else {
    console.log("ex04-if-else-B: Anciano " + age)
}