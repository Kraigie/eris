"use strict";

module.exports = {
    Endpoints: {
        BASE_URL:      "https://ptb.discordapp.com/api",
        CHANNEL:                         (chanID) => "/channels/" + chanID,
        CHANNEL_BULK_DELETE:             (chanID) => "/channels/" + chanID + "/messages/bulk_delete",
        CHANNEL_INVITES:                 (chanID) => "/channels/" + chanID + "/invites",
        CHANNEL_MESSAGE:          (chanID, msgID) => "/channels/" + chanID + "/messages/" + msgID,
        CHANNEL_MESSAGES:                (chanID) => "/channels/" + chanID + "/messages",
        CHANNEL_PIN:              (chanID, msgID) => "/channels/" + chanID + "/pins/" + msgID,
        CHANNEL_PINS:                    (chanID) => "/channels/" + chanID + "/pins",
        CHANNEL_PERMISSION:      (chanID, overID) => "/channels/" + chanID + "/permission/" + overID,
        CHANNEL_PERMISSIONS:             (chanID) => "/channels/" + chanID + "/permissions",
        CHANNEL_TYPING:                  (chanID) => "/channels/" + chanID + "/typing",
        CHANNELS:                                    "/channels",
        GATEWAY:                                     "/gateway",
        GUILD:                          (guildID) => "/guilds/" + guildID,
        GUILD_BAN:              (guildID, userID) => "/guilds/" + guildID + "/bans/" + userID,
        GUILD_BANS:                     (guildID) => "/guilds/" + guildID + "/bans",
        GUILD_CHANNELS:                 (guildID) => "/guilds/" + guildID + "/channels",
        GUILD_EMBED:                    (guildID) => "/guilds/" + guildID + "/embed",
        GUILD_INTEGRATIONS:             (guildID) => "/guilds/" + guildID + "/integrations",
        GUILD_INTEGRATION:      (guildID, inteID) => "/guilds/" + guildID + "/integrations/" + inteID,
        GUILD_INTEGRATION_SYNC: (guildID, inteID) => "/guilds/" + guildID + "/integrations/" + inteID + "/sync",
        GUILD_INVITES:                  (guildID) => "/guilds/" + guildID + "/invites",
        GUILD_MEMBER:           (guildID, userID) => "/guilds/" + guildID + "/members/" + userID,
        GUILD_ME_NICK:                  (guildID) => "/guilds/" + guildID + "/members/@me/nick",
        GUILD_PRUNE:                    (guildID) => "/guilds/" + guildID + "/prune",
        GUILD_ROLES:                    (guildID) => "/guilds/" + guildID + "/roles",
        GUILD_ROLE:             (guildID, roleID) => "/guilds/" + guildID + "/roles/" + roleID,
        GUILD_VOICE_REGIONS:            (guildID) => "/guilds/" + guildID + "/regions",
        GUILDS:                                      "/guilds",
        INVITE:                        (inviteID) => "/invite/" + inviteID,
        ME:                                          "/users/@me",
        ME_CHANNELS:                                 "/users/@me/channels",
        ME_GUILD:                       (guildID) => "/users/@me/guilds/" + guildID,
        USER:                            (userID) => "/users/" + userID,
        USERS:                                       "/users",
        VOICE_REGIONS:                               "/voice/regions"
    },
    GatewayOPCodes: {
        EVENT: 0,
        HEARTBEAT: 1,
        IDENTIFY: 2,
        STATUS_UPDATE: 3,
        VOICE_STATE_UPDATE: 4,
        VOICE_SERVER_PING: 5,
        RESUME: 6,
        RECONNECT: 7,
        GET_GUILD_MEMBERS: 8,
        INVALID_SESSION: 9,
        HELLO: 10,
        HEARTBEAT_ACK: 11,
        SYNC_GUILD: 12
    },
    Permissions: {
        createInstantInvite: 1,
        kickMembers: 1 << 1,
        banMembers: 1 << 2,
        administrator: 1 << 3,
        manageChannels: 1 << 4,
        manageGuild: 1 << 5,
        readMessages: 1 << 10,
        sendMessages: 1 << 11,
        sendTTSMessages: 1 << 12,
        manageMessages: 1 << 13,
        embedLinks: 1 << 14,
        attachFiles: 1 << 15,
        readMessageHistory: 1 << 16,
        mentionEveryone: 1 << 17,
        voiceConnect: 1 << 20,
        voiceSpeak: 1 << 21,
        voiceMuteMembers: 1 << 22,
        voiceDeafenMembers: 1 << 23,
        voiceMoveMembers: 1 << 24,
        voiceUseVAD: 1 << 25,
        changeNickname: 1 << 26,
        manageNicknames: 1 << 27,
        manageRoles: 1 << 28,
        all: 0b11111111100111111110000111111
    },
    VoiceOPCodes: {
        IDENTIFY: 0,
        SELECT_PROTOCOL: 1,
        READY: 2,
        HEARTBEAT: 3,
        SESSION_DESCRIPTION: 4,
        SPEAKING: 5
    }
};