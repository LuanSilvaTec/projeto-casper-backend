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

      
      let responseJson =[
        {
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
      ]
      console.log(request.body.queryResult.fulfillmentMessages[1].payload)
      //return(request.body.queryResult.fulfillmentMessages[1].payload.push(responseJson))
      //console.log(request.body.queryResult.fulfillmentMessages[1].payload.facebook.attachment.payload.elements)
    }
  }
}