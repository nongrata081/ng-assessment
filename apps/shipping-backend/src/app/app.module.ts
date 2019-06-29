import { Module } from '@nestjs/common';
import { AngularUniversalModule, applyDomino } from '@nestjs/ng-universal';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FlexLayoutServerModule } from '@angular/flex-layout/server';

const BROWSER_DIR = join(process.cwd(), 'dist', 'apps', 'shipping');
applyDomino(global, join(BROWSER_DIR, 'index.html'));

@Module({
	imports: [
		AngularUniversalModule.forRoot({
			viewsPath: BROWSER_DIR,
			bundle: require('../../../../dist/apps/shipping-backend/main'),
			liveReload: true
		}),
		FlexLayoutServerModule
	],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
