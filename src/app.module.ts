import { Module } from '@nestjs/common';
import { MailingModule } from './mailing/mailing.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MailingModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
