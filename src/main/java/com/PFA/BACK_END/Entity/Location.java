package com.PFA.BACK_END.Entity;

import org.apache.catalina.LifecycleState;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
public class Location implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private Long latitude;
    private Long longitude;
    private Long radius;
    @OneToMany(mappedBy = "location")
    private List<Patient> patients;

    public Location(Long latitude, Long longitude, Long radius) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.radius = radius;
    }

    public Location() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getLatitude() {
        return latitude;
    }

    public void setLatitude(Long latitude) {
        this.latitude = latitude;
    }

    public Long getLongitude() {
        return longitude;
    }

    public void setLongitude(Long longitude) {
        this.longitude = longitude;
    }

    public Long getRadius() {
        return radius;
    }

    public void setRadius(Long radius) {
        this.radius = radius;
    }
}
