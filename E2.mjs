function bewerking(zijde1,zijde2,straal){
    let cirkel= Math.PI * straal *straal;
    let vierkant= zijde1*zijde1
    let rechthoek=zijde1*zijde2
    let driehoek=zijde1*zijde2/2
    console.log('De oppervlakte van een cirkel met een straal van '+ straal +' en een straal van '+ straal +' is '+ cirkel);
    console.log('De oppervlakte van een vierkant met een zijde van '+ zijde1 +' en een zijde van '+ zijde1 +' is '+ vierkant);
    console.log('De oppervlakte van een rechthoek met een zijde van '+ zijde1 +' en een hoogte van '+ zijde2 +' is '+ rechthoek);
    console.log('De oppervlakte van een driehoek met een basis van '+ zijde1 +' en een hoogte van '+ zijde2 +' is '+ driehoek);
}

bewerking(2,5,7);

process.exit()