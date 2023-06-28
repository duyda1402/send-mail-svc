import { Module } from '@nestjs/common';
import { MailingService } from './mailing.service';
import { MailingController } from './mailing.controller';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { configMail } from './../common';
import { join } from 'path';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: configMail.MAIL_HOST,
        service: 'gmail',
        port: 587,
        secure: false,
        auth: {
          user: configMail.SMTP_USERNAME,
          pass: configMail.SMTP_PASSWORD,
        },
      },
      defaults: {
        from: `"No Reply" <${configMail.SMTP_USERNAME}>`,
      },
      template: {
        dir: join(__dirname, './templates'),
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
    }),
  ],
  controllers: [MailingController],
  providers: [MailingService],
  exports: [MailingService],
})
export class MailingModule {}
