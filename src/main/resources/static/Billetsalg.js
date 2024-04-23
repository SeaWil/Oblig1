function enKnapp() {
    // let godkjent = true;
    sjekkAntall();
    sjekkFnavn();
    sjekkEnavn();
    sjekkTlfnr();
    sjekkEpost();
    if (sjekkAntall() === false || sjekkFnavn() === false || sjekkEnavn() === false || sjekkTlfnr() === false || sjekkEpost() === false) {
        // godkjent = false;
    } else {
        registrere();
        visBilletter();
        resetFelter();
    }
}
const billetterSolgt = [];

function registrere() {
    const film = document.getElementById("Film").value;
    const antall = document.getElementById("Antall").value;
    const fnavn = document.getElementById("Fnavn").value;
    const enavn = document.getElementById("Enavn").value;
    const tlfnr = document.getElementById("Tlfnr").value;
    const epost = document.getElementById("Epost").value;

    const billett = {
        film: film,
        antall: antall,
        fnavn: fnavn,
        enavn: enavn,
        tlfnr: tlfnr,
        epost: epost
    }
    billetterSolgt.push(billett);
}

function resetFelter() {
    document.getElementById("Antall").value = "";
    document.getElementById("Fnavn").value = "";
    document.getElementById("Enavn").value = "";
    document.getElementById("Tlfnr").value = "";
    document.getElementById("Epost").value = "";

}

function visBilletter() {
    let visBillett = "<table><tr>" + "<th>Film</th><th>Antall</th>" +
        "<th>Fornavn</th><th>Etternavn</th><th>Telefonnummer</th><th>Epost</th></tr>";

    for (let p of billetterSolgt) {
        visBillett += "<tr>" +
            "<td>" + p.film + "</td><td>" + p.antall + "</td><td>"
            + p.fnavn + "</td><td>" + p.enavn + "</td><td>" + p.tlfnr + "</td><td>" + p.epost + "</td>" +
            "</tr>";

        document.getElementById("visBilletter").innerHTML = visBillett;

    }
}


function sjekkAntall() {
    let utAntall = "Hvor mang billetter"
    let tall = Number(document.getElementById("Antall").value)

    if (tall < 1) {
        document.getElementById("aFeilmelding").innerHTML = utAntall;
        return false
    } else {
        document.getElementById("aFeilmelding").innerHTML = "";
        return true
    }
}

function sjekkFnavn() {
    let utFnavn = "Ugyldig fornavn"
    if (document.getElementById("Fnavn").value === "") {
        document.getElementById("feilFnavn").innerHTML = utFnavn;
        return false
    } else {
        document.getElementById("feilFnavn").innerHTML = "";
        return true
    }
}

function sjekkEnavn() {
    let utEnavn = "Ugyldig etternavn"
    if (document.getElementById("Enavn").value === "") {
        document.getElementById("feilEnavn").innerHTML = utEnavn;
        return false
    } else {
        document.getElementById("feilEnavn").innerHTML = "";
        return true
    }
}

function sjekkTlfnr() {
    let outNumber = "Ugyldig telefonnummer"
    let inPhone = document.getElementById("Tlfnr").value;
    let regex = /^[2-9]\d{7}$/
    if (!regex.test(inPhone)) {
        document.getElementById("feilTlfnr").innerHTML = outNumber;
        return false
    } else {
        document.getElementById("feilTlfnr").innerHTML = "";
        return true
    }
}

    function sjekkEpost() {
        let utEpost = "Ugyldig epost-adresse"
        const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
        let sjekk = emailRegex.test(document.getElementById("Epost").value)
        if (sjekk === false) {
            document.getElementById("feilEpost").innerHTML = utEpost
            return false
        } else {
            document.getElementById("feilEpost").innerHTML = "";
            return true
        }
    }

    function slettAlt() {
        billetterSolgt.length = 0;
        document.getElementById("visBilletter").innerHTML = "";

    }

