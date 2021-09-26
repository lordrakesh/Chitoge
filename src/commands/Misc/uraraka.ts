import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'uraraka',
            description: 'Displays the info.',
            category: 'misc',
            usage: `${client.config.prefix}uraraka`
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/videos/chitoge/chitoge-git.mp4'
        ]
        let chitoge = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: chitoge }, MessageType.video, {
            mimetype: Mimetype.gif,
            caption: `🎀 𝓾𝓻𝓪𝓻𝓪𝓴𝓪\n\n🍀 *Description: Maintained Fork of WhatsApp Botto Void*\n\n🌐 *URL: https://github.com/ShinNouzen/Chitoge* \n\n 📒 *Guide: https://github.com/ShinNouzen/Chitoge-Guides* \n` }
        )
    }
}
          
       


    
        
           
           
            
            
        
    

    
        
           
           
           
   
