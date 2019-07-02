import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { CurrencyConversionRates, CurrencyRates } from '@ss/data';
import { catchError, map } from 'rxjs/operators';
import { SnackbarService } from '../snackbar/snackbar.service';

@Injectable({
	providedIn: 'root'
})
export class CurrencyService {
	private currencyRatesUrl = 'http://localhost:3000/currency-conversion-rates';

	constructor(private http: HttpClient, private snackbarService: SnackbarService) {}

	getCurrencyRates(): Observable<CurrencyConversionRates> {
		return this.http.get<CurrencyRates>(this.currencyRatesUrl).pipe(
			catchError(err => {
				console.error('GET currency rates failed', err);
				const message = `Sorry, can't get currency rates right now. Please try again later. Hint: did you 'npm run fake:rest:api' ?`;
				this.snackbarService.openSnackBar(message);
				return throwError(message);
			}),
			map((currencyRates: CurrencyRates) => currencyRates.rates)
		);
	}
}
