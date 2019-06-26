import {
	async,
	ComponentFixture,
	TestBed
} from '@angular/core/testing';

import { SharedUiComponentExampleComponent } from './shared-ui-component-example.component';

describe('SharedUiComponentExampleComponent', () => {
	let component: SharedUiComponentExampleComponent;
	let fixture: ComponentFixture<
		SharedUiComponentExampleComponent
	>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SharedUiComponentExampleComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(
			SharedUiComponentExampleComponent
		);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
