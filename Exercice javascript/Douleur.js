let résultat = prompt("Avez Vous Des Douleur : 'Oui' ou 'Non':");  
    if ((résultat=="Oui") || (résultat=="oui")) {

     let résultat = prompt ("avez vous males a 'Abdomen' ou 'Gorge' ou 'Non (auncune)'");
        if (résultat=="Abdomen") {
            alert("Appendicite");
        } else if (résultat=="Gorge") {
             let résultat = prompt ("Vous Avez De La Fievre 'Oui' Ou 'Non'");
                if ((résultat=="Oui") || (résultat=="oui")) {
                    alert("Rhume");
                } else if((résultat=="Non")||(résultat=="non")){
                    alert("Mal de Gorge");
                }
            }else if ((résultat=="Non")||(résultat=="non")) {
                let résultat = prompt ("peut être de la Toux : 'Oui' ou 'Non'")  
                    if ((résultat=="Oui") || (résultat=="oui")){
                        let résultat = prompt ("Avec De La Fievre : 'Oui' ou 'Non'")
                        if ((résultat=="Oui") || (résultat=="oui")) {
                            alert("Rhume");
                    } else if ((résultat=="Non")||(résultat=="non")){
                        alert("Rhume");
                    }
                } else if ((résultat=="Non")||(résultat=="non")) {
                    alert("Vous N'avez Rien");
                }
            }
    }else if ((résultat=="Non")||(résultat=="non")){
        alert("Vous N'avez Rien");
    }else{
        alert("Erreur recomencer");
    }

