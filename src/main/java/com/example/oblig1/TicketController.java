package com.example.oblig1;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.oblig1.modules.Ticket;

import java.util.ArrayList;


@RestController
public class TicketController {
    ArrayList<Ticket>ticketArrayList = new ArrayList<>();
    @PostMapping ("/registerTicket")
    public void registerTickets(Ticket ticket){
        ticketArrayList.add(ticket);
    }
    @GetMapping ("/deleteTickets")
    public void deleteTickets(){
        ticketArrayList.clear();
    }
    @GetMapping ("/getTicket")
    public ArrayList<Ticket> getTicket (){
        return ticketArrayList;
    }

}
