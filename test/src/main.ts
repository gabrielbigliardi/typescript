interface Band {
    readonly [index: string]: string
    vocal: string
    guitar: string
    bass: string
    drum: string
}

const guns: Band = {
    vocal: "Axl",
    guitar: "Slash",
    bass: "Duff",
    drum: "Steven"
}


for (const integrant in guns) {
    console.log(guns[integrant])
}

const todaysNet = (guns: Band) => {
    for (const integrant in guns) {
        console.log(integrant)
    }
}

console.log(todaysNet(guns));


