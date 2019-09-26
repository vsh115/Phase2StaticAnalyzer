
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, async } from '@angular/core/testing';
import { stringify } from 'querystring';
import { browser } from 'protractor';
import { doesNotThrow } from 'assert';
import { CodeCsService } from './CodeCs.service';

describe('CodeCsService', () => {

    var originalTimeout;
    let service: CodeCsService;
    let httpMock: HttpTestingController;
    // configuring a module
    beforeEach(() => {

        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
        TestBed.configureTestingModule(
            {
                imports: [HttpClientTestingModule],
                providers: [CodeCsService]
            }
        );
        service = TestBed.get(CodeCsService);
        httpMock = TestBed.get(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });



    it('should generate the Code Report for checkstyle with POST', async function() {
        var csRep;
        const result = { data: 'NO-GO Count of Issues = -1  Files to process must be specified, found 0.' };
        
        service.getCsReport("vj").subscribe((result)=>csRep=result);
        
        const request = httpMock.expectOne('http://localhost:8080/api/code/cs/');
        expect(request.request.method).toBe('POST');
        request.flush(result);

        expect(csRep.data).toEqual(result.data);  
             

    });



    

});

    

