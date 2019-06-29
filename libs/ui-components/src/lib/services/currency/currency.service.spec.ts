import { TestBed } from '@angular/core/testing';

import { CurrencyService } from './currency.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material';

describe('CurrencyService', () => {
	beforeEach(() =>
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule, MatSnackBarModule]
		})
	);

	it('should be created', () => {
		const service: CurrencyService = TestBed.get(CurrencyService);
		expect(service).toBeTruthy();
	});
});
