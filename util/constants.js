const MESSAGES = {
    COMMANDS: {
        MISC: {
            SAY: {
                name: "say",
                aliases: ['repeat', 'rep'],
                category: 'misc',
                description: "Répéte le message d'un utilisateur",
                cooldown: 10,
                usage: '<votre_message>',
                isUserAdmin: false,
                permissions: false,
                args: true
            },
            PING: {
                name: "ping",
                aliases: ['ping'],
                category: 'misc',
                description: "Renvoie pong!",
                cooldown: 10,
                usage: '',
                permissions: false,
                isUserAdmin: false,
                args: false
            },
            VALNUIT: {
                name: "valnuit",
                aliases: ['valnuit'],
                category: 'misc',
                description: "Valnuit présentation",
                cooldown : 10,
                usage: '',
                isUserAdmin: false,
                permissions: false,
                args: false
            },
            HELP: {
                name: "help",
                aliases: ['help'],
                category: 'misc',
                description: "Renvoie une liste de commandes ou les informations su une seule!",
                cooldown: 3,
                usage: '<command_name>',
                isUserAdmin: false,
                permissions: false,
                args: false
            }
        },
        MODERATION: {
            BAN: {
                name: "ban",
                aliases: ['ban'],
                category: 'moderation',
                description: "Ban un utilisateur",
                cooldown: 10,
                usage: '<@user> <raison>',
                isUserAdmin : true,
                permissions: true,
                args: true
            },
            KICK: {
                name: "kick",
                aliases: ['kick'],
                category: 'moderation',
                description: "Kick un utilisateur",
                cooldown: 10,
                usage: '<@user> <raison>',
                isUserAdmin : true,
                permissions: true,
                args: true
            },
            MUTE: {
                name: "mute",
                aliases: ['mute'],
                category: 'moderation',
                description: "Mute un utilisateur",
                cooldown: 10,
                usage: '<@user> <time>',
                isUserAdmin : true,
                permissions: true,
                args: true
            },
            PRUNE: {
                name: "prune",
                aliases: ['prune'],
                category: 'moderation',
                description: "Purge un nombre de message spécifié sur un utilisateur spécifié",
                cooldown: 10,
                usage: '<@user> <nbr_messages>',
                isUserAdmin: true,
                permissions: true,
                args: true
            },
            PURGE: {
                name: "purge",
                aliases: ['purge'],
                category: 'moderation',
                description: "Purge un nombre de message spécifié",
                cooldown: 10,
                usage: '<nbr_messages>',
                isUserAdmin : false,
                permissions: true,
                args: true
            },
            UNBAN: {
                name: "unban",
                aliases: ['unban'],
                category: 'moderation',
                description: "Unban un utilisateur",
                cooldown: 10,
                usage: '<user_id>',
                isUserAdmin : false,
                permissions: true,
                args: true
            },
            UNMUTE: {
                name: "unmute",
                aliases: ['unmute'],
                category: 'moderation',
                description: "Unmute un utilisateur",
                cooldown: 10,
                usage: '<@user>',
                isUserAdmin : true,
                permissions: true,
                args: true
            }
        },
        REACTIONS: {
            ALLROLES:  {
                name: "allroles",
                aliases: ['allroles'],
                category: 'reactions',
                description: "Renvoie un message avec des réactions!",
                cooldown: 10,
                usage: '',
                permissions: true,
                isUserAdmin: false,
                args: false
            }
        }
    }
}

exports.MESSAGES = MESSAGES