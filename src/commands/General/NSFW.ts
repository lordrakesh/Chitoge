import MessageHandler from '../../Handlers/MessageHandler'	
import BaseCommand from '../../lib/BaseCommand'	
import WAClient from '../../lib/WAClient'	
import { ISimplifiedMessage } from '../../typings'	

 export default class Command extends BaseCommand {	
    constructor(client: WAClient, handler: MessageHandler) {	
        super(client, handler, {	
            command: 'nsfw',	
            description: 'Well....',	
            category: 'general',	
            dm: false,	
            usage: `${client.config.prefix}nsfw`	
        })	
    }	

     run = async (M: ISimplifiedMessage): Promise<void> => {	
        return void M.reply( `The *NSFW* command are-\n nwaifu \n nneko \n\n ntrap \n`	
      )	
    }	
}
