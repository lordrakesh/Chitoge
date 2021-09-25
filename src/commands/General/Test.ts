import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'test',
            description: 'for testing the bot',
            category: 'general',
            usage: `${client.config.prefix}test`,
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
      
      const animetest = this.client.assets.get('animetest')
      if (!animetest) return void null
        return void M.reply(
            animetest,
            MessageType.image,
            undefined,
            undefined,
            `*Yes m working perfectly*`
      
      
        )
    }
}
