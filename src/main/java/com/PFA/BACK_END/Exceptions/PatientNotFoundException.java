package com.PFA.BACK_END.Exceptions;

public class PatientNotFoundException extends RuntimeException {
    public PatientNotFoundException(String s) {
        super(s);
    }
}
