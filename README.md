Mohamed Camara DBE

Exercice JavaScript:
______________________________________________________________________________________________________________________________________________________________________________

───Douleur
      |  └────Abdomen 
      |     └────Appendicite
      |       
      |──Gorge        
      |      └───Fievre
      |              └───Oui = Rhume
      |              └───Non = Mal de Gorge
      |                   
      |
      └───Aucne
             └───Toux   
                  |   └───Oui = Fievre
                  |                 └───Oui = Rhume
                  |                 └───Non = Refroidissement
                  |     
                  |
                  |_________Non = Rien    
___________________________________________________________________________________________________________________________________________________________________________

Cet arbre pourrait être traduit en pseudo-code de la manière suivante:
• si douleur à abdomen, alors appendicite
• sinon, si douleur à la gorge et:
o si fièvre, alors rhume o sinon, mal de gorge
• sinon, si…

 consigne:

Implémenter et tester les lignes de code JavaScript permettant d’interagir avec le chat-bot, tel que défini par l’arbre ci-dessus.
                     
