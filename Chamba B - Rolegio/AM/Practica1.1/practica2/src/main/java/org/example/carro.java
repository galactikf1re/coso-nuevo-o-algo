package org.example;public class carro {
    private String color;
    private String marca;
    private String modelo;
    private double velmax;

    public carro() {
    }

    public carro(String color, String marca, String modelo, double velmax) {
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
        this.velmax = velmax;
    }

    public void mosdet() {
        System.out.println(marca + " " + modelo + " " + color);
    }

    public void cambiarDet(String NuevoCol, String NuevoMod) {
        this.color = NuevoCol;
        this.modelo = NuevoMod;
    }


    public double getVelmax() {
        return velmax;
    }

    public void setVelmax(double velmax) {
        this.velmax = velmax;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }
}