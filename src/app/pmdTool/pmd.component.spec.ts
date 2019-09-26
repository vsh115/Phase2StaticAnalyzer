import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { PmdService } from './pmd.service';

describe('PmdService', () => {

  var originalTimeout;
  let service: PmdService;
  let httpMock: HttpTestingController;
  // configuring a module
  beforeEach(() => {

      originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
      jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
      TestBed.configureTestingModule(
          {
              imports: [HttpClientTestingModule],
              providers: [PmdService]
          }
      );
      service = TestBed.get(PmdService);
      httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
      httpMock.verify();
  });


  it('should generate the Repository Report for Pmd with POST', async function() {
    var pmdRep;
    const result = { data: 'NO-GO Count of Issues = -1  Files to process must be specified, found 0.' };
    
    service.getPmdReport("vj").subscribe((result)=>pmdRep=result);
    
    const request = httpMock.expectOne('http://localhost:8080/api/pmd/');
    expect(request.request.method).toBe('POST');
    request.flush(result);

    expect(pmdRep.data).toEqual(result.data);  
         

});
});
