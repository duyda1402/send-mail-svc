import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { MailingService } from './mailing.service';
import { EmailDto } from './dto/mailing.dto';

@Controller('mailing')
export class MailingController {
  constructor(private readonly mailingService: MailingService) {}

  @Post('send')
  @HttpCode(200)
  async sendEmail(@Body() emailDto: EmailDto) {
    return await this.mailingService.sendEmail(emailDto);
  }
}
