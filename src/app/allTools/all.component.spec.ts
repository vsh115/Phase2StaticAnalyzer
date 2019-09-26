import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllComponent } from './all.component';
import { AllService } from './all.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

describe('AllService', () => {

  var originalTimeout;
  let service: AllService;
  let httpMock: HttpTestingController;
  // configuring a module
  beforeEach(() => {

      originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
      jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
      TestBed.configureTestingModule(
          {
              imports: [HttpClientTestingModule],
              providers: [AllService]
          }
      );
      service = TestBed.get(AllService);
      httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
      httpMock.verify();
  });


  it('should generate the Repository Report for All Tools with POST', async function() {
    var allRep;
    const result = { data: 'NO-GO Count of Issues = -1  Files to process must be specified, found 0.' };
    
    service.getAllReport("vj").subscribe((result)=>allRep=result);
    
    const request = httpMock.expectOne('http://localhost:8080/api/all/');
    expect(request.request.method).toBe('POST');
    request.flush(result);

    expect(allRep.data).toEqual(result.data);  
         

});
});
