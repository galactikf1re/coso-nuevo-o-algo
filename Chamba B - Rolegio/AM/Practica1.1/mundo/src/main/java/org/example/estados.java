package org.example;

import java.util.ArrayList;
import java.util.List;

public class estados {
    public List<ciudades> ListCiu;
    public  String nom;

    public estados(String nom) {
        this.nom = nom;
        ListCiu = new ArrayList<>();
    }
}
