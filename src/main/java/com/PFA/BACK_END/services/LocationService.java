package com.PFA.BACK_END.services;

import com.PFA.BACK_END.Entity.Location;
import com.PFA.BACK_END.Exceptions.LocationNotFoundException;
import com.PFA.BACK_END.Repository.LocationRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LocationService {

    private LocationRepository locationRepository;

    public LocationService(LocationRepository locationRepository) {
        this.locationRepository = locationRepository;
    }

    public Location addLocation(Location location){
        return this.locationRepository.save(location);
    }

    public Location updateLocation(Location location){
        Location existingLocation = locationRepository.findById(location.getId()).orElseThrow(
                () -> new LocationNotFoundException("Location not found"));
        existingLocation.setLatitude(location.getLatitude());
        existingLocation.setLongitude(location.getLongitude());
        existingLocation.setRadius(location.getRadius());

        return this.locationRepository.save(existingLocation);
    }

    public String deleteLocation(Long id){
        this.locationRepository.deleteById(id);
        return "location deleted successfully";
    }

    public List<Location> getLocations(){
        return this.locationRepository.findAll();
    }

    public Location getLocationById(Long id){
        return this.locationRepository.findById(id).orElseThrow(
                () -> new LocationNotFoundException("there is no location with id = "+id)
        );
    }

    public Location addNewLocation(Location location){
        return this.locationRepository.save(location);
    }

    public Location getLocation(float lat, float lng){
        return this.locationRepository.findLocationByLatitudeEqualsAndAndLongitudeEquals(lat, lng);
    }
}
