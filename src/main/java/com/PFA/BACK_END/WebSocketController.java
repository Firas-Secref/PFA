package com.PFA.BACK_END;

import com.PFA.BACK_END.Entity.Coordinate;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class WebSocketController {

    @MessageMapping("/location")
    @SendTo("/topic/loc")
    public Coordinate send(String loc) throws Exception {
        Coordinate coords = new ObjectMapper().readValue(loc, Coordinate.class);
        System.out.println(""+coords.getLatitude());
        System.out.println(""+coords.getLongitude());
        System.out.println(""+coords.getPatientId());

        return new Coordinate(coords.getLatitude(), coords.getLongitude(), coords.getPatientId());
    }
}
