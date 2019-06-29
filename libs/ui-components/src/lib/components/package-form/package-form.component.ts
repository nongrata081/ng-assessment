import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { validateMaxValue, validateMaxWeight } from '@ss/utils';
import { Subscription } from 'rxjs';

@Component({
	selector: 'ss-package-form',
	templateUrl: './package-form.component.html',
	styleUrls: ['./package-form.component.scss']
})
export class PackageFormComponent implements OnInit, OnDestroy {
	shipment: FormGroup;
	packages: FormArray;
	packageDataSubscription: Subscription;
	@Output() packagesData = new EventEmitter();
	@Output() isPackageFormValid = new EventEmitter<boolean>();

	constructor(private fb: FormBuilder) {}

	ngOnInit() {
		this.shipment = this.fb.group({
			packages: this.fb.array([this.createPackage()])
		});
		this.packageDataSubscription = this.shipment.valueChanges.subscribe(val => {
			this.packagesData.emit(val);
			this.isPackageFormValid.emit(this.shipment.valid);
			console.log(
				'this.shipment.valueChanges, this.shipment.valid:',
				this.shipment.valid
			);
		});
	}

	createPackage(): FormGroup {
		return this.fb.group({
			name: ['', [Validators.required, Validators.maxLength(32)]],
			weight: ['0', [Validators.required, validateMaxWeight]],
			value: ['0', [Validators.required, validateMaxValue]],
			currency: ['', Validators.required]
		});
	}

	addPackage(): void {
		this.packages = this.shipment.get('packages') as FormArray;
		this.packages.push(this.createPackage());
	}

	removePackage(): void {
		this.packages = this.shipment.get('packages') as FormArray;
		this.packages.removeAt(this.packages.length - 1);
	}

	disableAddingPackage(): boolean {
		this.packages = this.shipment.get('packages') as FormArray;
		return this.packages.length === 5;
	}

	disableRemovingPackage(): boolean {
		this.packages = this.shipment.get('packages') as FormArray;
		return this.packages.length === 1;
	}

	ngOnDestroy() {
		this.packageDataSubscription.unsubscribe();
	}
}
