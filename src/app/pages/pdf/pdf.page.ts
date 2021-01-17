import { Component, OnInit } from '@angular/core';

import { jsPDF } from 'jspdf';

import { CountriesService } from 'src/app/services/countries.service';

@Component({
	selector: 'app-pdf',
	templateUrl: './pdf.page.html',
	styleUrls: ['./pdf.page.scss'],
})
export class PDFPage implements OnInit {
	PREFIX = this.constructor.name;

	countries: any;

	constructor(private countriesService: CountriesService) {
		console.log(this.PREFIX, 'constructor');
	}

	ngOnInit() {
		this.countries = this.countriesService.getData();

		console.log(this.PREFIX, 'ngOnInit');
		console.log(this.countries);
	}

	downloadPDF() {
		var data = document.getElementById('printcontent') as HTMLElement;

		let pdf = new jsPDF('p', 'mm', 'a4');

		pdf.html(data, {
			callback: (pdf) => {
				pdf.output('dataurlnewwindow');
			},
		});
	}
}
