package com.example1.backend.dto;

public class CalculatorDetailsDto {
    
    private float amount;
    private float tax;
    private float result;

    public float getAmount() {
        return amount;
    }

    public void setAmount(float amount) {
        this.amount = amount;
    }

    public float getTax() {
        return tax;
    }

    public void setTax(float tax) {
        this.tax = tax;
    }

    public float getResult() {
        return result;
    }

    public void setResult(float result) {
        this.result = result;
    }


}