const fs = require('fs-extra')
const path = require('path')
const emoji = require('emoji-regex')
const {msgs_texto} = require("./msgs")
const guias = require("./guias")
const color = require('./color')
const prompt = require("prompt")


const emojiStrip = (string) => {
    return string.replace(emoji, '')
}

const erroComandoMsg = (comando) =>{
  return preencherTexto(msgs_texto.geral.cmd_erro, comando, comando)
}

const guiaComandoMsg = (tipo,comando)=>{
   comando = comando.replace("!", "")
   return guias[tipo][comando]
}

const preencherTexto = (texto, ...params)=>{
   for(let i = 0; i < params.length; i++){
      texto = texto.replace(`{p${i+1}}`, params[i])
   }
   return texto
}

const primeiraLetraMaiuscula = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const criarArquivosNecessarios = async ()=>{
    try {
      if(!fs.existsSync(path.resolve("database/json/bot.json")) || !fs.existsSync(path.resolve('.env'))){
        //CRIA O ARQUIVO COM AS INFORMAÇÕES INICIAIS DO BOT
        if(!fs.existsSync(path.resolve("database/json/bot.json"))){
          const bot = {
              nome:"LBOT",
              criador:"Leal",
              criado_em:"21/12/2020",
              iniciado: "",
              cmds_executados:0,
              bloqueio_cmds:[],
              limite_diario:{
                status: false,
                expiracao: 0,
                qtd: null
              },
              limitarmensagens:{
                status:false,
                max: 10,
                intervalo: 10,
                msgs:[]
              },
              limitecomandos:{
                status: false,
                cmds_minuto_max: 5,
                tempo_bloqueio: 60,
                usuarios: [],
                usuarios_limitados: []
              }
          }
          await fs.writeFile(path.resolve("database/json/bot.json"), JSON.stringify(bot))
        }

      //CRIA O ARQUIVO .ENV
      if(!fs.existsSync(path.resolve('.env'))) {
        let schema = {
           properties: {
              numero_dono:{
                description: color("Digite seu número de WhatsApp com o código do país incluído - ex: 55219xxxxxxxx.(O SEU NÚMERO E NÃO O DO BOT) "),
                required: true
              },
           }
        }
        const {numero_dono} = await prompt.get(schema)
        const env = "# LEMBRE-SE SEU NÚMERO DE WHATSAPP E NÃO O DO BOT. (COM CÓDIGO DO PAÍS INCLUÍDO)\n"+
        "NUMERO_DONO="+numero_dono+"\n"+
        "# REMOVEBG - Coloque abaixo sua chave API do site remove.bg (REMOVER FUNDO DE IMAGENS)\n"+
        "API_REMOVE_BG=??????\n"+
        "# NEWSAPI- Coloque abaixo sua chave API do site newsapi.org (NOTICIAIS ATUAIS)\n"+
        "API_NEWS_ORG=??????\n"+
        "# RAPIDAPI - Coloque sua chave API do site rapidapi.com (PESQUISA IMAGENS/WEB/ETC)\n"+
        "API_RAPIDAPI=??????\n"+
        "# TWITTER - Coloque abaixo suas chaves do TWITTER (DOWNLOAD TWITTER)\n"+
        "twitter_consumer_key=myuYcxAkQMBnyXqjiTi1hdYfT\n"+
        "twitter_consumer_secret=o66oWiKugfxB9p1Qekdxi93ES4QOwOiSKeCQjMxQ1uUb5WXDD3\n"+
        "twitter_access_token=1120302751416819717-fpcidYCFgN9hUS17JxbhsLhilzeg6I\n"+
        "twitter_access_token_secret=wZSRdEpmSeopzuiq0sk8AXoeDCZl5QUOovCfT0KYHrUO3\n"+
        "# ACRCLOUD - Coloque abaixo suas chaves do ACRCloud (Reconhecimento de Músicas)\n"+
        "acr_host=??????\n"+
        "acr_access_key=??????\n"+
        "acr_access_secret=??????\n"
        await fs.writeFile(path.resolve('.env'), env , 'utf8')
      }
      return true
    } else {
      return false
    }
  } catch(err){
      throw new Error(err)
  }
}

const verificarConfigEnv = ()=>{
    let resposta = {
      numero_dono : {
         resposta: (process.env.NUMERO_DONO == "55219xxxxxxxx") ? "O número do DONO ainda não foi configurado" : "✓ Número do DONO configurado.",
         cor_resposta: (process.env.NUMERO_DONO == "55219xxxxxxxx") ? "red" : false
      },
      removebg : {
        resposta: (process.env.API_REMOVE_BG == "??????") ? "A API do REMOVEBG ainda não foi configurada" : "✓ API REMOVEBG Configurada.",
        cor_resposta: (process.env.API_REMOVE_BG == "??????") ? "red" : false
      },
      newsapi : {
        resposta: (process.env.API_NEWS_ORG == "??????") ? "A API do NEWSAPI ainda não foi configurada" : "✓ API NEWSAPI Configurada.",
        cor_resposta: (process.env.API_NEWS_ORG == "??????") ? "red" : false
      },
      rapidapi : {
        resposta: (process.env.API_RAPIDAPI == "??????") ? "A API do RAPIDAPI ainda não foi configurada" : "✓ API RAPIDAPI Configurada.",
        cor_resposta: (process.env.API_RAPIDAPI == "??????") ? "red" : false
      },
      twitter :{
        resposta: (process.env.twitter_consumer_key == "??????" || process.env.twitter_consumer_secret == "??????" || process.env.twitter_access_token == "??????" || process.env.twitter_access_token_secret == "??????" )
         ? "A API do Twitter ainda não foi configurada corretamente" : "✓ API Twitter Configurada.",
        cor_resposta: (process.env.twitter_consumer_key == "??????" || process.env.twitter_consumer_secret == "??????" || process.env.twitter_access_token == "??????" || process.env.twitter_access_token_secret == "??????" )
        ? "red" : false
      },
      acrcloud :{
        resposta: (process.env.acr_host == "??????" || process.env.acr_access_key== "??????" || process.env.acr_access_secret == "??????")
         ? "A API do ACRCloud ainda não foi configurada corretamente" : "✓ API ACRCloud Configurada.",
        cor_resposta: (process.env.acr_host == "??????" || process.env.acr_access_key== "??????" || process.env.acr_access_secret == "??????")
        ? "red" : false
      }
    }

    console.log("[ENV]", color(resposta.numero_dono.resposta, resposta.numero_dono.cor_resposta))
    console.log("[ENV]", color(resposta.removebg.resposta, resposta.removebg.cor_resposta))
    console.log("[ENV]", color(resposta.newsapi.resposta, resposta.newsapi.cor_resposta))
    console.log("[ENV]", color(resposta.rapidapi.resposta, resposta.rapidapi.cor_resposta))
    console.log("[ENV]", color(resposta.twitter.resposta, resposta.twitter.cor_resposta))
    console.log("[ENV]", color(resposta.acrcloud.resposta, resposta.acrcloud.cor_resposta))
}

const segParaHora = (time, with_seg = true)=>{
  var hours = Math.floor( time / 3600 )
    var minutes = Math.floor( (time % 3600) / 60 )
    var seconds = time % 60
    seconds = parseFloat(seconds).toFixed(2)
    minutes = minutes < 10 ? '0' + minutes : minutes;     
    seconds = seconds < 10 ? '0' + seconds : seconds
    hours = hours < 10 ? '0' + hours : hours
    if(with_seg) return  hours + ":" + minutes + ":" + seconds;
    return  hours + ":" + minutes;
}
    
const sleep = async (ms) => {
    return new Promise((resolve) => {
      setTimeout(resolve, ms)
    });
}

const consoleErro = (msg, tipo_erro = "API")=>{
   console.error(color(`[${tipo_erro}]`,"red"), msg)
}

exports.criarArquivosNecessarios = criarArquivosNecessarios
exports.emojiStrip = emojiStrip
exports.sleep = sleep
exports.preencherTexto = preencherTexto
exports.segParaHora = segParaHora
exports.primeiraLetraMaiuscula = primeiraLetraMaiuscula
exports.verificarConfigEnv = verificarConfigEnv
exports.consoleErro = consoleErro
exports.erroComandoMsg = erroComandoMsg
exports.guiaComandoMsg = guiaComandoMsg
