//REQUERINDO MODULOS
const msgs_texto = require('../lib/msgs')
const {criarTexto, primeiraLetraMaiuscula, erroComandoMsg, removerNegritoComando} = require("../lib/util")
const path = require("path")
const api = require('../lib/api')

module.exports = diversao = async(client,message) => {
    try {
        const {id, from, sender, isGroupMsg, chat, caption, quotedMsg, quotedMsgObj,mentionedJidList} = message
        let { body } = message
        const commands = caption || body || ''
        var command = commands.toLowerCase().split(' ')[0] || ''
        command = removerNegritoComando(command)
        const args =  commands.split(' ')
        const ownerNumber = process.env.NUMERO_DONO.trim() // Número do administrador do bot
        const botNumber = await client.getHostNumber()
        const groupId = isGroupMsg ? chat.groupMetadata.id : ''
        const groupAdmins = isGroupMsg ? await client.getGroupAdmins(groupId) : ''
        const isGroupAdmins = isGroupMsg ? groupAdmins.includes(sender.id) : false
        const isBotGroupAdmins = isGroupMsg ? groupAdmins.includes(botNumber + '@c.us') : false
        const groupOwner = isGroupMsg ? chat.groupMetadata.owner : ''

        switch(command){
            case '!detector' :
                if (!isGroupMsg) return client.reply(from, msgs_texto.permissao.grupo, id)
                if(!quotedMsg) return client.reply(from, erroComandoMsg(command) , id)
                const imgs_detector = ['verdade.png','vaipra.png','mentiroso.png','meengana.png','kao.png','incerteza.png','estresse.png','conversapraboi.png']
                let aleatorio_detector = Math.floor(Math.random() * imgs_detector.length)
                client.sendFile(from, './media/img/commands/detector/calibrando.png', 'detector.png', msgs_texto.diversao.detector.espera, id).then(()=>{
                    client.sendFile(from, `./media/img/commands/detector/${imgs_detector[aleatorio_detector]}`, 'detector.png', "", quotedMsgObj.id)
                })
                break
            
            case '!viadometro' :
                if (!isGroupMsg) return client.reply(from, msgs_texto.permissao.grupo, id)
                if(!quotedMsg && mentionedJidList.length == 0) return client.reply(from, erroComandoMsg(command), id)
                if(mentionedJidList.length > 1) client.reply(from, msgs_texto.diversao.viadometro.apenas_um, id)
                const viadometro_resps = msgs_texto.diversao.viadometro.respostas
                let aleatorio = Math.floor(Math.random() * viadometro_resps.length),id_resposta_viadometro = null,alvo_viadometro = null
                if(mentionedJidList.length == 1){
                    id_resposta_viadometro = id, alvo_viadometro = mentionedJidList[0].replace(/@c.us/g, '')
                } else {
                    id_resposta_viadometro = quotedMsgObj.id, alvo_viadometro = quotedMsgObj.author.replace(/@c.us/g, '')
                }
                if(ownerNumber == alvo_viadometro) aleatorio = 0
                let viadometro_resposta = criarTexto(msgs_texto.diversao.viadometro.resposta,viadometro_resps[aleatorio])
                client.reply(from,viadometro_resposta, id_resposta_viadometro)
                break
            
            case '!bafometro' :
                if (!isGroupMsg) return client.reply(from, msgs_texto.permissao.grupo, id)
                if(!quotedMsg && mentionedJidList.length == 0) return client.reply(from, erroComandoMsg(command), id)
                if (mentionedJidList.length > 1) return client.reply(from, msgs_texto.diversao.bafometro.apenas_um, id)
                const bafometro_resps = msgs_texto.diversao.bafometro.respostas
                let bafometro_aleatorio = Math.floor(Math.random() * bafometro_resps.length), id_resposta_bafometro = null, alvo_bafometro = null
                if(mentionedJidList.length == 1){
                    id_resposta_bafometro = id, alvo_bafometro = mentionedJidList[0].replace(/@c.us/g, '')
                } else {
                    id_resposta_bafometro = quotedMsgObj.id, alvo_bafometro = quotedMsgObj.author.replace(/@c.us/g, '')
                }
                if(ownerNumber == alvo_bafometro) bafometro_aleatorio = 0
                let bafometro_resposta = criarTexto(msgs_texto.diversao.bafometro.resposta,bafometro_resps[bafometro_aleatorio])
                client.reply(from,bafometro_resposta, id_resposta_bafometro)
                break

            case "!caracoroa":
                let lados = ["cara","coroa"], lado_aleatorio = Math.floor(Math.random() * lados.length)
                client.reply(from,msgs_texto.diversao.caracoroa.espera,id).then(()=>{
                    let caracoroa_resposta = criarTexto(msgs_texto.diversao.caracoroa.resposta, primeiraLetraMaiuscula(lados[lado_aleatorio]))
                    client.sendFile(from, path.resolve(`media/img/commands/caracoroa/${lados[lado_aleatorio]}.png`), `${lados[lado_aleatorio]}.png`, caracoroa_resposta, id)
                })
                break

            case "!ppt":
                let ppt = ["pedra","papel","tesoura"], ppt_aleatorio = Math.floor(Math.random() * ppt.length)
                if(args.length === 1) return client.reply(from, erroComandoMsg(command), id)
                if(!ppt.includes(args[1].toLowerCase())) return client.reply(from, msgs_texto.diversao.ppt.opcao_erro, id)
                let escolha_bot = ppt[ppt_aleatorio], icone_escolha_bot = null, escolha_usuario = args[1].toLowerCase(), icone_escolha_usuario = null, vitoria_usuario = null

                if(escolha_bot == "pedra"){
                    icone_escolha_bot = "✊"
                    if(escolha_usuario == "pedra") vitoria_usuario = null, icone_escolha_usuario = "✊"
                    if(escolha_usuario == "tesoura") vitoria_usuario = false, icone_escolha_usuario = "✌️"
                    if(escolha_usuario == "papel") vitoria_usuario = true, icone_escolha_usuario = "✋"
                } else if(escolha_bot == "papel"){
                    icone_escolha_bot = "✋"
                    if(escolha_usuario == "pedra") vitoria_usuario = false, icone_escolha_usuario = "✊"
                    if(escolha_usuario == "tesoura") vitoria_usuario = true, icone_escolha_usuario = "✌️"
                    if(escolha_usuario == "papel") vitoria_usuario = null, icone_escolha_usuario = "✋"
                } else  {
                    icone_escolha_bot = "✌️"
                    if(escolha_usuario == "pedra") vitoria_usuario = true, icone_escolha_usuario = "✊"
                    if(escolha_usuario == "tesoura") vitoria_usuario = null, icone_escolha_usuario = "✌️"
                    if(escolha_usuario == "papel") vitoria_usuario = false, icone_escolha_usuario = "✋"
                }

                if(vitoria_usuario == true) {
                    client.reply(from, criarTexto(msgs_texto.diversao.ppt.resposta.vitoria, icone_escolha_usuario, icone_escolha_bot), id)
                } else if(vitoria_usuario == false){
                    client.reply(from, criarTexto(msgs_texto.diversao.ppt.resposta.derrota, icone_escolha_usuario, icone_escolha_bot), id)
                } else {
                    client.reply(from, criarTexto(msgs_texto.diversao.ppt.resposta.empate, icone_escolha_usuario, icone_escolha_bot), id)
                }

                break

            case "!massacote":
            case '!mascote':
                //const url_mascote_img = "https://i.imgur.com/mVwa7q4.png"
                const url_mascote_img = "https://i.imgur.com/SbKeovm.png"
                client.sendFileFromUrl(from, url_mascote_img, 'mascote.jpeg', 'Whatsapp Jr.', id)
                break 

            case '!malacos':
                const url_malacos_img = "https://i.imgur.com/7bcn2TK.jpg"
                client.sendFileFromUrl(from, url_malacos_img, 'malacos.jpeg', 'Somos o problema', id)
                break

            case '!roletarussa':
                if (!isGroupMsg) return client.reply(from, msgs_texto.permissao.grupo, id)
                if (!isGroupAdmins) return client.reply(from, msgs_texto.permissao.apenas_admin , id)
                if (!isBotGroupAdmins) return client.reply(from,msgs_texto.permissao.bot_admin, id)
                let membros_id = await client.getGroupMembersId(groupId)
                membros_id.splice(membros_id.indexOf(groupOwner),1)
                membros_id.splice(membros_id.indexOf(botNumber+'@c.us'),1)
                let membro_id_index = Math.floor(Math.random() * membros_id.length)
                let roleta_resposta = criarTexto(msgs_texto.diversao.roletarussa.resposta,membros_id[membro_id_index].replace(/@c.us/g, ''))
                client.reply(from, msgs_texto.diversao.roletarussa.espera , id).then(()=>{
                    client.sendTextWithMentions(from, roleta_resposta).then(()=>{
                        client.removeParticipant(groupId, membros_id[membro_id_index])
                    })
                })
                break
            
            case '!casal':
                if (!isGroupMsg) return client.reply(from, msgs_texto.permissao.grupo, id)
                let casal_membros_id = await client.getGroupMembersId(groupId)
                const p1_index = Math.floor(Math.random() * casal_membros_id.length)
                const pessoa1 = casal_membros_id[p1_index]
                casal_membros_id.splice(p1_index,1)
                const p2_index = Math.floor(Math.random() * casal_membros_id.length)
                const pessoa2 = casal_membros_id[p2_index]
                let casal_resposta = criarTexto(msgs_texto.diversao.casal.resposta, pessoa1.replace(/@c.us/g, ''), pessoa2.replace(/@c.us/g, ''))
                client.sendTextWithMentions(from, casal_resposta)
                break

            case '!gadometro':
                if (!isGroupMsg) return client.reply(from, msgs_texto.permissao.grupo, id)
                if(!quotedMsg && mentionedJidList.length === 0) return client.reply(from, erroComandoMsg(command) , id)
                if(mentionedJidList.length > 1) return client.reply(from, msgs_texto.diversao.gadometro.apenas_um , id)
                const gadometro_resps = msgs_texto.diversao.gadometro.respostas 
                let gado_aleatorio = Math.floor(Math.random() * gadometro_resps.length), id_resposta_gadometro = null, alvo_gadometro = null
                if (mentionedJidList.length == 1){
                    id_resposta_gadometro = id, alvo_gadometro = mentionedJidList[0].replace(/@c.us/g, '')
                }else{
                    id_resposta_gadometro = quotedMsgObj.id, alvo_gadometro = quotedMsgObj.author.replace(/@c.us/g, '')
                }
                if(ownerNumber == alvo_gadometro) gado_aleatorio = 0
                let gadometro_resposta = criarTexto(msgs_texto.diversao.gadometro.resposta, gadometro_resps[gado_aleatorio])
                client.reply(from,gadometro_resposta, id_resposta_gadometro)       
                break

            case '!top5':
                if (!isGroupMsg) return client.reply(from, msgs_texto.permissao.grupo, id)
                if(args.length === 1) return client.reply(from,erroComandoMsg(command), id)
                let tema_ranking = body.slice(6)
                let ranking_membros_id = await client.getGroupMembersId(groupId)
                if(ranking_membros_id.length < 5) return client.reply(from,msgs_texto.diversao.top5.erro_membros , id)
                let top5_resposta = criarTexto(msgs_texto.diversao.top5.resposta_titulo, tema_ranking)
                for (let i = 0 ; i < 5 ; i++){
                    let medalha = ""
                    switch(i+1){
                        case 1:
                            medalha = '🥇'
                        break
                        case 2:
                            medalha = '🥈'
                        break
                        case 3:
                            medalha = '🥉'
                        break
                        default:
                            medalha = ''
                    }
                    let top5_aleatorio = Math.floor(Math.random() * ranking_membros_id.length)
                    let m_atual = ranking_membros_id[top5_aleatorio]
                    top5_resposta += criarTexto(msgs_texto.diversao.top5.resposta_itens, medalha, i+1, m_atual.replace(/@c.us/g, ''))
                    ranking_membros_id.splice(ranking_membros_id.indexOf(m_atual),1)                
                }
                client.sendTextWithMentions(from, top5_resposta)
                break

            case '!par':
                if (!isGroupMsg) return client.reply(from, msgs_texto.permissao.grupo, id)
                if(mentionedJidList.length !== 2) return client.reply(from, erroComandoMsg(command) , id)
                const par_resps = msgs_texto.diversao.par.respostas
                let par_aleatorio = Math.floor(Math.random() * par_resps.length)
                let par_resposta = criarTexto(msgs_texto.diversao.par.resposta, mentionedJidList[0].replace(/@c.us/g, ''), mentionedJidList[1].replace(/@c.us/g, ''), par_resps[par_aleatorio])
                client.sendTextWithMentions(from, par_resposta)
                break

            case "!fch":
                try{
                    var respostaFrase = await api.obterCartasContraHu()
                    client.reply(from, respostaFrase, id)
                } catch(err){
                    client.reply(from, err.message, id)
                }
                break    
        }
    } catch(err){
        throw new Error(err)
    }
    
}