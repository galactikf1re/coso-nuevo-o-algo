package org.example;
import java.util.Scanner;
import java.util.List;
import java.util.ArrayList;


public class Main {

    private cosso1 aaaa;
    public class Producto {
        private String nombre;
        private double precio;
        private String categoria;
        private String color;
        private String codigo;
        private int stock;

        public Producto(String nombre, double precio, String cat, String color, String codigo, int stock) {

            this.nombre = nombre;
            this.precio = precio;
            this.categoria = cat;
            this.color = color;
            this.codigo = codigo;
            this.stock = stock;

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

        public String getColor() {
            return color;
        }

        public void setColor(String color) {
            this.color = color;
        }

        public String getCodigo() {
            return codigo;
        }

        public void setCodigo(String codigo) {
            this.codigo = codigo;
        }

        public int getStock() {
            return stock;
        }

        public void setStock(int stock) {
            this.stock = stock;
        }

        public String getAtributos() {
            return "Nombre " + this.nombre +
                    "\n Precio " + this.precio +
                    "\n Categoria " + this.categoria +
                    "\n Color " + this.color +
                    "\n Codigo " + this.codigo +
                    "\n Stock " + this.stock;

        }
    }
    public static void main(String[] args) {

    }
}