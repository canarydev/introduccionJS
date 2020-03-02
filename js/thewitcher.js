class Raza {
    constructor(nombre, altura, peso, colorPelo, colorPiel){
        this.nombre = nombre;
        this.altura = altura;
        this.peso = peso;
        this.colorPelo = colorPelo;
        this.colorPiel = colorPiel;
    }

    presentarse(){
        console.log("Hola mi nombre es " + this.nombre);
    }
}

class Brujo extends Raza{
    colorOjos;
    constructor(nombre, altura, peso, colorPiel, colorPelo = "blanco"){
        super(nombre, altura, peso, colorPelo, colorPiel);
        /*this.nombre = nombre;
        this.altura = altura;
        this.peso = peso;
        this.colorPelo = colorPelo;
        this.colorPiel = colorPiel;*/
        this.colorOjos = "amarillo";
    }

    presentarse(){
        console.log("Mi nombre es " + this.nombre + " mis ojos son de color " + this.colorOjos + ", el color de mi pelo es " + this.colorPelo + " y mi color de piel es " + this.colorPiel);
    }
}

Gerardo_El_Mágico = new Brujo("Gerardo El Mágico", 185, 85, "blanco"); 
Gerardo_El_Mágico.presentarse();