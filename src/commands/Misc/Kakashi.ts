import { MessageType } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import request from '../../lib/request'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'Kakashi',
            description: 'Displays the info',
            category: 'misc',
            usage: `${client.config.prefix}chitoge`,
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        

        
        
return void M.reply(await request.buffer('https://i.pinimg.com/736x/dc/b1/91/dcb191b5d7b12d20befcb034050c0f69.jpg'),
MessageType.image,
            undefined,
            undefined,
            `✇ *Kakashi* 〽 \n\n🍀 *Description:* Use *!mods* Command for repo or get owner number`
           

)


    }







}
