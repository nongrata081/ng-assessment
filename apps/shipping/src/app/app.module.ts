import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { UiComponentsModule } from '@ss/ui-components';
import {
	TranslateModule,
	TranslateLoader
} from '@ngx-translate/core';
import {
	HttpClientModule,
	HttpClient
} from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http);
}

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
		UiComponentsModule,
		HttpClientModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient]
			}
		})
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
