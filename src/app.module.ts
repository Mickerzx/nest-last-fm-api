import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AlbumModule } from './albums/album.module';
import { ArtistModule } from './artist/artist.module';

@Module({
  imports: [AlbumModule, MongooseModule.forRoot('mongodb://localhost/last-fm-app'), ArtistModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
