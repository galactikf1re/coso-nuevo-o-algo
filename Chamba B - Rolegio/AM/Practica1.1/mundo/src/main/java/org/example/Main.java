package org.example;

import java.util.List;
import java.util.ArrayList;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int op = 0;

        List<mundo> Universo= new ArrayList<>();

        mundo SuperTierra = new mundo("Super_Tierra");
        Universo.add(SuperTierra);

        naciones Isla = new naciones("Isla_Epstein","Trump","Republica Democratica" );
        SuperTierra.LisNac.add(Isla);
        naciones bern = new naciones("Bernard","Jonh Kaisen","Imperio");
        SuperTierra.LisNac.add(bern);
        naciones jsg = new naciones("jsgca","rgwkvga","fagkwg");
        SuperTierra.LisNac.add(jsg);


        estados xKpL7q = new estados("xKpL7q");
        Isla.ListEst.add(xKpL7q);
        estados vN2mRs = new estados("vN2mRs");
        Isla.ListEst.add(vN2mRs);
        estados jBw9Zt = new estados("jBw9Zt");
        Isla.ListEst.add(jBw9Zt);
        estados dFhK4c = new estados("dFhK4c");
        bern.ListEst.add(dFhK4c);
        estados gYp3Mx = new estados("gYp3Mx");
        bern.ListEst.add(gYp3Mx);
        estados eL8nT1 = new estados("eL8nT1");
        bern.ListEst.add(eL8nT1);
        estados rS6Qw0 = new estados("rS6Qw0");
        jsg.ListEst.add(rS6Qw0);
        estados aU5Hb2 = new estados("aU5Hb2");
        jsg.ListEst.add(aU5Hb2);
        estados cJ3Yx8 = new estados("cJ3Yx8");
        jsg.ListEst.add(cJ3Yx8);

        /*("kP9wD5", 8335897, 4521893)
        ("mX2Lq7", 3990456, 2156789)
        ("tZ8Bk1", 2693976, 1423567)
        ("sV4Gn6", 2320268, 956234)
        ("rF3Jc9", 1680992, 789456)
        ("pW0Mx2", 1603797, 634821)*/
        xKpL7q.ListCiu.add(new ciudades        ("kP9wD5", 8335897, 4521893)
        );
        xKpL7q.ListCiu.add(new ciudades        ("mX2Lq7", 3990456, 2156789)
        );
        vN2mRs.ListCiu.add(new ciudades        ("tZ8Bk1", 2693976, 1423567)
        );
        vN2mRs.ListCiu.add(new ciudades        ("sV4Gn6", 2320268, 956234)
        );
        dFhK4c.ListCiu.add(new ciudades        ("rF3Jc9", 1680992, 789456)
        );
        dFhK4c.ListCiu.add(new ciudades        ("pW0Mx2", 1603797, 634821)
        );

        mundo mundofantastico1 = new mundo("mundoyupi");
        Universo.add(mundofantastico1);

        naciones Atlantida = new naciones("Atlantida","Marcus Aurelius","Monarquía");
        naciones Lemuria = new naciones("Lemuria","Cleópatra","Teocracia");
        naciones Avalon = new naciones("Avalon","Arturo Pendragon","Realeza");

        mundofantastico1.LisNac.add(Atlantida);
        mundofantastico1.LisNac.add(Lemuria);
        mundofantastico1.LisNac.add(Avalon);

        estados hQ7Pr4 = new estados("hQ7Pr4");
        estados fI1Ks8 = new estados("fI1Ks8");
        estados lO6Dt3 = new estados("lO6Dt3");
        Atlantida.ListEst.add(hQ7Pr4);
        Atlantida.ListEst.add(fI1Ks8);
        Atlantida.ListEst.add(lO6Dt3);

        estados bA9Ym5 = new estados("bA9Ym5");
        estados wE2Nq7 = new estados("wE2Nq7");
        estados uC4Rx0 = new estados("uC4Rx0");
        Lemuria.ListEst.add(bA9Ym5);
        Lemuria.ListEst.add(wE2Nq7);
        Lemuria.ListEst.add(uC4Rx0);

        estados oH8Lj6 = new estados("oH8Lj6");
        estados vB3Ts1 = new estados("vB3Ts1");
        estados gF5Mw9 = new estados("gF5Mw9");
        Avalon.ListEst.add(oH8Lj6);
        Avalon.ListEst.add(vB3Ts1);
        Avalon.ListEst.add(gF5Mw9);

        hQ7Pr4.ListCiu.add(new ciudades("nZ1Kj4", 5000000, 2500000));
        hQ7Pr4.ListCiu.add(new ciudades("yV6Sp2", 2100000, 950000));
        hQ7Pr4.ListCiu.add(new ciudades("iE8Qr5", 1500000, 700000));
        fI1Ks8.ListCiu.add(new ciudades("dX3Wc0", 3200000, 1600000));
        fI1Ks8.ListCiu.add(new ciudades("sH7Gl9", 1800000, 850000));
        fI1Ks8.ListCiu.add(new ciudades("tM4Nb6", 900000, 400000));

        System.out.println("Algo");
        for(mundo m: Universo){
                System.out.println(m.nom);
                for(naciones n: m.LisNac){
                    System.out.println("  " + n.nom);
                    for(estados e: n.ListEst){
                        System.out.println("    " + e.nom);
                        for(ciudades c: e.ListCiu){
                            System.out.println("      " + c.nom + " - Población: " + c.poblacion );
                        }
                    }
                }
        }


    }
}