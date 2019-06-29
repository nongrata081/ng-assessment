import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageFormComponent } from './package-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('PackageFormComponent', () => {
	let component: PackageFormComponent;
	let fixture: ComponentFixture<PackageFormComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				BrowserAnimationsModule,
				ReactiveFormsModule,
				MatFormFieldModule,
				MatSelectModule,
				MatInputModule
			],
			declarations: [PackageFormComponent],
			schemas: [NO_ERRORS_SCHEMA]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PackageFormComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
