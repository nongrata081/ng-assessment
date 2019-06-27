import { Component } from '@angular/core';
import { ExampleSharedEntity } from '@ss/data';
// import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'ship-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'shipping';
	someProperty: ExampleSharedEntity;

	// constructor(translate: TranslateService) {
	// 	// this language will be used as a fallback when a translation isn't found in the current language
	// 	translate.setDefaultLang('en');
	//
	// 	// the lang to use, if the lang isn't available, it will use the current loader to get them
	// 	translate.use('en');
	// }
}
