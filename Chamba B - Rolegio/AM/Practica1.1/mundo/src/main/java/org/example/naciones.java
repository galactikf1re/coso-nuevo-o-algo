package org.example;

import java.util.ArrayList;
import java.util.List;

public class naciones {
    public String nom;
    public String lider;
    public String tipogob;

    public List<estados> ListEst;

    public naciones(String nom, String lider, String tipogob) {
        this.nom = nom;
        this.lider = lider;
        this.tipogob = tipogob;
        ListEst = new ArrayList<>();
    }
}
