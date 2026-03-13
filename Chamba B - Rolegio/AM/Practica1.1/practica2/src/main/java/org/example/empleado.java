package org.example;
public class empleado {
private int antiguedad;
private String nombre;
private double salario;
private String puesto;

public empleado(){

}
public empleado(int antiguedad,String nombre,double salario,String puesto){
    this.antiguedad = antiguedad;
    this.nombre = nombre;
    this.salario = salario;
    this.puesto = puesto;
}

public int getAntiguedad() {
    return antiguedad;
}

public void setAntiguedad(int antiguedad) {
    this.antiguedad = antiguedad;
}

public String getNombre() {
    return nombre;
}

public void setNombre(String nombre) {
    this.nombre = nombre;
}

public double getSalario() {
    return salario;
}

public void setSalario(double salario) {
    this.salario = salario;
}

public String getPuesto() {
    return puesto;
}

public void setPuesto(String puesto) {
    this.puesto = puesto;
}

public void aumentarsal(double por){
    por = antiguedad * 3;
    salario += salario * (por / 100);
}

public void esvet(boolean veterano){
    if (antiguedad >= 6){
        veterano = true;
    }

}

}

