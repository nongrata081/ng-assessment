import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CurrencyConversionRates, Package, Shipment, Value } from '@ss/data';
import { Big } from 'big.js';
import { CurrencyService } from '../../services/currency/currency.service';
import { ShipmentService } from '../../services/shipment/shipment.service';
import { SnackbarService } from '../../services/snackbar/snackbar.service';
import { PackageFormComponent } from '../package-form/package-form.component';

@Component({
	selector: 'ss-shipment-form',
	templateUrl: './shipment-form.component.html',
	styleUrls: ['./shipment-form.component.scss']
})
export class ShipmentFormComponent implements OnInit {
	packageData = [{ weight: 0, value: 0 }] as Package[];
	rates: CurrencyConversionRates;
	shipmentTableColumns: string[] = ['packageName', 'packageWeight', 'packageValue'];
	dataSource = this.packageData;
	totalPackages = 1;
	totalWeight = 0;
	totalValue: Value = {
		currency: 'EUR',
		value: 0
	};
	shipmentFormValid: boolean;

	@ViewChild(PackageFormComponent, { static: true }) packageForm: PackageFormComponent;

	constructor(
		private fb: FormBuilder,
		private currencyService: CurrencyService,
		private shipmentService: ShipmentService,
		private snackbarService: SnackbarService
	) {}

	ngOnInit() {
		this.currencyService.getCurrencyRates().subscribe(rates => {
			this.rates = rates;
			this.snackbarService.openSnackBar(
				`Successfully retrieved rates! : ${JSON.stringify(rates)}`
			);
		});
	}

	updateTableData($event) {
		this.dataSource = $event.packages;
		this.totalPackages = $event.packages.length;

		if (this.shipmentFormValid && !this.packageForm.packages.untouched) {
			this.getTotalValue();
			this.getTotalWeight();
		}
	}

	getTotalWeight() {
		const weightStringsArr = [];
		this.dataSource.forEach(i => {
			i.weight === '' || i.weight === '0'
				? weightStringsArr.push(new Big('0'))
				: weightStringsArr.push(new Big(i.weight));
		});
		this.totalWeight = Number(weightStringsArr.reduce((a, b) => a.plus(b)).toFixed(3));
	}

	getTotalValue() {
		const valueObjArr = [];
		const totalPackagesValue = [];
		this.dataSource.forEach(i => {
			valueObjArr.push({ value: i.value, currency: i.currency });
		});

		valueObjArr.forEach(valObj => {
			if (valObj.currency === 'USD') {
				valObj.value === ''
					? totalPackagesValue.push(new Big('0'))
					: totalPackagesValue.push(new Big(valObj.value).div(this.rates.USD));
			} else if (valObj.currency === 'GBP') {
				valObj.value === ''
					? totalPackagesValue.push(new Big('0'))
					: totalPackagesValue.push(new Big(valObj.value).div(this.rates.GBP));
			} else if (valObj.currency === 'EUR') {
				valObj.value === ''
					? totalPackagesValue.push(new Big('0'))
					: totalPackagesValue.push(new Big(valObj.value));
			}
		});
		this.totalValue.value = Number(
			totalPackagesValue.reduce((a, b) => a.plus(b)).toFixed(2)
		);
	}

	isShipmentFormValid(packageFormValid: boolean): boolean {
		return packageFormValid && this.totalWeight <= 25;
	}

	updateShipmentForm($event) {
		if (this.packageForm.packages.length > 0) {
			this.shipmentFormValid = this.isShipmentFormValid($event);
			if (this.shipmentFormValid) {
				this.getTotalValue();
				this.getTotalWeight();
			}
		}
	}

	addShipment(): void {
		const shipment = { packages: [] } as Shipment;

		this.dataSource.forEach(i => {
			const packageData = {} as Package;
			packageData.name = i.name;
			packageData.weight = Number(i.weight);
			if (i.currency === 'USD') {
				packageData.value = Number(
					new Big((i.value as unknown) as Big).div(this.rates.USD).toFixed(2)
				);
			} else if (i.currency === 'GBP') {
				packageData.value = Number(
					new Big((i.value as unknown) as Big).div(this.rates.GBP).toFixed(2)
				);
			} else if (i.currency === 'EUR') {
				packageData.value = Number(Number(i.value).toFixed(2));
			}
			shipment.packages.push(packageData);
		});

		this.shipmentService.add(shipment).subscribe(
			() => {},
			error => {},
			() => {
				this.snackbarService.openSnackBar(
					`Shipment successfully saved! : ${JSON.stringify(shipment)}`
				);
				this.clearForm();
			}
		);
	}

	clearForm() {
		while (this.packageForm.packages.length !== 1) {
			this.packageForm.packages.removeAt(0);
		}
		this.packageForm.packages.reset();
		this.totalPackages = 0;
		this.totalWeight = 0;
		this.totalValue.value = 0;
	}
}
