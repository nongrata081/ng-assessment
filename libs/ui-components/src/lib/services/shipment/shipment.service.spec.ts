import { TestBed } from '@angular/core/testing';

import { ShipmentService } from './shipment.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material';

describe('ShipmentService', () => {
	beforeEach(() =>
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule, MatSnackBarModule]
		})
	);

	it('should be created', () => {
		const service: ShipmentService = TestBed.get(ShipmentService);
		expect(service).toBeTruthy();
	});
});
