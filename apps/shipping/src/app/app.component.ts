import { Component } from '@angular/core';
import { ExampleSharedEntity } from '@ss/data';

@Component({
	selector: 'ship-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'shipping';
	someProperty: ExampleSharedEntity;
}
