package com.PFA.BACK_END.Exceptions;

public class LocationNotFoundException extends RuntimeException {
    public LocationNotFoundException(String location_not_found) {
        super(location_not_found);
    }
}
