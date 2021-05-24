package com.PFA.BACK_END.Controller;

import com.PFA.BACK_END.Entity.Patient;
import com.PFA.BACK_END.services.PatientService;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/patient")
public class PatienController {

    private PatientService patientService;

    public PatienController(PatientService patientService) {
        this.patientService = patientService;
    }

    @PostMapping("/addPatient")
    public Patient addNewPatient(@RequestParam("imageFile")MultipartFile file, @RequestParam("patient") String patient, @RequestParam("location") String location, @RequestParam("user") String user) throws IOException {
        return this.patientService.addPatient(file, patient, location, user);
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

    @GetMapping("/getID/{username}")
    public Long getUserIdByUsername(@PathVariable String username){
        return this.patientService.getUserId(username);
    }
//    @GetMapping("/myPatients/{username}")
//    public List<Patient> getMyPatients(@PathVariable String username){
//        return this.patientService.getMyPatients(username);
//    }

    @GetMapping("/getPatientId/{username}")
    public Long getIdByUsername(@PathVariable String username){
        return this.patientService.getUserId(username);
    }

}

