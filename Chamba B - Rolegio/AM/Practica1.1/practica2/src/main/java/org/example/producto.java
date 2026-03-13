package org.example;public class producto {
private String nombre;
private double precio;
private String categoria;
private int stock;

public producto(){

}
public producto(String nombre,double precio,String categoria,int stock){
this.nombre = nombre;
this.precio = precio;
this.categoria = categoria;
}


public String getNombre() {
    return nombre;
}

public void setNombre(String nombre) {
    this.nombre = nombre;
}

public double getPrecio() {
    return precio;
}

public void setPrecio(double precio) {
    this.precio = precio;
}

public String getCategoria() {
    return categoria;
}

public void setCategoria(String categoria) {
    this.categoria = categoria;
}

public int getStock() {
    return stock;
}

public void setStock(int stock) {
    this.stock = stock;
}

public void vender(int cantidad){
    stock -= cantidad;
}

public void cambiarProducto(String NuevoNombre, double NuevoPrecio){
    this.nombre = NuevoNombre;
    this.precio = NuevoPrecio;
}


}