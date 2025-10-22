const members = [
{ Name: "Adolf", Surname: "Brown", Class: "Leader", Hours: 200 },
{ Name: "Arnold", Surname: "Shwarznegger", Class: "Leader", Hours: 100 },
{ Name: "Emma", Surname: "Flower", Class: "Member", Hours: 46 },
{ Name: "Robert", Surname: "Manastia", Class: "Member", Hours: 23 },
{ Name: "Aron", Surname: "Kingstein", Class: "Member", Hours: 3 },
{ Name: "Mantas", Surname: "Patvaiskis", Class: "Member", Hours: 4 },
{ Name: "Janis", Surname: "Ozols", Class: "Member", Hours: 19 }
];console.log("Visi Vadītāji:");
for (let i = 0; i < members.length; i++) {
if (members[i].Class === "Leader") {
console.log(members[i].Name + " " + members[i].Surname);
}
}
let totalHours = 0;
for (let i = 0; i < members.length; i++) {
totalHours += members[i].Hours;
}
console.log("\n2. Kopējais brīvprātīgo stundu skaits: " + totalHours);
console.log("\n3. Balvu “Zvaigžņu brīvprātīgais” saņem:");
let found = false;
for (let i = 0; i < members.length; i++) {
if (members[i].Class === "Member" && members[i].Hours >= 20) {
console.log(members[i].Name + " " + members[i].Surname);
found = true;
}
}
if (!found) {
console.log("Neviens biedrs neatbilst kritērijiem.");
}