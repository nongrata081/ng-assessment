import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentFormComponent } from './shipment-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatSnackBarModule, MatTableModule } from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ShipmentFormComponent', () => {
	let component: ShipmentFormComponent;
	let fixture: ComponentFixture<ShipmentFormComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				ReactiveFormsModule,
				MatTableModule,
				HttpClientTestingModule,
				MatSnackBarModule
			],
			declarations: [ShipmentFormComponent],
			schemas: [NO_ERRORS_SCHEMA]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ShipmentFormComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
