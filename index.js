let state = {
    views:{
        nome: document.querySelector("#nome"),
        xp: document.querySelector("#xp"),
        resultado: document.querySelector("#resul_classificao")
    },
    values: {
        nível: null
    }
}

function classificar(){

    let nome = state.views.nome.value;
    let xp = Number(state.views.xp.value);


    // Se XP for menor do que 1.000 = Ferro
    if (xp < 1001){
        state.values.nível = "Ferro";
    }// Se XP for entre 1.001 e 2.000 = Bronze
     else if (xp<= 2000){
        state.values.nível = "Bronze";
      } // Se XP for entre 2.001 e 5.000 = Prata 
       else if(xp <= 5000){
        state.values.nível = "Prata";  
      } // Se XP for entre 5.001 e 7.000 = Ouro
       else if (xp <= 7000){
        state.values.nível = "Ouro";
       } // Se XP for entre 7.001 e 8.000 = Platina
         else if(xp <= 8000){
            state.values.nível = "Platina";
         } // Se XP for entre 8.001 e 9.000 = Ascendente
          else if(xp <= 9000){
            state.values.nível = "Ascendente";
         }// Se XP for entre 9.001 e 10.000= Imortal
          else if(xp <= 10000){
            state.values.nível = "Imortal";
         } // Se XP for maior ou igual a 10.001 = Radiante
           else {
            state.values.nível = "Radiante"
         }
    
         state.views.resultado.textContent = ` o Herói ${nome} está no nível ${state.values.nível}`

}
