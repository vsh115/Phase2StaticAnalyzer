import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { SimService } from './sim.service';

describe('SimService', () => {

  var originalTimeout;
  let service: SimService;
  let httpMock: HttpTestingController;
  // configuring a module
  beforeEach(() => {

      originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
      jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
      TestBed.configureTestingModule(
          {
              imports: [HttpClientTestingModule],
              providers: [SimService]
          }
      );
      service = TestBed.get(SimService);
      httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
      httpMock.verify();
  });


  it('should generate the Repository Report for Simian with POST', async function() {
    var simRep;
    const result = { data: 'NO-GO Count of Issues = -1  Files to process must be specified, found 0.' };
    
    service.getSimReport("vj").subscribe((result)=>simRep=result);
    
    const request = httpMock.expectOne('http://localhost:8080/api/sim/');
    expect(request.request.method).toBe('POST');
    request.flush(result);

    expect(simRep.data).toEqual(result.data);  
         

});
});
