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
    const film = $("#Film").val();
    const antall = $("#Antall").val();
    const fnavn = $("#Fnavn").val();
    const enavn = $("#Enavn").val();
    const tlfnr = $("#Tlfnr").val();
    const epost = $("#Epost").val();

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
    $("#Antall").val("");
    $("#Fnavn").val("");
    $("#Enavn").val("");
    $("#Tlfnr").val("");
    $("#Epost").val("");

}

function visBilletter() {
    let visBillett = "<table><tr>" + "<th>Film</th><th>Antall</th>" +
        "<th>Fornavn</th><th>Etternavn</th><th>Telefonnummer</th><th>Epost</th></tr>";

    for (let p of billetterSolgt) {
        visBillett += "<tr>" +
            "<td>" + p.film + "</td><td>" + p.antall + "</td><td>"
            + p.fnavn + "</td><td>" + p.enavn + "</td><td>" + p.tlfnr + "</td><td>" + p.epost + "</td>" +
            "</tr>";

        $("#visBilletter").html(visBillett);

    }
}


function sjekkAntall() {
    let utAntall = "Hvor mang billetter"
    let tall = Number($("#Antall").val())

    if (tall < 1) {
        $("#aFeilmelding").html(utAntall);
        return false
    } else {
        $("#aFeilmelding").html("");
        return true
    }
}

function sjekkFnavn() {
    let utFnavn = "Ugyldig fornavn"
    if ($("#Fnavn").val() === "") {
        $("#feilFnavn").html(utFnavn);
        return false
    } else {
        $("#feilFnavn").html("");
        return true
    }
}

function sjekkEnavn() {
    let utEnavn = "Ugyldig etternavn"
    if ($("#Enavn").val() === "") {
        $("#feilEnavn").html(utEnavn);
        return false
    } else {
        $("#feilEnavn").html("");
        return true
    }
}

function sjekkTlfnr() {
    let outNumber = "Ugyldig telefonnummer"
    let inPhone = $("#Tlfnr").val();
    let regex = /^[2-9]\d{7}$/
    if (!regex.test(inPhone)) {
        $("#feilTlfnr").html(outNumber);
        return false
    } else {
        $("#feilTlfnr").html("");
        return true
    }
}

function sjekkEpost() {
    let utEpost = "Ugyldig epost-adresse"
    const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
    let sjekk = emailRegex.test($("#Epost").val())
    if (sjekk === false) {
        $("#feilEpost").html(utEpost);
        return false
    } else {
        $("#feilEpost").html("");
        return true
    }
}

function slettAlt() {
    billetterSolgt.length = 0;
    $("#visBilletter").html("");

}

