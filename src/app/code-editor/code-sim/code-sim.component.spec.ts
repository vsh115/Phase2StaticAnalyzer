
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, async } from '@angular/core/testing';
import { stringify } from 'querystring';
import { browser } from 'protractor';
import { doesNotThrow } from 'assert';
import { CodeSimService } from './CodeSim.service';



describe('CodeSimService', () => {

    var originalTimeout;
    let service: CodeSimService;
    let httpMock: HttpTestingController;
    // configuring a module
    beforeEach(() => {

        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
        TestBed.configureTestingModule(
            {
                imports: [HttpClientTestingModule],
                providers: [CodeSimService]
            }
        );
        service = TestBed.get(CodeSimService);
        httpMock = TestBed.get(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });



    it('should generate the Code Report for checkstyle with POST', async function() {
        var simRep;
        const result = { data: 'NO-GO Count of Issues = -1  Files to process must be specified, found 0.' };
        
        service.getSimReport("vj").subscribe((result)=>simRep=result);
        
        const request = httpMock.expectOne('http://localhost:8080/api/code/sim/');
        expect(request.request.method).toBe('POST');
        request.flush(result);

        expect(simRep.data).toEqual(result.data);  
             

    });



    

});

    

