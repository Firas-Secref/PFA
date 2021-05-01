package com.PFA.BACK_END.services;

import com.PFA.BACK_END.Entity.Patient;
import com.PFA.BACK_END.Exceptions.PatientNotFoundException;
import com.PFA.BACK_END.Repository.PatientRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PatientService {

    private PatientRepository patientRepository;

    public PatientService(PatientRepository patientRepository) {
        this.patientRepository = patientRepository;
    }

    public List<Patient> getAllPatients(){
        return this.patientRepository.findAll();
    }

    public Patient getPatient(Long id){
        return this.patientRepository.findById(id).orElseThrow(
                () -> new PatientNotFoundException("Patient with id = "+id+" does not exist. "));
    }

    public Patient addPatient(Patient patient){
        return this.patientRepository.save(patient);
    }

    public Patient updatePatient(Patient patient){
        Patient existingPatient = patientRepository.findById(patient.getId()).orElseThrow(
                () -> new PatientNotFoundException("patient not found"));
        System.out.println(existingPatient.getEmail());
        existingPatient.setFirstName(patient.getFirstName());
        existingPatient.setLastName(patient.getLastName());
        existingPatient.setEmail(patient.getEmail());
        existingPatient.setBirthDate(patient.getBirthDate());
        existingPatient.setSexe(patient.getSexe());
        existingPatient.setFamilyNumber(patient.getFamilyNumber());
        existingPatient.setPhoneNumber(patient.getPhoneNumber());
        existingPatient.setPhoneNumber1(patient.getPhoneNumber1());
        existingPatient.setPhoneNumber2(patient.getPhoneNumber2());


        return this.patientRepository.save(existingPatient);
    }

    public String deletePatient(Long id){
        this.patientRepository.deleteById(id);
        return "patient deleted successfully";
    }

}
