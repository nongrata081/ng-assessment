import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { UiComponentsModule } from '@ss/ui-components';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@ss/material';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule.withServerTransition({
			appId: 'serverApp'
		}),
		BrowserAnimationsModule,
		RouterModule.forRoot([], {
			initialNavigation: 'enabled'
		}),
		RouterModule,
		UiComponentsModule,
		MaterialModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
