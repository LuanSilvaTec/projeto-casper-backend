import { Request, Response } from 'express';
export default class DialogHook{
    dialog(request: Request, response: Response){
  
            var intentName = request.body.queryResult.intent.displayName;
            if ( intentName == "Default Welcome Intent"  ){
                console.log("Teste de integração com DialogFlow")
            }



            /*
            if ( intentName == "processo.seletivo"  ) {
              
              
                response.json({
                "fulfillmentMessages": [
                        {
                          "card": {
                            "title": "Processo Seletivo",
                            "subtitle": "Bem vindo ao nosso processo seletivo",
                            "imageUri": "https://firebasestorage.googleapis.com/v0/b/universidade-3d7f8.appspot.com/o/processo%2Fprocesso-seletivo.png?alt=media&token=d5a89cec-1c07-4dad-9b44-7aaf098128bd"
                          }
                        },
                        {
                          "text" :{
                             "text": [
                                "Temos os melhores cursos nas areas de Humanas, exatas e Biologicas"
                            ]
                          }
                        },
                        {
                          "image":{
                            
                              "imageUri": "https://firebasestorage.googleapis.com/v0/b/universidade-3d7f8.appspot.com/o/processo%2Falunos_campus.jpg?alt=media&token=af408613-e87c-4f2c-982e-dbc1b5d29748",
                              "accessibilityText": "Temos Campus em todas as areas da cidade"
                            
                          }
                        },
                        {
                          "text" :{
                             "text": [
                                "Nossos Campus são os melhores do Brasil"
                            ]
                          }
                        },
                        {
                          "image":{
                            
                              "imageUri": "https://firebasestorage.googleapis.com/v0/b/universidade-3d7f8.appspot.com/o/processo%2Flaboratorio.jpg?alt=media&token=83f17a55-5943-4592-a06f-64230f07afe2",
                              "accessibilityText": "Laboratorios"
                            
                          }
                        },
                        {
                          "text" :{
                             "text": [
                                "Temos os melhores laboratorios"
                            ]
                          }
                        },
                        {
                          "text" :{
                             "text": [
                                "Voce quer participar do processo seletivo ?"
                            ]
                          }
                        }
                      ]
               });
           
            }*/
        }
    }