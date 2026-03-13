package org.example;
private Main uau;

public class cosso1 extends uau{

    private String almacen;
    public cosso1(String almacen,String nombre, double precio, String cat, String color, String codigo, int stock) {

        super (nombre,precio,cat,color,codigo,stock);
        this.almacen = almacen;
    }

    public String getAlmacen() {
        return almacen;
    }

    public void setAlmacen(String almacen) {
        this.almacen = almacen;
    }

    @Override
    public String getAtributos(){
        return  super.getAtributos() +
                "\n Almacen " + this.almacen;}
}
