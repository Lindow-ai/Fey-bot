const MESSAGES = {
    COMMANDS: {
        ADMIN: {
            CONFIG: {
                name: "config",
                aliases: ['config'],
                category: 'admin',
                description: "Modifier la base de données",
                cooldown: 3,
                usage: '<key> <value>',
                isUserAdmin: false,
                permissions: true,
                args: true
            },
            EVAL: {
                name: "eval",
                aliases: ['eval'],
                category: 'admin',
                description: "Tester un code javascript",
                cooldown: 3,
                usage: '<code_to_test>',
                isUserAdmin: false,
                permissions: true,
                args: true
              },
              RELOAD: {
                name: "reload",
                aliases: ['reload'],
                category: 'admin',
                description: "Relancer le bot",
                cooldown: 3,
                usage: '',
                isUserAdmin: false,
                permissions: true,
                args: false
              }
        },
        ANIMALS: {
            CAT: {
                name: "cat",
                aliases: ['cat', 'chat'],
                category: 'animals',
                description: "Renvoie une image de chat",
                cooldown: 3,
                usage: '',
                isUserAdmin: false,
                permissions: false,
                args: false
            },
            DOG: {
                name: "dog",
                aliases: ['dog', 'chien'],
                category: 'animals',
                description: "Renvoie une image de chien",
                cooldown: 3,
                usage: '',
                isUserAdmin: false,
                permissions: false,
                args: false
            },
            FOX: {
                name: "fox",
                aliases: ['fox', 'renard'],
                category: 'animals',
                description: "Renvoie une image de renard",
                cooldown: 3,
                usage: '',
                isUserAdmin: false,
                permissions: false,
                args: false
            },
            ANIME: {
                name: "anime",
                aliases: ['anime', 'memes'],
                category: 'animals',
                description: "Renvoie des memes de type animes",
                cooldown: 3,
                usage: '',
                isUserAdmin: false,
                permissions: false,
                args: false
            }
        },
        COLLECTORS: {
            MSGCOLLECTOR: {
                name: "msgcollector",
                aliases: ['msgcollector', 'mcol'],
                category: 'collectors',
                description: "Message collector",
                cooldown: 3,
                usage: '<msg_to-collect>',
                isUserAdmin: false,
                permissions: true,
                args: true
            },
            REACTCOLLECTOR: {
                name: "reactcollector",
                aliases: ['reactcollector', 'rcol'],
                category: 'collectors',
                description: "Message collector",
                cooldown: 3,
                usage: '',
                isUserAdmin: false,
                permissions: true,
                args: false
            }
        },
        EXPERIENCE: {
            REMOVEEXPERIENCE: {
                name: "removeexperience",
                aliases: ['removeexperience', 'remxp'],
                category: 'experience',
                description: "Enlever de l'expérience à l'utilisateur",
                cooldown: 10,
                usage: '<@user> <exp_to_remove>',
                isUserAdmin: false,
                permissions: true,
                args: true
            },
            ADDEXPERIENCE: {
                name: "addexperience",
                aliases: ['addexperience', 'addxp'],
                category: 'experience',
                description: "Ajouter de l'expérience à l'utilisateur",
                cooldown: 10,
                usage: '<@user> <exp_to_add>',
                isUserAdmin: false,
                permissions: true,
                args: true
            },
            LEADERBOARD: {
                name: "leaderboard",
                aliases: ['leaderboard', 'classement', 'leadxp'],
                category: 'experience',
                description: "Ajouter de l'expérience à l'utilisateur",
                cooldown: 10,
                usage: '',
                isUserAdmin: false,
                permissions: false,
                args: false
            },
            USEREXPERIENCE: {
                name: "userexperience",
                aliases: ['userexperience', 'uexp'],
                category: 'experience',
                description: "Renvoie l'expérience de l'utilisateur",
                cooldown: 10,
                usage: '',
                isUserAdmin: false,
                permissions: false,
                args: false
            },
        },
        MISC: {
            EIGHTBALL: {
                name: "8ball",
                aliases: ['8ball', 'question'],
                category: 'misc',
                description: "Renvoie une réponse à une question !",
                cooldown: 4,
                usage: '<question>',
                isUserAdmin: false,
                permissions: false,
                args: true
            },
            BOTINFO: {
                name: "botinfo",
                aliases: ['botinfo'],
                category: 'misc',
                description: "Renvoie des informations concernant le bot!",
                cooldown: 4,
                usage: '',
                isUserAdmin: false,
                permissions: false,
                args: false
            },
            DICE: {
                name: "dice",
                aliases: ['dice'],
                category: 'misc',
                description: "Renvoie la valeur de plusieurs dés!",
                cooldown: 1,
                usage: '',
                isUserAdmin: false,
                permissions: false,
                args: false
            },
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
            SERVERINFO: {
                name: "serverinfo",
                aliases: ['serverinfo'],
                category: 'misc',
                description: "Renvoie des informations concernant le serveur!",
                cooldown: 4,
                usage: '',
                isUserAdmin: false,
                permissions: false,
                args: false
            },
            USERINFO: {
                name: "userinfo",
                aliases: ['userinfo'],
                category: 'misc',
                description: "Renvoie des informations concernant un utilisateur (ou vous-même)!",
                cooldown: 4,
                usage: '[<mentionned_user>]',
                isUserAdmin: false,
                permissions: false,
                args: false
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
            POLL: {
                name: "poll",
                aliases: ['poll', 'sondage'],
                category: 'misc',
                description: "Renvoie un sondage!",
                cooldown: 10,
                usage: '<sondage>',
                permissions: false,
                isUserAdmin: false,
                args: true
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
            REPORT: {
                name: "report",
                aliases: ['report'],
                category: 'moderation',
                description: "Reporte un utilisateur",
                cooldown: 10,
                usage: '<nbr_messages>',
                isUserAdmin : false,
                permissions: false,
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
        PLAYER: {
            PLAY: {
                name: "play",
                aliases: ['play', 'p'],
                category: 'player',
                description: "Jouer une musique",
                cooldown: 10,
                usage: '',
                permissions: false,
                isUserAdmin: false,
                args: false
            },
            STOP: {
                name: "stop",
                aliases: ['stop', 's'],
                category: 'player',
                description: "Stopper une musique",
                cooldown: 10,
                usage: '',
                permissions: false,
                isUserAdmin: false,
                args: false
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
            },
            EMOJI:  {
                name: "emoji",
                aliases: ['emoji'],
                category: 'reactions',
                description: "Renvoie des emojis sur notre message!",
                cooldown: 0.1,
                usage: '',
                permissions: false,
                isUserAdmin: false,
                args: false
            }
        }
    }
}

exports.MESSAGES = MESSAGES