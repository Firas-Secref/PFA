package com.PFA.BACK_END.Entity;

public class Coordinate {
    private Long patientId;
    private double latitude;
    private double longitude;

    public Coordinate(double latitude, double longitude, Long patientId) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.patientId = patientId;
    }

    public Coordinate() {
    }

    public double getLatitude() {
        return latitude;
    }

    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }

    public double getLongitude() {
        return longitude;
    }

    public void setLongitude(double longitude) {
        this.longitude = longitude;
    }

    public Long getPatientId() {
        return patientId;
    }

    public void setPatientId(Long patientId) {
        this.patientId = patientId;
    }
}
