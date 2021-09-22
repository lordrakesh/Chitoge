import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'hi',
            description: 'Well....',
            category: 'misc',
            usage: `${client.config.prefix}hi`,
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        return void M.reply(await request.buffer('https://i.pinimg.com/originals/be/f2/29/bef229a7ce4832a802fef81101dbd971.jpg'),
        MessageType.image,
                    undefined,
                    undefined,
                    `✇ *It's Kakashi* 〽 \n\n😆 *Hey there* how you doing..?`
    }
}
