package main;

import modulos.ventas;
import modulos.inventario;
import modulos.ventas;
//encapsulamiento
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
	
	public Producto() {}
	
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

	public String getAtributos(){
		return "Nombre " + this.nombre +
				"\n Precio " + this.precio +
				"\n Categoria " + this.categoria +
				"\n Color " + this.color +
				"\n Codigo " + this.codigo +
				"\n Stock " + this.stock;
	}
	
	public String getventas() {
		return 
		"\n -Nombre " + this.nombre +
		"\n -Precio " + this.precio +
		"\n -Categoria " + this.categoria +
		"\n -Codigo " + this.codigo +
		"\n -Stock " + this.stock;
 	}
	
	public void actStock(int stock) {
		setStock(stock);
		
	
		
	}
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		//instancias: 
		Producto producto = new Producto("Pluma",14.55,"Escolar","Negro","0011ES",45);
		System.out.println(producto.categoria);
		
		

		inventario inventario = new inventario("Almacen 1","Pluma",14.55,"Escolar","Negro","0011ES",45);
		System.out.println(inventario.getAtributos());
			
		Producto actstock = new Producto();
		int stock_act = inventario.getStock();
		actstock.actStock(5 + stock_act);
		System.out.println(actstock.getStock());
		
		ventas producto_procesos = new ventas();
		producto_procesos.menuVentas(null);
		
		
		}
		
	}


