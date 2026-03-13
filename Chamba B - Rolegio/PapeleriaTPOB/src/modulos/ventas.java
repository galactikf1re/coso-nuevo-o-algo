package modulos;
import java.util.ArrayList;
import java.util.Scanner;
import main.Producto;

public class ventas extends Producto {

    private String fechaV;
    private double costoT;
    private String codigoV;
    private String clienteC;

    ArrayList<ventas> lista_ven = new ArrayList<>();

    public ventas(String fechaVenta, double costoTotal, String codigoVenta, String clienteCodigo,String nombre, double precio, String cat, String color, String codigo, int stock) {
        super(nombre, precio, cat, color, codigo, stock); 
        this.fechaV = fechaVenta;
        this.costoT = costoTotal;
        this.codigoV = codigoVenta;
        this.clienteC = clienteCodigo;
    }

    public ventas() {}


    

    public String getFechaV() {
		return fechaV;
	}

	public void setFechaV(String fechaV) {
		this.fechaV = fechaV;
	}

	public double getCostoT() {
		return costoT;
	}

	public void setCostoT(double costoT) {
		this.costoT = costoT;
	}

	public String getCodigoV() {
		return codigoV;
	}

	public void setCodigoV(String codigoV) {
		this.codigoV = codigoV;
	}

	public String getClienteC() {
		return clienteC;
	}

	public void setClienteC(String clienteC) {
		this.clienteC = clienteC;
	}

	@Override
    public String getventas() {
        return super.getAtributos() +
                "\n Cliente: " + this.clienteC +
                "\n Codigo de Venta: " + this.codigoV +
                "\n Costo Total: " + this.costoT +
                "\n Fecha de Venta: " + this.fechaV;
    }

    public void ventasAlta(ventas v) {
        lista_ven.add(v);
        System.out.println("Venta registrada correctamente.");
    }

    public void mostrarVentas() {
            for(ventas v : lista_ven) {
                System.out.println(v.getAtributos());
            }
        }
    

    public void menuVentas(Scanner sc) {
    	sc = new Scanner(System.in);
        int opcion = 0;
        while(opcion != 5) {
            System.out.println("1.- Generar venta");
            System.out.println("2.- Mostrar las ventas");
            System.out.println("3.- Eliminar una venta");
            System.out.println("4.- Editar una venta");
            System.out.println("5.- Salir del modulo de ventas");

            System.out.println("Selecciona una opcion");
            opcion = sc.nextInt();

            switch(opcion) {
                case 1:
                    sc.nextLine(); // limpiar buffer
                    System.out.println("Nombre");
                    String nombre = sc.next();
                    System.out.println("Precio");
                    double precio = sc.nextDouble();
                    System.out.println("Categoria:");
                    String cat = sc.next();
                    System.out.println("Color");
                    String color = sc.next();
                    System.out.println("Codigo");
                    String codigo = sc.next();
                    System.out.println("Stock");
                    int stock = sc.nextInt();
                    System.out.println("Fecha de Venta");
                    String fechaVenta = sc.next();
                    System.out.println("Costo Total");
                    double costoTotal = sc.nextDouble();
                    System.out.println("Codigo Venta");
                    String codigoVenta = sc.next();
                    System.out.println("Codigo del Cliente");
                    String clienteCodigo = sc.next();

                    ventas nuevaVenta = new ventas(fechaVenta, costoTotal, codigoVenta, clienteCodigo, nombre, precio, cat, color, codigo, stock);
                    ventasAlta(nuevaVenta);
                    break;

                case 2:
                    mostrarVentas();
                    break;

                default:
                    System.out.println("Opcion incorrecta.............BYE");
                    break;
            }
        }
    }
}