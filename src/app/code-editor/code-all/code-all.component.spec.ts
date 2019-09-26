
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, async } from '@angular/core/testing';
import { stringify } from 'querystring';
import { browser } from 'protractor';
import { doesNotThrow } from 'assert';
import { CodeAllService } from './codeAll.service';

describe('CodeAllService', () => {

    var originalTimeout;
    let service: CodeAllService;
    let httpMock: HttpTestingController;
    // configuring a module
    beforeEach(() => {

        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
        TestBed.configureTestingModule(
            {
                imports: [HttpClientTestingModule],
                providers: [CodeAllService]
            }
        );
        service = TestBed.get(CodeAllService);
        httpMock = TestBed.get(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });



    it('should generate the Code Report for checkstyle with POST', async function() {
        var allRep;
        const result = { data: 'NO-GO Count of Issues = -1  Files to process must be specified, found 0.' };
        
        service.getAllReport("vj").subscribe((result)=>allRep=result);
        
        const request = httpMock.expectOne('http://localhost:8080/api/code/all/');
        expect(request.request.method).toBe('POST');
        request.flush(result);

        expect(allRep.data).toEqual(result.data);  
             

    });



    

});

    

