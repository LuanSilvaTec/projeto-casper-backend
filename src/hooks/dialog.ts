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
      }
        */
      
      /*Sem parâmetro de payload */
      //console.log(request.body.queryResult.fulfillmentMessages.push(responseJson))
      //console.log(request.body.queryResult.fulfillmentMessages)
      //console.log(request.body)
      //console.log(request.body.queryResult)



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
            "card": {
              "title": "Bem vindo ao nosso processo seletivo LUAN SILVA",
              "subtitle": "Bem vindo ao nosso processo seletivo",
              "imageUri": "https://firebasestorage.googleapis.com/v0/b/universidade-3d7f8.appspot.com/o/processo%2Fprocesso-seletivo.png?alt=media&token=d5a89cec-1c07-4dad-9b44-7aaf098128bd",
              "buttons": [
                {
                  "text": "Abrir",
                  "postback": "https://www.twitch.tv/luansilva_7"
                }
              ]
            },
            "platform": "FACEBOOK"
          },
          {
            "card": {
              "title": "Bem vindo ao nosso processo seletivo LUAN SILVA",
              "subtitle": "Bem vindo ao nosso processo seletivo",
              "imageUri": "https://firebasestorage.googleapis.com/v0/b/universidade-3d7f8.appspot.com/o/processo%2Fprocesso-seletivo.png?alt=media&token=d5a89cec-1c07-4dad-9b44-7aaf098128bd",
              "buttons": [
                {
                  "text": "Abrir",
                  "postback": "https://www.twitch.tv/luansilva_7"
                }
              ]
            },
            "platform": "FACEBOOK"
          }
        ]
      });
      //console.log(request.body.queryResult.fulfillmentMessages[1].payload.facebook.attachment.payload.elements)
    }
  }
}