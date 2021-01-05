function help() {
    return `
┏ ❣ *🤖 LBOT v2.0* ❣
╿
┠❥ *!info* - Informações do bot
╿
┷┯ ☾ ⚒️ UTILITÁRIOS ☽
 ╽
 ┠❥ *!s* - Cria um sticker a partir de uma imagem
 ┠❥ *!sgif* - Transforme o video em gif ou use um trecho curto de video.
 ┠❥ *!sgif2* - Caso o !sgif não consiga converter seu video/gif (EM TESTES).
 ┠❥ *!ssf* - Tira o fundo de uma foto e cria um sticker.
 ┠❥ *!traduz* - Traduz um texto em outro idioma para português.
 ┠❥ *!voz [idioma] [mensagem]* - Transforma texto em audio, exemplo : *!voz pt olá*
 ┠❥ *!img [tema-imagem]* - Pega uma foto com o tema que você escolher
 ┠❥ *!google [pesquisa]* - Faz uma rápida pesquisa no google
 ┠❥ *!noticias* - Obtem noticias atuais
 ┠❥ *!calc [expressão-matemárica]* - Calcula alguma conta que queira fazer
 ┠❥ *!rastreio [código-rastreio]* - Rastreamento dos CORREIOS
 ╿
┯┷ ☾ 👨‍👩‍👧‍👦 COMANDOS DE GRUPO ☽
╽
┠❥ *!status* - Vê os recursos ligados/desligados
┠❥ *!regras* - Exibe a descrição do grupo com as regras
┠❥ *!add +55 (21) 9xxxx-xxxx*
┠❥ *!ban @marcarmembro*
┠❥ *!promover @marcarmembro*
┠❥ *!rebaixar @marcaradmin*
┠❥ *!mt* - Marca todos
┠❥ *!adms* - Lista todos administradores
┠❥ *!dono* - Mostra dono do grupo
┠❥ *!link* - Exibe o link do grupo
┠❥ *!rlink* - Redefine o link do grupo
┠❥ *!f [on/off]* - Fecha o grupo apenas para administradores
┠❥ *!alink [on/off]* - Bane quem posta link de grupos
┠❥ *!bv [on/off]* - Recurso de boas vindas
┠❥ *!afake [on/off]* - Números fakes são banidos ao entrarem no grupo
┠❥ *!aflood [on/off]* - Bane quem flooda o grupo digitando várias vezes.
┠❥ *!apg* (responda a msg do bot para apagar a msg)
┠❥ *!bantodos* - Bane todos os membros
╿
┷┯ ☾ 🎲 BRINCADEIRAS/OUTROS ☽  
 ╽
 ┠❥ *!mascote*
 ┠❥ *!roletarussa* - Bane um membro aleatório (Somente ADMIN's)
 ┠❥ *!viadometro* - Mede o nível de viadagem de alguma pessoa
 ┠❥ *!detector* - Detecta mentiras utilizando uma IA avançada
 ┠❥ *!casal* - Seleciona aleatoriamente um casal
 ┠❥ *!gadometro* - Mencione um membro ou responda ele para descobrir
 ┠❥ *!top5gados* - Ranking dos Top 5 mais gados do grupo
 ┠❥ *!par @pessoa1 @pessoa2* - Mede o nivel de compatibilidade entre 2 pessoas
 ╿
 ╰╼❥ LBOT v2.0 by *Leal*.`
}

function admin() {
    return `
┏ ❣ *🤖 LBOT v2.0* ❣
╿
┷┯ ☾ ⚙️ ADMINISTRAÇÃO DO BOT ☽
 ╽
 ┠❥ *!sair* - Sai do grupo
 ┠❥ *!sairgrupos* - Sai de todos os grupos
 ┠❥ *!entrargrupo [link-grupo]* 
 ┠❥ *!bc [mensagem]* - Faz um anúncio com uma mensagem para todos os CHATS
 ┠❥ *!bcgrupos [mensagem]* - Faz um anúncio com uma mensagem somente para os GRUPOS
 ┠❥ *!print* - Mostra tela inicial do bot
 ┠❥ *!limpartudo*  - Limpa todos os chats(Grupos e contatos)
 ┠❥ *!limpar*  - Limpa todos os chats de contatos
 ┠❥ *!listablock*  - Lista todos os usuários bloqueados
 ┠❥ *!bloquear @usuario*  - Bloqueia o usuário mencionado
 ┠❥ *!desbloquear @usuario*  - Desbloqueia o usuário mencionado
 ┠❥ *!estado online|offline|manutencao*  - Seleciona o estado atual do bot
 ╿
 ╰╼❥ LBOT v2.0 by *Leal*`
}

exports.help = help()
exports.admin = admin()
