import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { UiComponentsModule } from '@ss/ui-components';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@ss/material';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

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
		MDBBootstrapModule.forRoot(),
		MaterialModule,
		UiComponentsModule,
		ReactiveFormsModule,
		FlexLayoutModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
