"use strict";
const guns = {
    vocal: "Axl",
    guitar: "Slash",
    bass: "Duff",
    drum: "Steven"
};
for (const integrant in guns) {
    console.log(guns[integrant]);
}
const todaysNet = (guns) => {
    for (const integrant in guns) {
        console.log(integrant);
    }
};
console.log(todaysNet(guns));
