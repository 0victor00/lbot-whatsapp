
//REQUERINDO MODULOS
require('dotenv').config()
const fs = require('fs-extra')
const moment = require('moment-timezone')
const color = require('./lib/color')
const db = require('./database/database')
moment.tz.setDefault('America/Sao_Paulo')
const {botInfoUpdate} = require("./lib/bot")

//COMANDOS
const lista_comandos = JSON.parse(fs.readFileSync('./comandos/comandos.json'))
const admin_grupo = require('./comandos/admin_grupo')
const utilidades = require('./comandos/utilidades')
const diversao = require('./comandos/diversao')
const dono_bot = require('./comandos/dono_bot')


module.exports = msgHandler = async (client, message) => {
    try {
        const {t, sender, isGroupMsg, chat, type, caption,id, from} = message
        let { body } = message
        const {formattedTitle } = chat
        let { pushname, verifiedName } = sender
        pushname = pushname || verifiedName
        const commands = caption || body || ''
        const command = commands.toLowerCase().split(' ')[0] || ''
        const ownerNumber = process.env.NUMERO_DONO.split(',') // Número do administrador do bot
        const groupId = isGroupMsg ? chat.groupMetadata.id : ''
        const groupAdmins = isGroupMsg ? await client.getGroupAdmins(groupId) : ''
        const isGroupAdmins = isGroupMsg ? groupAdmins.includes(sender.id) : false
        const g_info = isGroupMsg ? await db.obterGrupo(groupId) : ''
        const isOwner = ownerNumber.includes(sender.id.replace(/@c.us/g, ''))

        const msgs = (message) => {
            if (command.startsWith('!')) {
                if (message.length >= 10){
                    return `${message.substr(0, 15)}`
                }else{
                    return `${message}`
                }
            }
        }

        const time = moment(t * 1000).format('DD/MM HH:mm:ss')
        const blockNumber = await client.getBlockedIds()
        const isBlocked = blockNumber.includes(sender.id)
        if (!isGroupMsg && command.startsWith('!')) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(msgs(command)), 'from', color(pushname))
        if (isGroupMsg && command.startsWith('!')) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(msgs(command)), 'from', color(pushname), 'in', color(formattedTitle))
        if (isBlocked) return
        
        //SE O CONTADOR TIVER ATIVADO E FOR UMA MENSAGEM DE GRUPO, ADICIONA A CONTAGEM
        if(isGroupMsg && g_info.contador.status)db.addContagem(groupId,sender.id,type)

        
        //SE FOR ALGUM COMANDO EXISTENTE
        if(lista_comandos.utilidades.includes(command) || lista_comandos.admin_grupo.includes(command) || lista_comandos.diversao.includes(command) ||lista_comandos.dono_bot.includes(command)){
           
            let registrado = await db.verificarRegistro(sender.id)

            //SE O USUARIO NÃO FOR REGISTRADO, FAÇA O REGISTRO
            if(!registrado) {
                if(ownerNumber.includes(sender.id.replace("@c.us", ""))){
                    await db.registrarDono(sender.id, pushname)
                } else {
                    await db.registrarUsuarioComum(sender.id, pushname)
                }
            }

            //ATUALIZE NOME DO USUÁRIO 
            await db.atualizarNome(sender.id, pushname)

            //SE FOR MENSAGEM DE GRUPO , COMANDO ESTIVER BLOQUEADO E O USUARIO NAO FOR ADMINISTRADOR DO GRUPO
            if(isGroupMsg && g_info.block_cmds.includes(command) && !isGroupAdmins) return client.reply(from,`[❗] O comando *${command}* está temporariamente bloqueado neste grupo pelo administrador.`,id)

            //SE O COMANDO NÃO ESTIVER NA LISTA DE EXCEÇÔES
            if(!lista_comandos.excecoes_contagem.includes(command)){
                let ultrapassou = await db.ultrapassouLimite(sender.id)
                if(!ultrapassou){ //SE NÃO ULTRAPASSAR LIMITE DIARIO
                    await db.addContagemDiaria(sender.id) // ADICIONA CONTAGEM
                } else { //SE ULTRAPASSAR
                    duser  = await db.obterUsuario(sender.id)
                    return client.reply(from, 
                        (pushname != undefined) ? `[❗]  ${pushname} - você ultrapassou seu limite diário de ${duser.max_comandos_dia} comandos por dia.`
                        : `[❗]  Você ultrapassou seu limite diário de ${duser.max_comandos_dia} comandos por dia.`
                        ,id) 
                }
            } else { //SE ESTIVER NA LISTA DE EXCEÇÕES
                await db.addContagemTotal(sender.id)
            }

            //ADICIONA A CONTAGEM DE COMANDOS EXECUTADOS PELO BOT
            await botInfoUpdate()
        }

        //APÓS TODAS AS VERIFICAÇÕES SOLICITE OS COMANDOS
        if(lista_comandos.utilidades.includes(command)){
            await utilidades(client,message)
        } else if (lista_comandos.admin_grupo.includes(command)){
            await admin_grupo(client,message)
        } else if(lista_comandos.diversao.includes(command)){
            await diversao(client,message)
        } else if(lista_comandos.dono_bot.includes(command)){
            await dono_bot(client,message)
        } else {
            if(!isGroupMsg) return client.reply(from, "[❗] Parece que você não digitou corretamente o comando ou não sabe como usá-los, digite o comando *!ajuda* para mais informações.",id)
        }

    } catch (err) {
        console.log(color('[ERRO]', 'red'), err)
        //client.kill().then(a => console.log(a))
    }
}
