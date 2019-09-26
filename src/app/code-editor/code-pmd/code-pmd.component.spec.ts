
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, async } from '@angular/core/testing';
import { stringify } from 'querystring';
import { browser } from 'protractor';
import { doesNotThrow } from 'assert';
import { CodePmdService } from './CodePmd.service';


describe('CodePmdService', () => {

    var originalTimeout;
    let service: CodePmdService;
    let httpMock: HttpTestingController;
    // configuring a module
    beforeEach(() => {

        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
        TestBed.configureTestingModule(
            {
                imports: [HttpClientTestingModule],
                providers: [CodePmdService]
            }
        );
        service = TestBed.get(CodePmdService);
        httpMock = TestBed.get(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });



    it('should generate the Code Report for checkstyle with POST', async function() {
        var pmdRep;
        const result = { data: 'NO-GO Count of Issues = -1  Files to process must be specified, found 0.' };
        
        service.getCodePmdReport("vj").subscribe((result)=>pmdRep=result);
        
        const request = httpMock.expectOne('http://localhost:8080/api/code/pmd/');
        expect(request.request.method).toBe('POST');
        request.flush(result);

        expect(pmdRep.data).toEqual(result.data);  
             

    });



    

});

    

