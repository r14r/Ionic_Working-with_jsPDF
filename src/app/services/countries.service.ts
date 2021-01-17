import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ICountries } from 'src/app/services/countries.interface';

@Injectable({
	providedIn: 'root',
})
export class CountriesService {
	PREFIX = this.constructor.name;

	constructor(private http: HttpClient) {}

	getData(): Observable<ICountries[]> {
		console.log(this.PREFIX, 'getData');

		return this.http.get<ICountries[]>('/assets/data/countries.json');
	}
}
