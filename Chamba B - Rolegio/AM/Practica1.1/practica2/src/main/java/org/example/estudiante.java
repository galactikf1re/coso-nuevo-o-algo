package org.example;
public class estudiante {
    private String Nombre;
    private int Edad;
    private String carrera;
    private double promedio;

    public estudiante() {
    }

    public estudiante(String Nombre, int Edad, String carrera, double promedio) {
        this.Nombre = Nombre;
        this.Edad = Edad;
        this.carrera = carrera;
        this.promedio = promedio;
    }

    public void aprobar(boolean aprobacion) {
        if (promedio >= 6) {
            aprobacion = true;
        }
    }

    public void mostrarinfo() {
        System.out.println("Nombre: " + Nombre + "\nCarrera: " + carrera);
    }

    public String getNombre() {
        return Nombre;
    }

    public void setNombre(String nombre) {
        Nombre = nombre;
    }

    public int getEdad() {
        return Edad;
    }

    public void setEdad(int edad) {
        Edad = edad;
    }

    public String getCarrera() {
        return carrera;
    }

    public void setCarrera(String carrera) {
        this.carrera = carrera;
    }

    public double getPromedio() {
        return promedio;
    }

    public void setPromedio(double promedio) {
        this.promedio = promedio;
    }
}