package com.example1.backend.controller;

import com.example1.backend.dto.CalculatorDetailsDto;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;


@RestController
@CrossOrigin
public class CalculatorController {

    @GetMapping(value="/calculate")
    @ResponseStatus(value = HttpStatus.OK)
    public ResponseEntity<?> getCalculationResult(@RequestParam float amount, @RequestParam int tax) {

        float importWithoutVAT = amount;
        float vat =  (float) tax/100; 
        float result = importWithoutVAT + (importWithoutVAT * vat);

        CalculatorDetailsDto cdd = new CalculatorDetailsDto();
        cdd.setAmount(importWithoutVAT);
        cdd.setTax(vat);
        cdd.setResult(result);

        return new ResponseEntity<>(cdd, HttpStatus.OK);
    }  
    
}