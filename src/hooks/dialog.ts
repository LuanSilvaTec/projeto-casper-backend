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
      
      //request.body.queryResult.fulfillmentMessages[1].payload.facebook.attachment.payload.push(elements)

      /*
      let responseJson =
        {
          "payload":{
          "facebook": {
            "attachment":{
              "type":"template",
              "payload":{
                "template_type":"generic",
                "elements":[
                   {
                    "title":"Welcome!",
                    "image_url":"https://petersfancybrownhats.com/company_image.png",
                    "subtitle":"We have the right hat for everyone.",
                    "buttons":[
                      {
                        "type":"web_url",
                        "url":"https://petersfancybrownhats.com",
                        "title":"View Website"
                      },{
                        "type":"postback",
                        "title":"Start Chatting",
                        "payload":"DEVELOPER_DEFINED_PAYLOAD"
                      }              
                    ]      
                  },
                   {
                    "title":"Welcome!",
                    "image_url":"https://petersfancybrownhats.com/company_image.png",
                    "subtitle":"We have the right hat for everyone.",
                    "buttons":[
                      {
                        "type":"web_url",
                        "url":"https://petersfancybrownhats.com",
                        "title":"View Website"
                      },{
                        "type":"postback",
                        "title":"Start Chatting",
                        "payload":"DEVELOPER_DEFINED_PAYLOAD"
                      }              
                    ]      
                  }
                ]
              }
            }
          }
        }
      }*/
      let responseJson=[
        {
          "responseId": "b88fe05c-7af5-4ea4-b6e2-1ed2d1b8c718-0ff44451",
          "queryResult": {
            "queryText": "Famosos",
            "parameters": {
              "noticias": ""
            },
            "allRequiredParamsPresent": true,
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
                            "title": "Welcome!",
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
                            "title": "Welcome!",
                            "subtitle": "We have the right hat for everyone."
                          }
                        ]
                      }
                    }
                  }
                },
                "platform": "FACEBOOK"
              }
            ],
            "outputContexts": [
              {
                "name": "projects/casper-chatbot-sdrw/agent/sessions/bfb1f51d-1b1e-63ef-dd8c-2b685b814baa/contexts/noticias",
                "lifespanCount": 5,
                "parameters": {
                  "noticias": "",
                  "noticias.original": ""
                }
              }
            ],
            "intent": {
              "name": "projects/casper-chatbot-sdrw/agent/intents/9a0a923a-6e38-48d9-adac-f2c88ade4e11",
              "displayName": "noticias.famosos"
            },
            "intentDetectionConfidence": 1,
            "languageCode": "pt-br",
            "sentimentAnalysisResult": {
              "queryTextSentiment": {
                "score": 0.3,
                "magnitude": 0.3
              }
            }
          }
        }
      ]
        
      
      /*Sem parâmetro de payload */
      console.log(request.body.queryResult.fulfillmentMessages.push(responseJson))
      //console.log(request.body.queryResult.fulfillmentMessages)
      console.log(request.body)
      //console.log(request.body.queryResult)



      response.send(responseJson)
      //console.log(request.body.queryResult.fulfillmentMessages[1].payload.facebook.attachment.payload.elements)
    }
  }
}