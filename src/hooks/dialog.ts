import { Request, Response } from 'express';
import knex from '../database/connection'
export default class DialogHook {
  
  async dialog(request: Request, response: Response) {

    
    var intentName = request.body.queryResult.intent.displayName;
    if (intentName == "noticias.famosos") {
      console.log("Teste de integração para busca de noticias sobre famosos.");
      const noticias = await knex('noticias').select('*').where('tema', 'Famosos').limit(10);
      //console.log(noticias);
      const serializedNoticias = noticias.map(noticia => {
        return {
          image_url: noticia.url_imagem,
          title: noticia.titulo,
          subtitle: noticia.descricao,
          url_noticia: noticia.url_noticia
        }
      })
      
      /*Sem parâmetro de payload */
      //console.log(request.body.queryResult.fulfillmentMessages.push(responseJson))
      //console.log(request.body.queryResult.fulfillmentMessages)
      //console.log(request.body)
      //console.log(request.body.queryResult)

      let responseJson={
        "fulfillmentMessages": [
          {
            "text": {
              "text": [
                "Você escolheu Famosos"
              ]
            },
            "platform": "FACEBOOK"
          },
          {
            "payload": {
              "facebook": {
                "attachment": {
                  "type": "template",
                  "payload": {
                    "template_type": "generic",
                    "elements": [
                      {
                        "title": "Welcome LUAN SILVA!",
                        "subtitle": "We have the right hat for everyone.",
                        "image_url": "https://petersfancybrownhats.com/company_image.png",
                        "buttons": [
                          {
                            "title": "View Website",
                            "type": "web_url",
                            "url": "https://petersfancybrownhats.com"
                          },
                          {
                            "type": "postback",
                            "payload": "DEVELOPER_DEFINED_PAYLOAD",
                            "title": "Start Chatting"
                          }
                        ]
                      },
                      {
                        "buttons": [
                          {
                            "url": "https://petersfancybrownhats.com",
                            "title": "View Website",
                            "type": "web_url"
                          },
                          {
                            "title": "Start Chatting",
                            "type": "postback",
                            "payload": "DEVELOPER_DEFINED_PAYLOAD"
                          }
                        ],
                        "image_url": "https://petersfancybrownhats.com/company_image.png",
                        "title": "Welcome SILVA!",
                        "subtitle": "We have the right hat for everyone."
                      }
                    ]
                  }
                }
              }
            },
            "platform": "FACEBOOK"
          }
        ]
      }
      response.json(responseJson)
      /*
      response.json({
        "fulfillmentMessages": [
          {
            "text": {
              "text": [
                "Você escolheu Famosos"
              ]
            },
            "platform": "FACEBOOK"
          },
          {
            "payload": {
              "facebook": {
                "attachment": {
                  "type": "template",
                  "payload": {
                    "template_type": "generic",
                    "elements": [
                      {
                        "title": "Welcome LUAN SILVA!",
                        "subtitle": "We have the right hat for everyone.",
                        "image_url": "https://petersfancybrownhats.com/company_image.png",
                        "buttons": [
                          {
                            "title": "View Website",
                            "type": "web_url",
                            "url": "https://petersfancybrownhats.com"
                          },
                          {
                            "type": "postback",
                            "payload": "DEVELOPER_DEFINED_PAYLOAD",
                            "title": "Start Chatting"
                          }
                        ]
                      },
                      {
                        "buttons": [
                          {
                            "url": "https://petersfancybrownhats.com",
                            "title": "View Website",
                            "type": "web_url"
                          },
                          {
                            "title": "Start Chatting",
                            "type": "postback",
                            "payload": "DEVELOPER_DEFINED_PAYLOAD"
                          }
                        ],
                        "image_url": "https://petersfancybrownhats.com/company_image.png",
                        "title": "Welcome SILVA!",
                        "subtitle": "We have the right hat for everyone."
                      }
                    ]
                  }
                }
              }
            },
            "platform": "FACEBOOK"
          }
        ]
      });*/
    }



  }
}