import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { UiComponentsModule } from '@ss/ui-components';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule.withServerTransition({
			appId: 'serverApp'
		}),
		RouterModule.forRoot([], {
			initialNavigation: 'enabled'
		}),
		RouterModule,
		UiComponentsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
