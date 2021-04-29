package com.PFA.BACK_END.Entity;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;

@Entity
public class Patient implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String firstName;
    private String lastName;
    private String username;
    private String email;
    private String birthDate;
    private String sexe;
    private String ville;
    private String address;
    private String phoneNumber;
    private int familyNumber;
    private String[] familyPhoneNumbers;
    @ManyToOne
    private SuperUser user;
    @ManyToOne
    private Location location;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Patient() {
    }

    public Patient(String firstName, String lastName, String username, String email, String birthDate, String sexe,
                   String ville, String address, String phoneNumber, int familyNumber, String[] familyPhoneNumbers) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.birthDate = birthDate;
        this.sexe = sexe;
        this.ville = ville;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.familyNumber = familyNumber;
        this.familyPhoneNumbers = familyPhoneNumbers;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(String birthDate) {
        this.birthDate = birthDate;
    }

    public String getSexe() {
        return sexe;
    }

    public void setSexe(String sexe) {
        this.sexe = sexe;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public int getFamilyNumber() {
        return familyNumber;
    }

    public void setFamilyNumber(int familyNumber) {
        this.familyNumber = familyNumber;
    }

    public String[] getFamilyPhoneNumbers() {
        return familyPhoneNumbers;
    }

    public void setFamilyPhoneNumbers(String[] familyPhoneNumbers) {
        this.familyPhoneNumbers = familyPhoneNumbers;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getVille() {
        return ville;
    }

    public void setVille(String ville) {
        this.ville = ville;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
