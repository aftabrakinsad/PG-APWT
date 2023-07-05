import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MessagingDto } from 'src/DTOs/message.dto';
import { Message } from 'src/Database/message.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MessageService {
    constructor (@InjectRepository(Message) private readonly messageRepo : Repository<Message>) {
    }

    addMessage(messagedto: MessagingDto) : Promise<Message> {
        let message : Message = new Message();
        message.m_id = messagedto.m_id;
        message.u_id = messagedto.u_id;
        message.message = messagedto.message;
        return this.messageRepo.save(message);
    }

    Messaging() : Promise<Message[]> {
        return this.messageRepo.find();
    }
}
