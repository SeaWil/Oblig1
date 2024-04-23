package com.example.oblig1.modules;

public class Ticket {
    String film;
    String amount;
    String fName;
    String sName;
    String phoneNumber;
    String epost;

    public Ticket(String film, String amount, String fName, String sName, String phoneNumber, String epost) {
        this.film = film;
        this.amount = amount;
        this.fName = fName;
        this.sName = sName;
        this.phoneNumber = phoneNumber;
        this.epost = epost;
    }

    public String getFilm() {
        return film;
    }

    public void setFilm(String film) {
        this.film = film;
    }

    public String getAmount() {
        return amount;
    }

    public void setAmount(String amount) {
        this.amount = amount;
    }

    public String getfName() {
        return fName;
    }

    public void setfName(String fName) {
        this.fName = fName;
    }

    public String getsName() {
        return sName;
    }

    public void setsName(String sName) {
        this.sName = sName;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEpost() {
        return epost;
    }

    public void setEpost(String epost) {
        this.epost = epost;
    }
}
