package com.PFA.BACK_END.Controller;

import com.PFA.BACK_END.Entity.Location;
import com.PFA.BACK_END.services.LocationService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/location")
public class LocationController  {

    private LocationService locationService;

    public LocationController(LocationService locationService) {
        this.locationService = locationService;
    }

    @PostMapping("/addLocation")
    public Location addNewLocation(@RequestBody Location location){
        return this.locationService.addNewLocation(location);
    }

    @GetMapping("/allLocation")
    public List<Location> getAllLocations(){
        return this.locationService.getLocations();
    }

    @GetMapping("/location/{id}")
    public Location getLocationById(@PathVariable Long id){
        return this.locationService.getLocationById(id);
    }

    @DeleteMapping("/deleteLocation/{id}")
    public String deleteLocationById(@PathVariable Long id){
        return this.locationService.deleteLocation(id);
    }

    @PutMapping("/updateLocation")
    public Location upDateLocation(@RequestBody Location location){
        return this.locationService.updateLocation(location);
    }

    @GetMapping("getLoc/{lat}/{lng}")
    public Location getLocation(@PathVariable float lat, @PathVariable float lng){
        return this.locationService.getLocation(lat, lng);
    }
}
