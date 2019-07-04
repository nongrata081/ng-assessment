import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FooterComponent } from './components/footer/footer.component';
import { ShipmentFormComponent } from './components/shipment-form/shipment-form.component';
import { MaterialModule } from '@ss/material';
import { ReactiveFormsModule } from '@angular/forms';
import { PackageFormComponent } from './components/package-form/package-form.component';
import { CurrencyService } from './services/currency/currency.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	imports: [
		CommonModule,
		MDBBootstrapModule,
		MaterialModule,
		ReactiveFormsModule,
		HttpClientModule
	],
	declarations: [
		HeaderComponent,
		FooterComponent,
		ShipmentFormComponent,
		PackageFormComponent
	],
	exports: [
		HeaderComponent,
		FooterComponent,
		ShipmentFormComponent,
		PackageFormComponent
	],
	providers: [CurrencyService]
})
export class UiComponentsModule {}
