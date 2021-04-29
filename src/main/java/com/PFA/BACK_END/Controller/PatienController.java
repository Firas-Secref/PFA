package com.PFA.BACK_END.Controller;

import com.PFA.BACK_END.Entity.Patient;
import com.PFA.BACK_END.services.PatientService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/patient")
public class PatienController {
    private PatientService patientService;

    public PatienController(PatientService patientService) {
        this.patientService = patientService;
    }

    @PostMapping("/addPatient")
    public Patient addNewPatient(@RequestBody Patient patient){
        return this.patientService.addPatient(patient);
    }

    @GetMapping("/getPatient/{id}")
    public Patient getPatientById(@PathVariable Long id){
        return this.patientService.getPatient(id);
    }

    @GetMapping("/getAllPatient")
    public List<Patient> getAllPatient(){
        return this.patientService.getAllPatients();
    }

    @PutMapping("/updatePatient")
    public Patient updatePatient(@RequestBody Patient patient){
        return this.patientService.updatePatient(patient);
    }

    @DeleteMapping("/deletePatient/{id}")
    public String deletePatient(@PathVariable Long id){
        return this.patientService.deletePatient(id);
    }
}
