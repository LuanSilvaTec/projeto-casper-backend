import { Request, Response } from 'express';
import knex from '../database/connection'
export default class DialogHook {
    async dialog(request: Request, response: Response) {

        var intentName = request.body.queryResult.intent.displayName;
        if (intentName == "noticias.famosos") {
            console.log("Teste de integração para busca de noticias sobre famosos.");
            const noticias = await knex('noticias').select('*').where('tema', 'Famosos');
            //console.log(noticias);
            const serializedNoticias = noticias.map(noticia => {
                return {
                    image_url: noticia.url_imagem,
                    title: noticia.titulo,
                    subtitle: noticia.descricao,
                    url_noticia: noticia.url_noticia
                }
            })

            /*"facebook": {
              "attachment": {
                "type": "",
                "payload": {}
              }
            }
          }*/
            //return response.json(serializedNoticias)
            //console.log(request.body.queryResult)
            request.body.queryResult.fulfillmentMessages[1].payload.facebook.attachment.payload.elements.push(
                        {
                            "title": "Welcome!",
                            "image_url": "https://petersfancybrownhats.com/company_image.png",
                            "subtitle": "We have the right hat for everyone.",
                            "buttons": [
                                {
                                    "type": "web_url",
                                    "url": "https://petersfancybrownhats.com",
                                    "title": "View Website"
                                }, {
                                    "type": "postback",
                                    "title": "Start Chatting",
                                    "payload": "DEVELOPER_DEFINED_PAYLOAD"
                                }
                            ]
                        },
                        {
                            "title": "Welcome!",
                            "image_url": "https://petersfancybrownhats.com/company_image.png",
                            "subtitle": "We have the right hat for everyone.",
                            "buttons": [
                                {
                                    "type": "web_url",
                                    "url": "https://petersfancybrownhats.com",
                                    "title": "View Website"
                                }, {
                                    "type": "postback",
                                    "title": "Start Chatting",
                                    "payload": "DEVELOPER_DEFINED_PAYLOAD"
                                }
                            ]
                        }
            )
            /*
            let responseJson =
                {
                    "fulfillmentMessages": [
                        {
                            "facebook": {
                                "attachment": {
                                    "type": "template",
                                    "payload": {
                                        "template_type": "generic",
                                        "elements": [
                                            {
                                                "title": serializedNoticias[0].titulo,
                                                "image_url": serializedNoticias[0].url_imagem,
                                                "subtitle": serializedNoticias[0].descricao,
                                                "buttons": [
                                                    {
                                                        "type": "web_url",
                                                        "url": serializedNoticias[0].url_noticia,
                                                        "title": "View Website"
                                                    }, {
                                                        "type": "postback",
                                                        "title": "Start Chatting",
                                                        "payload": "DEVELOPER_DEFINED_PAYLOAD"
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                }
                            }
                        }
                    ],
                    //"source": "webhook"
                }*/
            console.log(request.body.queryResult.fulfillmentMessages[1].payload.facebook.attachment.payload.elements)
            response.json(request.body)
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