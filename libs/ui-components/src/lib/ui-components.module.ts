import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUiComponentExampleComponent } from './shared-ui-component-example/shared-ui-component-example.component';
import { HeaderComponent } from './header/header.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FooterComponent } from './footer/footer.component';

@NgModule({
	imports: [CommonModule, MDBBootstrapModule],
	declarations: [
		HeaderComponent,
		SharedUiComponentExampleComponent,
		FooterComponent
	],
	exports: [HeaderComponent, SharedUiComponentExampleComponent, FooterComponent]
})
export class UiComponentsModule {}
