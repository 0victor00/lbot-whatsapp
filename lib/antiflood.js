
const db = require('../database/database')
const {msgs_texto} = require("../lib/msgs")
const {preencherTexto} = require("../lib/util")

module.exports = {
    antiFlood : async (client, message) => {
        const { id, from, sender, isGroupMsg, chat} = message
        const botNumber = await client.getHostNumber()
        const groupId = isGroupMsg ? chat.groupMetadata.id : ''
        const groupAdmins = isGroupMsg ? await client.getGroupAdmins(groupId) : ''
        const isBotGroupAdmins = isGroupMsg ? groupAdmins.includes(botNumber + '@c.us') : false
        
        if(isGroupMsg){
            const afl_status = await db.obterGrupo(groupId)
            if(afl_status.antiflood.status){
                if (!isBotGroupAdmins) return db.alterarAntiFlood(groupId,false)
                let flood = await db.addMsgFlood(groupId,sender.id)
                if(flood) {
                    if(!groupAdmins.includes(sender.id)) {
                        client.removeParticipant(groupId, sender.id).then(()=>{
                            client.sendTextWithMentions(from, preencherTexto(msgs_texto.grupo.antiflood.ban_resposta, sender.id.replace(/@c.us/g, '')))
                        })
                    }
                } 
            }
        }
    }
} 
