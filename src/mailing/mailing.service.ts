import { MailerService } from '@nestjs-modules/mailer';
import { BadRequestException, Injectable } from '@nestjs/common';
import { EmailDto } from './dto/mailing.dto';

@Injectable()
export class MailingService {
  constructor(private readonly mailerService: MailerService) {}
  oauthPlayground = 'https://developers.google.com/oauthplayground';

  async sendEmail(emailDto: EmailDto) {
    let temp = 'default';
    if (emailDto?.templates) {
      temp = emailDto.templates;
    }
    //await this.setTransport();
    try {
      const result = await this.mailerService.sendMail({
        to: emailDto.toMail, // list of receivers
        subject: emailDto.subject, // Subject line
        template: `./${temp}`,
        html: `${emailDto.body}`,
        // context : {
        //   name : emailDto.name,
        // }
      });
      return {
        data: result,
        message: 'success',
      };
    } catch (error) {
      throw new BadRequestException(error?.message);
    }
  }
}
