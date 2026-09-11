// messages.js – corrected version (all ranges now match their messages)
const MESSAGES = {
    en: {
        // seconds
        '0-3': [
            "Wow, you really like the person that sent that message",
            "That was lightning fast! They must be very special",
            "You opened it in the blink of an eye! 💕",
            "Instant reaction! You're clearly excited",
            "Less than 3 seconds – you're eager, aren't you?",
            "You must have been waiting for this! ⏰"
        ],
        '4-10': [
            "Lightning fast! They must be very special",
            "Speedy! You didn't waste any time",
            "Quick reflexes! You're on top of it",
            "Under 10 seconds – that's dedication",
            "You're quick! They'll appreciate that"
        ],
        '11-30': [
            "Quick! You didn't let them wait",
            "Not bad at all! You're prompt",
            "Within half a minute – nice",
            "You're efficient! They'll be happy",
            "Speedy enough – you're reliable"
        ],
        // 31–60s – rewritten so nothing says "a minute" too early
        '31-60': [
            "Within a minute – nice reflexes",
            "Almost a minute – you're on the ball",
            "Less than a minute passed – nice",
            "You took a bit – just a little",
            "Nearly a minute – not too shabby"
        ],
        // minutes
        '61-180': [
            "A few minutes, still warm",
            "You waited a couple of minutes – still fresh",
            "Not long at all! They'll be pleased",
            "Under 3 minutes – you're doing great",
            "Minutes passed, but you're still quick"
        ],
        '181-600': [
            "Ok, that is a nice time",
            "A few minutes – that's reasonable",
            "You took a breather – all good",
            "Not too long, not too short – just right",
            "You've got patience, I like that"
        ],
        '601-1200': [
            "Ten to twenty minutes – a short break",
            "You took a small pause – still quick",
            "A bit of a wait – that's fine",
            "You had a short delay – no worries",
            "A few more minutes than average – all good"
        ],
        '1201-3600': [
            "Twenty to sixty minutes – a proper little wait",
            "Less than an hour – but a while",
            "You made them wait a bit – still counts",
            "Half an hour or so – no rush",
            "Almost an hour – hope it was worth it"
        ],
        // hours – 1–2h rewritten
        '3601-7200': [
            "An hour or two passed – still counts",
            "You took an hour or so – no rush",
            "One or two hours – you're busy",
            "A bit of time passed – you made it",
            "You had things to do – fair"
        ],
        '7201-21600': [
            "A few hours passed – you're busy",
            "You took a few hours – no rush",
            "Hours went by – still counts",
            "A few hours later – you made it",
            "You're taking your time – I respect that"
        ],
        // 6–12h rewritten – no more "half a day" at 6h
        '21601-43200': [
            "Several hours passed – still counts",
            "You took much of the day – patient",
            "A good chunk of the day went by",
            "Hours passed – you made it",
            "You're taking it slow – no rush"
        ],
        '43201-86400': [
            "Half a day or more – still counts",
            "You took most of the day – patient",
            "Hours went by – you made it",
            "You're taking your time – no rush",
            "A good chunk of the day passed"
        ],
        // days
        '86401-172800': [
            "A day passed – still counts",
            "You took a whole day – patient",
            "A day later – you're still here",
            "You made them wait a day",
            "One day down – still going"
        ],
        '172801-604800': [
            "A few days passed – you're patient",
            "You took your time – days went by",
            "Several days later – still counts",
            "You're not in a hurry – days passed",
            "A few days of waiting – nice"
        ],
        // MONTHS – full rework: each range now speaks about its actual span
        '604801-2678400': [      // 7–31 days
            "A few weeks passed – still counts",
            "More than a week, less than a month",
            "Weeks went by – you made it",
            "You took a few weeks – patient",
            "A few weeks later – still here"
        ],
        '2678401-5356800': [     // 31–62 days
            "About a month passed – still counts",
            "A month or two later – you're here",
            "You took a month or so",
            "A month down – still going",
            "One or two months passed – patient"
        ],
        '5356801-8035200': [     // 62–93 days
            "About two months passed – still counts",
            "Two or three months later – you're here",
            "You took a couple of months – patient",
            "Two months down – still going",
            "A few months passed – no rush"
        ],
        '8035201-10713600': [    // 93–124 days
            "About three months passed – still counts",
            "Three or four months later – you're here",
            "You took a few months – patient",
            "Three months down – still going",
            "A quarter of a year or so – impressive"
        ],
        '10713601-13392000': [   // 124–155 days
            "About four months passed – still counts",
            "Four or five months later – you're here",
            "You took several months – patient",
            "Four months down – still going",
            "A third of a year or so – impressive"
        ],
        '13392001-16070400': [   // 155–186 days
            "About five months passed – still counts",
            "Five or six months later – you're here",
            "You took half a year or so – patient",
            "Five months down – still going",
            "Almost half a year – impressive"
        ],
        '16070401-18748800': [   // 186–217 days
            "About six months passed – half a year",
            "Half a year or so – you're still here",
            "You took six months – patient",
            "Half a year down – still going",
            "Six months – impressive"
        ],
        '18748801-21427200': [   // 217–248 days
            "About seven months passed – still counts",
            "Seven or eight months later – you're here",
            "You took several months – patient",
            "Seven months down – still going",
            "Past half a year – impressive"
        ],
        '21427201-24105600': [   // 248–279 days
            "About eight months passed – still counts",
            "Eight or nine months later – you're here",
            "You took several months – patient",
            "Eight months down – still going",
            "Getting close to a year – impressive"
        ],
        '24105601-26784000': [   // 279–310 days
            "About nine months passed – still counts",
            "Nine or ten months later – you're here",
            "You took nine months – patient",
            "Nine months down – almost a year",
            "Close to a year – impressive"
        ],
        '26784001-31536000': [   // 310–365 days
            "About ten or eleven months passed",
            "Almost a year – you're here",
            "You took nearly a year – patient",
            "Ten months down – almost there",
            "So close to a year – impressive"
        ],
        // years (unchanged – the slight understatement at the upper end is acceptable)
        '31536001-63072000': [
            "Ow my gosh, why? just why?!! T.T",
            "A year! You've been waiting forever",
            "365 days – that's a long time",
            "One year – you're testing my patience",
            "You waited a whole year – that's insane",
            "A year later – still here?",
            "You're dedicated, I'll give you that",
            "One year – they might have moved on",
            "That's a long time – what were you doing?",
            "A year – you're not in a rush"
        ],
        '63072001-94608000': [
            "Two years! Are you living under a rock?",
            "2 years – that's a long time",
            "730 days – you're patient",
            "Two years – they might have forgotten",
            "You waited 2 years – that's insane",
            "2 years – you're not in a hurry",
            "That's a long time – what happened?",
            "Two years – you're committed",
            "2 years – they might be surprised",
            "You waited 2 years – that's dedication"
        ],
        '94608001-126144000': [
            "Three years… did you time travel?",
            "3 years – that's a long time",
            "1095 days – you're patient",
            "Three years – they might have moved on",
            "You waited 3 years – that's insane",
            "3 years – you're not in a rush",
            "That's a long time – what were you doing?",
            "Three years – you're committed",
            "3 years – they might be confused",
            "You waited 3 years – that's dedication"
        ],
        '126144001-157680000': [
            "Four years – this link is vintage",
            "4 years – that's a long time",
            "1460 days – you're patient",
            "Four years – they might have forgotten",
            "You waited 4 years – that's insane",
            "4 years – you're not in a hurry",
            "That's a long time – what happened?",
            "Four years – you're committed",
            "4 years – they might be surprised",
            "You waited 4 years – that's dedication"
        ],
        '157680001-189216000': [
            "Five years – a whole era",
            "5 years – that's a long time",
            "1825 days – you're patient",
            "Five years – they might have moved on",
            "You waited 5 years – that's insane",
            "5 years – you're not in a rush",
            "That's a long time – what were you doing?",
            "Five years – you're committed",
            "5 years – they might be confused",
            "You waited 5 years – that's dedication"
        ],
        '189216001-220752000': [
            "Six years – they probably changed numbers",
            "6 years – that's a long time",
            "2190 days – you're patient",
            "Six years – they might have forgotten",
            "You waited 6 years – that's insane",
            "6 years – you're not in a hurry",
            "That's a long time – what happened?",
            "Six years – you're committed",
            "6 years – they might be surprised",
            "You waited 6 years – that's dedication"
        ],
        '220752001-252288000': [
            "Seven years – you're a legend",
            "7 years – that's a long time",
            "2555 days – you're patient",
            "Seven years – they might have moved on",
            "You waited 7 years – that's insane",
            "7 years – you're not in a rush",
            "That's a long time – what were you doing?",
            "Seven years – you're committed",
            "7 years – they might be confused",
            "You waited 7 years – that's dedication"
        ],
        '252288001-283824000': [
            "Eight years – for real?",
            "8 years – that's a long time",
            "2920 days – you're patient",
            "Eight years – they might have forgotten",
            "You waited 8 years – that's insane",
            "8 years – you're not in a hurry",
            "That's a long time – what happened?",
            "Eight years – you're committed",
            "8 years – they might be surprised",
            "You waited 8 years – that's dedication"
        ],
        '283824001-315360000': [
            "Nine years – almost a decade",
            "9 years – that's a long time",
            "3285 days – you're patient",
            "Nine years – they might have moved on",
            "You waited 9 years – that's insane",
            "9 years – you're not in a rush",
            "That's a long time – what were you doing?",
            "Nine years – you're committed",
            "9 years – they might be confused",
            "You waited 9 years – that's dedication"
        ],
        '315360001-Infinity': [
            "A decade! This link is ancient history. 💀",
            "10 years – that's a lifetime",
            "3650 days – you're patient",
            "Ten years – they might have forgotten",
            "You waited 10 years – that's insane",
            "10 years – you're not in a hurry",
            "That's a long time – what happened?",
            "Ten years – you're committed",
            "10 years – they might be surprised",
            "You waited 10 years – that's dedication",
            "A decade – you're a time traveler",
            "10 years – this link is older than some memes",
            "Ten years – you're legendary",
            "A decade – are you okay?",
            "10 years – they're probably dead"
        ]
    },
    pt: {
        // segundos
        '0-3': [
            "Uau, você realmente gosta da pessoa que enviou essa mensagem",
            "Isso foi rápido como um raio! Essa pessoa deve ser muito especial",
            "Você abriu no piscar de olhos! 💕",
            "Reação instantânea! Você está claramente animado",
            "Menos de 3 segundos – você está ansioso, né?",
            "Você deve estar esperando por isso! ⏰"
        ],
        '4-10': [
            "Rápido como um raio! Essa pessoa deve ser muito especial",
            "Rápido! Você não perdeu tempo",
            "Reflexos rápidos! Você está por dentro",
            "Menos de 10 segundos – isso é dedicação",
            "Você é rápido! Eles vão gostar"
        ],
        '11-30': [
            "Rápido! Você não a deixou esperando",
            "Nada mal! Você é pontual",
            "Em menos de meio minuto – legal",
            "Você é eficiente! Eles vão ficar felizes",
            "Rápido o suficiente – você é confiável"
        ],
        '31-60': [
            "Dentro de um minuto – bons reflexos",
            "Quase um minuto – você está atento",
            "Menos de um minuto se passou – legal",
            "Você demorou um pouco – só um pouquinho",
            "Quase um minuto – nada mal"
        ],
        // minutos
        '61-180': [
            "Alguns minutos, ainda quente",
            "Você esperou alguns minutos – ainda fresco",
            "Não muito tempo! Eles vão gostar",
            "Menos de 3 minutos – você está indo bem",
            "Minutos se passaram, mas você ainda é rápido"
        ],
        '181-600': [
            "Ok, esse é um bom tempo",
            "Alguns minutos – isso é razoável",
            "Você respirou – tudo bem",
            "Não muito, não pouco – na medida",
            "Você tem paciência, gosto disso"
        ],
        '601-1200': [
            "De dez a vinte minutos – uma pausa curta",
            "Você deu uma pequena pausa – ainda rápido",
            "Uma pequena espera – tudo bem",
            "Você teve um pequeno atraso – sem problemas",
            "Alguns minutos a mais que a média – tudo certo"
        ],
        '1201-3600': [
            "De vinte a sessenta minutos – uma esperinha",
            "Menos de uma hora – mas um tempinho",
            "Você fez eles esperarem um pouco – ainda conta",
            "Meia hora ou mais – sem pressa",
            "Quase uma hora – espero que tenha valido a pena"
        ],
        // horas
        '3601-7200': [
            "Uma hora ou duas se passaram – ainda conta",
            "Você levou uma hora ou mais – sem pressa",
            "Uma ou duas horas – você está ocupado",
            "Um tempinho se passou – você chegou",
            "Você tinha coisas a fazer – justo"
        ],
        '7201-21600': [
            "Algumas horas se passaram – você está ocupado",
            "Você levou algumas horas – sem pressa",
            "Horas se passaram – ainda conta",
            "Algumas horas depois – você chegou",
            "Você está demorando – eu respeito"
        ],
        '21601-43200': [
            "Várias horas se passaram – ainda conta",
            "Você passou boa parte do dia – paciente",
            "Uma boa parte do dia se passou",
            "Horas se passaram – você chegou",
            "Você está demorando – sem pressa"
        ],
        '43201-86400': [
            "Meio dia ou mais – ainda conta",
            "Você passou a maior parte do dia – paciente",
            "Horas se passaram – você chegou",
            "Você está demorando – sem pressa",
            "Uma boa parte do dia se passou"
        ],
        // dias
        '86401-172800': [
            "Um dia se passou – ainda conta",
            "Você levou um dia inteiro – paciente",
            "Um dia depois – você ainda está aqui",
            "Você fez eles esperarem um dia",
            "Um dia se passou – ainda indo"
        ],
        '172801-604800': [
            "Alguns dias se passaram – você é paciente",
            "Você demorou – dias se passaram",
            "Vários dias depois – ainda conta",
            "Você não tem pressa – dias se passaram",
            "Alguns dias de espera – legal"
        ],
        // meses – reescritos para bater com a faixa real
        '604801-2678400': [
            "Algumas semanas se passaram – ainda conta",
            "Mais de uma semana, menos de um mês",
            "Semanas se passaram – você chegou",
            "Você levou algumas semanas – paciente",
            "Algumas semanas depois – ainda aqui"
        ],
        '2678401-5356800': [
            "Cerca de um mês se passou – ainda conta",
            "Um ou dois meses depois – você está aqui",
            "Você levou cerca de um mês",
            "Um mês se passou – ainda indo",
            "Um ou dois meses se passaram – paciente"
        ],
        '5356801-8035200': [
            "Cerca de dois meses se passaram – ainda conta",
            "Dois ou três meses depois – você está aqui",
            "Você levou alguns meses – paciente",
            "Dois meses se passaram – ainda indo",
            "Alguns meses se passaram – sem pressa"
        ],
        '8035201-10713600': [
            "Cerca de três meses se passaram – ainda conta",
            "Três ou quatro meses depois – você está aqui",
            "Você levou alguns meses – paciente",
            "Três meses se passaram – ainda indo",
            "Um quarto de ano ou mais – impressionante"
        ],
        '10713601-13392000': [
            "Cerca de quatro meses se passaram – ainda conta",
            "Quatro ou cinco meses depois – você está aqui",
            "Você levou vários meses – paciente",
            "Quatro meses se passaram – ainda indo",
            "Um terço de ano ou mais – impressionante"
        ],
        '13392001-16070400': [
            "Cerca de cinco meses se passaram – ainda conta",
            "Cinco ou seis meses depois – você está aqui",
            "Você levou meio ano ou mais – paciente",
            "Cinco meses se passaram – ainda indo",
            "Quase meio ano – impressionante"
        ],
        '16070401-18748800': [
            "Cerca de seis meses se passaram – meio ano",
            "Meio ano ou mais – você ainda está aqui",
            "Você levou seis meses – paciente",
            "Meio ano se passou – ainda indo",
            "Seis meses – impressionante"
        ],
        '18748801-21427200': [
            "Cerca de sete meses se passaram – ainda conta",
            "Sete ou oito meses depois – você está aqui",
            "Você levou vários meses – paciente",
            "Sete meses se passaram – ainda indo",
            "Mais de meio ano – impressionante"
        ],
        '21427201-24105600': [
            "Cerca de oito meses se passaram – ainda conta",
            "Oito ou nove meses depois – você está aqui",
            "Você levou vários meses – paciente",
            "Oito meses se passaram – ainda indo",
            "Chegando perto de um ano – impressionante"
        ],
        '24105601-26784000': [
            "Cerca de nove meses se passaram – ainda conta",
            "Nove ou dez meses depois – você está aqui",
            "Você levou nove meses – paciente",
            "Nove meses se passaram – quase um ano",
            "Perto de um ano – impressionante"
        ],
        '26784001-31536000': [
            "Cerca de dez ou onze meses se passaram",
            "Quase um ano – você está aqui",
            "Você levou quase um ano – paciente",
            "Dez meses se passaram – quase lá",
            "Tão perto de um ano – impressionante"
        ],
        // anos
        '31536001-63072000': [
            "Ai meu Deus, por quê? só por quê?!! T.T",
            "Um ano! Você está esperando há séculos",
            "365 dias – isso é muito tempo",
            "Um ano – você está testando minha paciência",
            "Você esperou um ano inteiro – isso é loucura",
            "Um ano depois – ainda aqui?",
            "Você é dedicado, admito",
            "Um ano – eles podem ter seguido em frente",
            "Isso é muito tempo – o que você estava fazendo?",
            "Um ano – você não tem pressa"
        ],
        '63072001-94608000': [
            "Dois anos! Você está morando debaixo de uma pedra?",
            "2 anos – isso é muito tempo",
            "730 dias – você é paciente",
            "Dois anos – eles podem ter esquecido",
            "Você esperou 2 anos – isso é loucura",
            "2 anos – você não tem pressa",
            "Isso é muito tempo – o que aconteceu?",
            "Dois anos – você está comprometido",
            "2 anos – eles podem estar surpresos",
            "Você esperou 2 anos – dedicação"
        ],
        '94608001-126144000': [
            "Três anos… você viajou no tempo?",
            "3 anos – isso é muito tempo",
            "1095 dias – você é paciente",
            "Três anos – eles podem ter seguido em frente",
            "Você esperou 3 anos – isso é loucura",
            "3 anos – você não tem pressa",
            "Isso é muito tempo – o que você estava fazendo?",
            "Três anos – você está comprometido",
            "3 anos – eles podem estar confusos",
            "Você esperou 3 anos – dedicação"
        ],
        '126144001-157680000': [
            "Quatro anos – esse link é vintage",
            "4 anos – isso é muito tempo",
            "1460 dias – você é paciente",
            "Quatro anos – eles podem ter esquecido",
            "Você esperou 4 anos – isso é loucura",
            "4 anos – você não tem pressa",
            "Isso é muito tempo – o que aconteceu?",
            "Quatro anos – você está comprometido",
            "4 anos – eles podem estar surpresos",
            "Você esperou 4 anos – dedicação"
        ],
        '157680001-189216000': [
            "Cinco anos – uma era inteira",
            "5 anos – isso é muito tempo",
            "1825 dias – você é paciente",
            "Cinco anos – eles podem ter seguido em frente",
            "Você esperou 5 anos – isso é loucura",
            "5 anos – você não tem pressa",
            "Isso é muito tempo – o que você estava fazendo?",
            "Cinco anos – você está comprometido",
            "5 anos – eles podem estar confusos",
            "Você esperou 5 anos – dedicação"
        ],
        '189216001-220752000': [
            "Seis anos – eles provavelmente trocaram de número",
            "6 anos – isso é muito tempo",
            "2190 dias – você é paciente",
            "Seis anos – eles podem ter esquecido",
            "Você esperou 6 anos – isso é loucura",
            "6 anos – você não tem pressa",
            "Isso é muito tempo – o que aconteceu?",
            "Seis anos – você está comprometido",
            "6 anos – eles podem estar surpresos",
            "Você esperou 6 anos – dedicação"
        ],
        '220752001-252288000': [
            "Sete anos – você é uma lenda",
            "7 anos – isso é muito tempo",
            "2555 dias – você é paciente",
            "Sete anos – eles podem ter seguido em frente",
            "Você esperou 7 anos – isso é loucura",
            "7 anos – você não tem pressa",
            "Isso é muito tempo – o que você estava fazendo?",
            "Sete anos – você está comprometido",
            "7 anos – eles podem estar confusos",
            "Você esperou 7 anos – dedicação"
        ],
        '252288001-283824000': [
            "Oito anos – sério?",
            "8 anos – isso é muito tempo",
            "2920 dias – você é paciente",
            "Oito anos – eles podem ter esquecido",
            "Você esperou 8 anos – isso é loucura",
            "8 anos – você não tem pressa",
            "Isso é muito tempo – o que aconteceu?",
            "Oito anos – você está comprometido",
            "8 anos – eles podem estar surpresos",
            "Você esperou 8 anos – dedicação"
        ],
        '283824001-315360000': [
            "Nove anos – quase uma década",
            "9 anos – isso é muito tempo",
            "3285 dias – você é paciente",
            "Nove anos – eles podem ter seguido em frente",
            "Você esperou 9 anos – isso é loucura",
            "9 anos – você não tem pressa",
            "Isso é muito tempo – o que você estava fazendo?",
            "Nove anos – você está comprometido",
            "9 anos – eles podem estar confusos",
            "Você esperou 9 anos – dedicação"
        ],
        '315360001-Infinity': [
            "Uma década! Esse link é história antiga. 💀",
            "10 anos – isso é uma vida",
            "3650 dias – você é paciente",
            "Dez anos – eles podem ter esquecido",
            "Você esperou 10 anos – isso é loucura",
            "10 anos – você não tem pressa",
            "Isso é muito tempo – o que aconteceu?",
            "Dez anos – você está comprometido",
            "10 anos – eles podem estar surpresos",
            "Você esperou 10 anos – dedicação",
            "Uma década – você é um viajante do tempo",
            "10 anos – esse link é mais velho que alguns memes",
            "Dez anos – você é lendário",
            "Uma década – você está bem?",
            "10 anos – eles provavelmente estão mortos"
        ]
    }
};

const UI = {
    en: {
        title: 'Send a <span class="accent">Wait</span> Message',
        copyButton: 'Copy',
        createLink: 'Create your wait link'
    },
    pt: {
        title: 'Envie uma <span class="accent">Mensagem de Espera</span>',
        copyButton: 'Copiar',
        createLink: 'Crie seu link de espera'
    }
};

const TIME_UNITS = {
    en: {
        second: 'sec', seconds: 'sec',
        minute: 'min', minutes: 'min',
        hour: 'hr', hours: 'hr',
        day: 'day', days: 'days',
        month: 'month', months: 'months',
        year: 'year', years: 'years',
        and: 'and'
    },
    pt: {
        second: 'seg', seconds: 'seg',
        minute: 'min', minutes: 'min',
        hour: 'h', hours: 'h',
        day: 'dia', days: 'dias',
        month: 'mês', months: 'meses',
        year: 'ano', years: 'anos',
        and: 'e'
    }
};

// Helper to find the correct message pool and pick a random one
function getMessage(lang, elapsedSeconds) {
    const catalog = MESSAGES[lang] || MESSAGES.en;
    const entries = Object.entries(catalog);
    for (const [rangeKey, messages] of entries) {
        const [, maxStr] = rangeKey.split('-');
        const max = maxStr === 'Infinity' ? Infinity : parseInt(maxStr, 10);
        if (elapsedSeconds <= max) {
            const randomIndex = Math.floor(Math.random() * messages.length);
            return messages[randomIndex];
        }
    }
    const lastMessages = entries[entries.length - 1][1];
    return lastMessages[Math.floor(Math.random() * lastMessages.length)];
}

// Helper to format elapsed time with localized units
function formatElapsed(seconds, lang) {
    const units = TIME_UNITS[lang] || TIME_UNITS.en;
    const s = Math.floor(seconds);
    if (s < 60) {
        return `${s} ${s === 1 ? units.second : units.seconds}`;
    }
    const minutes = Math.floor(s / 60);
    const secs = s % 60;
    if (minutes < 60) {
        return `${minutes} ${minutes === 1 ? units.minute : units.minutes} ${secs} ${secs === 1 ? units.second : units.seconds}`;
    }
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hours < 24) {
        return `${hours} ${hours === 1 ? units.hour : units.hours} ${mins} ${mins === 1 ? units.minute : units.minutes}`;
    }
    const days = Math.floor(hours / 24);
    const hrs = hours % 24;
    if (days < 30) {
        return `${days} ${days === 1 ? units.day : units.days} ${hrs} ${hrs === 1 ? units.hour : units.hours}`;
    }
    const months = Math.floor(days / 30);
    const d = days % 30;
    if (months < 12) {
        return `${months} ${months === 1 ? units.month : units.months} ${d} ${d === 1 ? units.day : units.days}`;
    }
    const years = Math.floor(months / 12);
    const m = months % 12;
    return `${years} ${years === 1 ? units.year : units.years} ${m} ${m === 1 ? units.month : units.months}`;
}