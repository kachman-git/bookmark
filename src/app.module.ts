import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookmarkModule } from './bookmark/bookmark.module';
import { AuthModdule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [AuthModdule, BookmarkModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
