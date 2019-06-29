import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Shipment } from '@ss/data';
import { SnackbarService } from '../snackbar/snackbar.service';

@Injectable({
	providedIn: 'root'
})
export class ShipmentService {
	private postShipmentUrl = 'http://localhost:3000/shipments';

	constructor(private http: HttpClient, private snackbarService: SnackbarService) {}

	add(shipment: Shipment): Observable<Shipment> {
		return this.http.post<Shipment>(this.postShipmentUrl, shipment).pipe(
			catchError(err => {
				console.error('POST shipment failed', err);
				const message =
					"Sorry, we can't add shipments right now; please try again later. Hint: did you 'npm run fake:rest:api' ?";
				this.snackbarService.openSnackBar(message);
				return throwError(message);
			})
		);
	}
}
