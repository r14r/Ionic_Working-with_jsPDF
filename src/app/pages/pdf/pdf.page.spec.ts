import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PDFPage } from './pdf.page';

describe('PDFPage', () => {
  let component: PDFPage;
  let fixture: ComponentFixture<PDFPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PDFPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PDFPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
