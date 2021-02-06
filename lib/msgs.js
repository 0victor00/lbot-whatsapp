const msgs_texto = ()=>{
    return {
    geral: {
        erro: "[❗] Não entendi que merda você quis fazer",
        espera : "[AGUARDE] Em andamento ⏳ espere por favor.",
    },
    utilidades:{
        rastreio:{
            cmd_erro: '[❗] Enviar comando *!rastreio [código-rastreio] *\n\nExemplo *!rastreio 0000000000000*',
            codigo_invalido : '[❗] Código de rastreio deve ter 13 digitos!',
            nao_postado : '[❗] *Parece que este objeto ainda não foi postado*',
            erro_servidor : '[❗] *Houve um erro na API dos Correios*'
        },
        reportar:{
            cmd_erro: '[❗] Você deve digitar a mensagem após o comando *!reportar*',
            sucesso: `✅ Sua mensagem foi enviada ao dono do Bot.`
        },
        sticker:{
            cmd_erro : "[❗] Certifique-se que a midia é uma imagem e que está com a legenda *!s* ou responda uma imagem que ja foi enviada com *!s*\n\nObs: Este comando é apenas para *IMAGENS*.",
            video_longo : '[❗] O Whatsapp tem um limite de 1MB por sticker, dimunua seu video ou escolha algum outro',
            link_invalido : '[❗] O link que você enviou não é válido.',
            ssf_imagem: `[❗] Este comando é válido apenas para imagens.`,
            video_invalido : '[❗] Envie um video/gif com !sgif com no máx 10 segundos.',
            erro_remover: '[❗] Houve um erro ao remover fundo, verifique se a imagem é compatível.',
            sem_credito: '[❗] Créditos insuficientes para remover fundo da imagem, contate ao administrador.',
            autenticacao: '[❗] Chave API não está configurada corretamente no arquivo .env, contate ao administrador.'
        },
        tps:{
            cmd_erro : "[❗] Você não digitou após o comando *!tps* ou está usando o comando de forma incorreta.",
            erro_conversao: "[❗] Houve algum erro na conversao do *!tps*, verifique se não há emojis no seu texto.",
            texto_longo : "[❗] Texto é muito longo, no máximo 40 caracteres. ",
            espera: "⏳ Em andamento , estou transformando seu texto em Sticker."
        },
        simg:{
            cmd_erro: "[❗] Você deve responder a um sticker com *!simg*"
        },
        img : {
            tema_longo : '[❗] Tema da imagem é muito longo',
            tema_vazio : '[❗] Tu é idiota, cadê o tema da imagem?',
            qtd_imagem : '[❗] Essa quantidade de imagens não é válida (Min: 1 imagem / Máx: 5 imagens)',
            erro_imagem: '[❗] Não foi possível obter essa imagem.',
            nao_encontrado: '[❗] Não foi possível encontrar imagem com esse tema, tente novamente.',
            erro_api: "[❗] Houve um erro na API de pesquisa de imagens, verifique se você não excedeu o limite ou se sua chave está configurada."
        },
        anime:{
            cmd_erro: "[❗] Você deve postar uma imagem com *!anime* ou responder outra imagem com *!anime*",
            espera: "⏳ Estou processando a imagem e pesquisando o anime.",
            similaridade: "[❗] Nível de similaridade é muito baixo, certifique se enviar uma cena VÁLIDA de anime (Não funciona com imagens não oficiais, Wallpapers ou imagens recortadas e/ou baixa qualidade).",
            limite_solicitacao: "[❗] Muitas solicitações sendo feitas, tente novamente mais tarde.",
            sem_resultado: "[❗] Não foi possível achar resultados para esta imagem",
            erro_servidor: "[❗] Houve um erro no servidor de pesquisa de imagem.",
            erro_processamento: "[❗] Houve um erro no processamento da imagem"
        },
        animelanc:{
            erro_pesquisa: "[❗] Houve um erro na API de pesquisa de animes, tente novamente mais tarde."
        },
        voz : {
            cmd_erro: '[❗] Enviar comando *!voz [pt, en, jp] [texto]*\n\nExemplo *!voz pt olá* - Diz olá em português-brasileiro.',
            texto_vazio : '[❗] Tu é idiota, cadê o texto do comando?',
            texto_longo: '[❗] Texto muito longo!',
            nao_suportado: '[❗] Sem dados do idioma ou idioma não suportado! Atualmente suportamos :\n\n- 🇧🇷 Português (pt)\n- 🇺🇸 Inglês (en)\n- 🇯🇵 Japonês (jp)\n- 🇮🇹 Italiano (it)\n- 🇪🇸 Espanhol (es)'
        },
        traduz: {
            cmd_erro: '[❗] Para fazer a tradução você deve responder a algum texto com o comando *!traduz*',
            erro_servidor: '[❗] Houve um erro de respota do servidor de tradução.'
        },
        noticia:{
            erro_servidor: '[❗] Houve um erro na API de notícias, verifique se a chave API está configurada corretamente.',
        },
        ddd:{
            somente_br: "[❗] Esse comando só é aceito com números brasileiros.",
            cmd_erro: "[❗] Você deve responder alguém com *!ddd* ou colocar o ddd após o comando"
        },
        clima:{
            cmd_erro: "[❗] Você deve digitar cidade/bairro e estado completos.\n\nExemplo: *!clima Madureira Rio de Janeiro*",
            erro_resultado : "[❗] Local não encontrado ou houve um erro na API.\n\nDica: *Digite cidade e estado completos para maior chance de ser encontrado.*"
        },
        moeda:{
            cmd_erro: "[❗] Digite o tipo de moeda e quantidade para converter para Real Brasileiro.\n\nExemplo: *!moeda dolar 20* - Converte 20 dolares para real",
            nao_suportado: "[❗] Moeda não suportada, atualmente existe suporte para : dolar|iene|euro",
            valor_invalido: "[❗] O valor não é um número válido",
            valor_limite: "[❗] Quantidade muito alta, você provavelmente não tem todo esse dinheiro.",
            erro_servidor: "[❗] Houve um erro na API de conversão de moedas"
        },
        google: {
            cmd_erro: "[❗] Digite o que você quer pesquisar\n\nExemplo: *!google Batata* - Pesquisa batata no google",
            erro_servidor: "[❗] Houve um erro na API de pesquisa"
        },
        calc:{
            cmd_erro: "[❗] Você deve digitar o que deseja calcular após o comando *!calc*\n\nExemplo: *!calc 2+2* - Calcula 2+2",
            carac_invalidos: "[❗] Seu cálculo tem caracteres inválidos.",
            divisao_zero: "🧮 Para de ficar tentando dividir por 0 , seu mongol.",
            erro_calculo: "[❗] Houve um erro no cálculo"
        },
        play:{
            cmd_erro: "[❗] Você deve digitar *!play [musica]*",
            limite: "[❗] A música deve ter menos de *5 minutos*",
            nao_encontrado: "[❗] Video não encontrado, digite o nome do video com mais detalhes",
            erro_enviar: "[❗] Houve um erro ao enviar o áudio",
            erro_pesquisa: "[❗] Houve um erro na pesquisa da música",
            erro_download: "[❗] Houve um erro no download da música"
        },
        yt:{
            cmd_erro: "[❗] Você deve digitar *!yt [nome do video]*",
            nao_encontrado: "[❗] Video não encontrado, digite o nome do video com mais detalhes",
            limite: "[❗] O video deve ter menos de *5 minutos*",
            erro_link: "[❗] Houve um erro no servidor para obter link de download",
            erro_pesquisa: "[❗] Houve um erro no servidor de pesquisa de videos",

        }
    },
    grupo: {
        bemvindo:{
            cmd_erro: "[❗] Selecione *on* ou *off*",
            ja_ligado: "[❗] O recurso de boas-vindas já está ligado.",
            ja_desligado: "[❗] O recurso de boas-vindas já está desligado.",
            ligado: "✅ O recurso de boas vindas foi ativado com sucesso",
            desligado: "✅ O recurso de boas vindas foi desativado com sucesso"
        },
        antilink:{
            cmd_erro: "[❗] Selecione *on* ou *off*",
            ja_ligado: "[❗] O recurso de anti-link já está ligado.",
            ja_desligado: "[❗] O recurso de anti-link já está desligado.",
            ligado: "✅ O recurso de anti-link foi ativado com sucesso",
            desligado: "✅ O recurso de anti-link foi desativado com sucesso"
        },
        antifake:{
            cmd_erro: "[❗] Selecione *on* ou *off*",
            ja_ligado: "[❗] O recurso de anti-fake já está ligado.",
            ja_desligado: "[❗] O recurso de anti-fake já está desligado.",
            ligado: "✅ O recurso de anti-fake foi ativado com sucesso",
            desligado: "✅ O recurso de anti-fake foi desativado com sucesso"
        },
        antiflood:{
            cmd_erro: "[❗] Você deve seleciona *on* ou *off* ou especificar uma configuração válida:\n\nEx: !aflood on 5 10 - Maxímo de mensagens fica 5 mensagens a cada 10 segundos",
            ja_ligado: "[❗] O recurso de anti-flood já está ligado.",
            max: "[❗] Escolha um valor entre 5-20 mensagens para o anti-flood.",
            intervalo: "[❗] Escolha um valor entre 10-60 segundos para o intervalo do anti-flood.",
            ja_desligado: "[❗] O recurso de anti-flood já está desligado.",
            ligado: "✅ O recurso de anti-flood foi ativado com sucesso",
            desligado: "✅ O recurso de anti-flood foi desativado com sucesso"
        },
        add:{
            cmd_erro: "[❗] Digite o numero da pessoa que você quer adicionar *!add* 5521xxxxxxxxx",
            add_erro: "[❗] Não foi possível adicionar este membro."
        },
        banir:{
            cmd_erro: "[❗] Marque o membro que você quer kickar *!ban* @membro ou responda o membro que quer banir com *!ban*",
            banir_admin: "[❗] O bot não pode banir um administrador",
            banir_sucesso: "🤖✅ KKKKKKKKKKKKKK BANI UM TROUXA",
            banir_erro: "[❗] Não foi possível banir este membro, provavelmente ele já saiu do grupo."
        },
        banirtodos:{
            banir_sucesso: '🤖✅ Todos banidos com sucesso!'
        },
        promover:{
            cmd_erro: "[❗] Marque o membro que será promovido *!promover* @membro",
            limite_membro: "[❗] Apenas 1 pessoa por vez",
            admin: "[❗] Esta pessoa já é um administrador."
        },
        rebaixar:{
            cmd_erro: "[❗] Marque o admin que você quer rebaixar *!rebaixar* @admin",
            limite_membro: "[❗] Apenas 1 pessoa por vez",
            admin: "[❗] Esta pessoa não é um administrador."
        },
        voteban:{
            sem_votacao: "[❗] Não existe votação aberta neste grupo.",
            ja_votou: "[❗] Qual foi mané, tentando votar mais de uma vez?",
            erro_ban: "[❗] Houve um erro para expulsar esse membro. Provavelmente o otário saiu do grupo antes.",
            erro_botadmin : "[❗] Não foi possível banir, o bot não tem permissões administrativas. Votação encerrada!",
            ja_aberto: "[❗] Já existe uma votação em aberto neste grupo, veja em *!votacao*",
            membro_ja_aberto: "[❗] Uma votação para este membro já foi aberta.",
            erro_mencao: "[❗] Você deve mencionar 1 membro",
            erro_num_votos: "[❗] Quantidade de votos deve ser em número",
            limit_num_votos: "[❗] Número máximo de votos deve ser entre 3 e 30.",
            cmd_erro : "[❗] Você deve digitar : \n\nPara abrir votação : *!vb on @membro max-votos*\nPara fechar votação: *!vb off*",
            erro_dono: "[❗] Você não pode iniciar votação no dono do grupo ou no bot."
        },
        contador:{
            cmd_erro: "[❗] Você deve digitar *!contador on|off*",
            ja_ligado: "[❗] O recurso de contador já está *ligado*",
            ja_desligado: "[❗] O recurso de contador já está *desligado*",
            ligado: "✅ O recurso de contador foi ligado com sucesso",
            desligado: "✅ O recurso de contador foi desligado com sucesso"
        },
        alterarcont:{
            cmd_erro: "[❗] Você deve responder alguém com *!alterarcont [qtd]* ou marcar uma pessoa após o comando.",
            num_invalido: "[❗] Quantidade de mensagens é inválida.",
            erro_contador: "[❗] Este comando só funciona quando o contador está ativado.",
            fora_grupo: "[❗] Não é possível alterar a contagem de quem não está no grupo.",
            sucesso: "✅ A contagem do usuário foi definida com sucesso"
        },
        atividade:{
            cmd_erro: "[❗] Você deve responder alguém com *!atividade* ou marcar uma pessoa após o comando.",
            erro_contador: "[❗] Este comando só funciona quando o contador está ativado.",
            bot_erro: "[❗] Não é possível ver a atividade do bot.",
            fora_grupo: "[❗] Não é possível ver a atividade de quem não está no grupo.",
        },
        minativos:{
            cmd_erro: "[❗] Você deve digitar *!minativos 1-50*.",
            erro_qtd: "[❗] A quantidade mínima de mensagens não é um número válido.",
            limite_qtd: "[❗] A quantidade mínima de mensagens deve ser entre [1-50]",
            erro_contador: "[❗] Este comando só funciona quando o contador está ativado.",
            sem_inativo: "✅ Não existe membros inativos neste grupo."
        },
        binativos:{
            cmd_erro: "[❗] Você deve digitar *!binativos 1-50*.",
            erro_qtd: "[❗] A quantidade mínima de mensagens não é um número válido.",
            limite_qtd: "[❗] A quantidade mínima de mensagens deve ser entre 1 e 50",
            erro_contador: "[❗] Este comando só funciona quando o contador está ativado.",
            sem_inativo: "✅ Não existe membros inativos neste grupo."
        },
        topativos:{
            cmd_erro: "[❗] Você deve digitar *!topativos 1-50*.",
            erro_qtd: "[❗] A quantidade de pessoas não é um número válido.",
            limite_qtd: "[❗] A quantidade de pessoas deve ser entre 1 e 50",
            erro_contador: "[❗] Este comando só funciona quando o contador está ativado.",
        },
        enquete:{
            cmd_erro:"[❗] Você deve digitar :\n *!enquete pergunta,opcao1,opcao2,opcao3...* para abrir enquete\n*!enquete off* para encerrar enquete",
            ja_aberta: "[❗] Já existe uma enquete aberta, confira no *!verenquete*",
            min_opcao: "[❗] A enquete precisa de no mínimo 2 opçôes",
            aberta: "✅ A enquete foi aberta com sucesso, digite *!verenquete* para vê-la",
            ja_fechada: "[❗] Não existe enquete aberta no grupo para ser encerrada.",
            fechada: "✅ A enquete foi encerrada com sucesso, obtendo os resultados."
        },
        verenquete:{
            sem_enquete: "[❗]  Não existe enquete aberta no grupo para ser votada.",
        },
        votarenquete:{
            cmd_erro:"[❗] Você deve digitar : *!votarenquete numero-opcao*",
            sem_enquete: "[❗]  Não existe enquete aberta no grupo para ser votada.",
            opcao_erro: "[❗] A opção escolhida não é um número válido",
            ja_votou: "[❗] Você já votou seu filhote de chocadeira!",
            opcao_invalida: "[❗] A opção que você escolheu não existe",
            sucesso: "✅ Seu voto foi contabilizado com sucesso."
        },
        bcmd:{
            cmd_erro: "[❗] Você deve digitar *!bcmd* e os comandos separados por vírgula."
        },
        dcmd:{
            cmd_erro: " [❗] Você deve digitar *!dcmd* e os comandos separados por vírgula."
        },
        apagar:{
            cmd_erro: "[❗] Erro! Responda a mensagem do bot com  *!apg*",
            minha_msg: "[❗] Erro! O bot não pode apagar mensagem de outros membros."
        },
        fechar:{
            cmd_erro: "[❗] Erro! Digite com  *!f on/off*",
        },
        rlink:{
            erro: "[❗] Houve um erro na redefinição de link",
            sucesso : "✅ Link foi redefinido com sucesso"
        }
    },
    diversao: {
        viadometro: {
            respostas: [' 0%\n\n - ESSE É MACHO ',
           '██                 20% \n\n - HMMMMM ',
           '████             40%\n\n - JÁ MAMOU O PRIMO',
           '██████         60%\n\n - EITA MAMOU O BONDE',
           '████████     80%\n\n - JÁ SENTOU EM ALGUEM',
           '██████████ 100%\n\n - BIXONA ALERTA VERMELHO CUIDADO COM SEUS ORGÃOS SEXUAIS'],
            cmd_erro: "[❗] Erro! Você deve responder a alguém com  *!viadometro*",
            apenas_um: "[❗] Erro! Apenas um membro por vez deve ser mencionado."
        },
        gadometro:{
            respostas : [' 0%\n\n - ESSE NÃO É GADO ',
            '🐃 20% \n\n - GADO APRENDIZ, TÁ NO CAMINHO ',
            '🐃🐃 40%\n\n - GADO INTERMEDIÁRIO, JÁ INVADE PV DE UMAS E PENSA EM PAGAR PACK DE PEZINHO',
            '🐃🐃🐃 60%\n\n - CUIDADO! GADO EXPERIENTE, INVADE PV E FALA LINDA EM TODAS FOTOS',
            '🐃🐃🐃🐃 80%\n\n - ALERTA! GADO MASTER, SÓ APARECE COM MULHER ON',
            '🐃🐃🐃🐃🐃 100%\n\n - PERIGO! GADO MEGA BLASTER ULTRA PAGA BOLETO DE MULHER QUE TEM NAMORADO'],
            cmd_erro: "[❗] Você deve mencionar alguém com o !gadometro ou responder alguma mensagem."
        },
        bafometro:{
            respostas : [' 0%\n\n - ESTÁ SÓBRIO ',
            '🍺  20% \n\n - TOMOU UM GORÓZINHO ',
            '🍺🍺  40%\n\n - JÁ TÁ FICANDO MEIO CHAPADO E FALANDO BOSTA',
            '🍺🍺🍺  60%\n\n - TÁ MAMADO E COMEÇANDO A FAZER MERDA',
            '🍺🍺🍺🍺  80%\n\n - TÁ LOUCÃO NEM CONSEGUE DIFERENCIAR MULHER E HOMEM',
            '🍺🍺🍺🍺🍺  100%\n\n - ALERTA! ESTÁ FORA DE SI , BEIJANDO MENDIGO E CACHORRO DE RUA'],
            cmd_erro: "[❗] Você deve mencionar alguém com o !bafometro ou responder alguma mensagem.",
            apenas_um: "[❗] Erro! Apenas um membro por vez deve ser mencionado."
        },
        detector: {
            cmd_erro: "[❗] Erro! Você deve responder a alguém com  *!detector*",
            espera: "⏳ Calibrando a máquina da verdade"
        },
        roletarussa:{
            espera: "🎲 Sorteando uma vítima 🎲"
        },
        top5:{
            cmd_erro: "[❗] Você deve digitar !top5 [tema]"
        },
        par:{
            cmd_erro: "[❗] Você deve marcar 2 pessoas",
            respostas: [' *0%*\n - NÃO COMBINAM ',
            '❤️ *20%* \n - HMMM TALVEZ ',
            '❤️❤️ *40%*\n - PODE ROLAR ALGO SÉRIO', 
            '❤️❤️❤️ *60%*\n - UIA ESSES DOIS TEM FUTURO',
            '❤️❤️❤️❤️ *80%*\n - ESSES DOIS TEM QUÍMICA, TALVEZ UM CASAMENTO EM BREVE', 
            '❤️❤️❤️❤️❤️ *100%*\n - CASAL PERFEITO! PREPAREM-SE PARA VIVER ATÉ A VELHICE JUNTOS',
            ]
        }
    },
    admin: {
        entrar_grupo:{
            cmd_erro: "[❗] Inválido *!entrargrupo link-grupo*\n\nEx: *!entrargrupo* https://chat.whatsapp.com/H7CIdeyyb5UGLbYqxu18Fs",
            chave_invalida: "[❗] Sua chave é inválida, peça ao dono do BOT uma chave válida!",
            link_invalido: "[❗] Isso não é um link válido! 👊🤬",
            maximo_grupos: "[❗] O bot já está com o número máximo de grupos!",
            minimo_membros: "[❗] O grupo precisa de no mínimo 5 membros.",
            entrar_sucesso: "🤖✅ Entendido, entrarei em breve no grupo."
        },
        bloquear:{
            cmd_erro: "[❗] Marque o membro que será bloqueado*!bloquear* @membro ou responda ele com *!bloquear*",
            ja_bloqueado: "[❗] Este membro já está bloqueado",
        },
        desbloquear:{
            cmd_erro: "[❗] Marque o membro que será desbloqueado*!desbloquear* @membro ou responda ele com *!desbloquear*",
            ja_desbloqueado: "[❗] Este membro já está desbloqueado",
        },
        desligar:{
            sucesso: "🤖✅ Entendido, o BOT será desligado"
        },
        bc:{
            cmd_erro: "[❗] Erro! Você deve digitar *!bc [mensagem]* ",
            bc_sucesso: "🤖✅ Anúncio feito com sucesso."
        },
        mudarlimite: {
            cmd_erro: "[❗] Você deve digitar *!mudarlimite novo-limite*",
            invalido: "[❗] O número para definir o limite de comandos é inválido",
            erro_limite_diario: "[❗] Este comando só pode ser usado com o *!limitediario* ativado."
        },
        tipo: {
            cmd_erro: "[❗] Você deve responder algúem com *!cargo membro|admin* ou mencionar alguém após o comando",
            tipo_dono: "[❗] Não é possivel alterar cargo do dono",
            tipos_disponiveis: "[❗] Você deve escolher o tipo da conta entre 'comum' ou 'vip'",
            nao_registrado: "[❗] Este usuário ainda não está registrado"
        },
        limparvip:{
            sucesso: "✅Todos os VIP foram convertidos para COMUM"
        },
        limitediario:{
            cmd_erro: "[❗] Você deve inserir *!limitediario on|off qtd-comandos*",
            ja_ativado: "[❗] O limite diário de comandos já está ativado",
            qtd_invalida: "[❗] A quantidade de comandos por dia está inválida",
            ativado: "✅ O Limite diário de comandos foi ativado com sucesso",
            ja_desativado: "[❗] O limite diário de comandos já está desativado",
            desativado: "✅ O Limite diário de comandos foi desativado com sucesso",

        },
        limitecomandos:{
            cmd_erro: "[❗] Você deve inserir *!limitador on|off qtd-max-minuto tempo-bloqueio*",
            ja_ativado: "[❗] O limitador de comandos já está ativado",
            qtd_invalida: "[❗] A quantidade máxima de mensagens por minuto está inválida",
            tempo_invalido: "[❗] O tempo de bloqueio de mensagens está inválido",
            ativado: "✅ O Limitador de comandos por minuto foi ativado com sucesso",
            ja_desativado: "[❗] O limitador de comandos já está desativado",
            desativado: "✅ O Limitador de comandos por minuto foi desativado com sucesso",
        },
        limitarmsgs:{
            cmd_erro: "[❗] Você deve inserir *!limitarmsgs on|off qtd-mensagens intervalo-segundos*",
            ja_ativado: "[❗] O limitador de mensagens privadas já está ativado",
            qtd_invalida: "[❗] A quantidade máxima de mensagens privadas está inválida",
            tempo_invalido: "[❗] O intervalo de mensagens está inválido",
            ativado: "✅ O Limitador de mensagens privadas foi ativado com sucesso",
            ja_desativado: "[❗] O Limitador de mensagens privadas já está desativado",
            desativado: "✅ O Limitador de mensagens privadas foi desativado com sucesso",
        },
        r: {
            cmd_erro: "[❗] Você deve responder algúem com *!r* ou mencionar alguém após o comando",
            sucesso: "✅ Os comandos diários desse usuário foram resetados",
            nao_registrado: "[❗] Este usuário ainda não está registrado",
            erro_limite_diario: "[❗] Este comando só pode ser usado com o *!limitediario* ativado."
        },
        rtodos:{
            sucesso: "✅ Os comandos diários de todos os usuários foram resetados",
            erro_limite_diario: "[❗] Este comando só pode ser usado com o *!limitediario* ativado."
        },
        verdados:{
            cmd_erro: "[❗] Você deve responder algúem com *!verdados* ou mencionar alguém após o comando",
            nao_registrado: "[❗] Este usuário ainda não está registrado"
        },
        vervips:{
            sem_vips: "[❗] Não existe usuários VIP's no momento"
        },
        rconfig:{
            reset_sucesso: "🤖✅ As configurações dos grupos foram resetadas com sucesso"
        },
        bcgrupos:{
            cmd_erro: "[❗] Erro! Você deve digitar *!bcgrupos [mensagem]* ",
            bc_sucesso: "🤖✅ Anúncio feito com sucesso."
        },
        sair:{
            sair_sucesso: "🤖✅ FLW VLW.",
        },
        sairtodos:{
            sair_sucesso: "🤖✅ Saí de todos os grupos com sucesso."
        },
        limpar:{
            limpar_sucesso : "🤖✅ Todos os chats foram limpos.",
        },
        estado:{
            cmd_erro: "[❗] Digite o estado atual do bot com *!estado online|offline|manutencao*",
            sucesso: "🤖✅ Seu estado foi alterado com sucesso."
        },

    },
    permissao: {
        grupo: '[❗] Este comando só pode ser usado em grupos',
        bot_admin: '[❗] Permita que o BOT tenha permissões administrativas.',
        banir_admin : '[❗] O Bot não tem permissão para banir um administrador',
        apenas_admin : '[❗] Apenas administradores podem usar este comando.',
        apenas_dono_bot: '[❗] Apenas o dono do BOT pode usar este comando.',
        apenas_dono_grupo: '[❗] Apenas o dono do GRUPO pode usar este comando.',

    }}
}

exports.msgs_texto = msgs_texto
