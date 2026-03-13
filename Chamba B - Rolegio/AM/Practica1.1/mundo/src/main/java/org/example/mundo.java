package org.example;

import java.util.ArrayList;
import java.util.List;

public class mundo {
    public String nom;
    public List<naciones> LisNac;

    public mundo(String nom) {
        this.nom = nom;
        LisNac = new ArrayList<>();
    }
}
