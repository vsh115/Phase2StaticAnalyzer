
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, async } from '@angular/core/testing';
import { CsService } from './cs.service';
import { stringify } from 'querystring';
import { browser } from 'protractor';
import { doesNotThrow } from 'assert';

describe('CsService', () => {

    var originalTimeout;
    let service: CsService;
    let httpMock: HttpTestingController;
    // configuring a module
    beforeEach(() => {

        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
        TestBed.configureTestingModule(
            {
                imports: [HttpClientTestingModule],
                providers: [CsService]
            }
        );
        service = TestBed.get(CsService);
        httpMock = TestBed.get(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });



    it('should generate the Repository Report for checkstyle with POST', async function() {
        var csRep;
        const result = { data: 'NO-GO Count of Issues = -1  Files to process must be specified, found 0.' };
        
        service.getCsReport("vj").subscribe((result)=>csRep=result);
        
        const request = httpMock.expectOne('http://localhost:8080/api/cs/');
        expect(request.request.method).toBe('POST');
        request.flush(result);

        expect(csRep.data).toEqual(result.data);  
             

    });



    //   it('works with promises', () => {
    //     expect.assertions(1);
    //     return user.getUserName(4).then(data => expect(data).toEqual('Mark'));
    //   });

});

    // it('should download a legacy project of new user with POST', () => {

    //     const resultList: any[] = [
    //       { projectid: 1, status: "GO" }]
    //     service.downloadNewOldProject("git").subscribe(res => {
    //       expect(res).toEqual(resultList);
    //     });
    //     const request = httpMock.expectOne('http://localhost:8080/api/checkertools/newuser/legacyproject/filepathofgit');

    //     expect(request.request.method).toBe('POST');

    //     request.flush(resultList);

    //   });

    //   it('should download a legacy project of new user with POST', () => {

    //     const resultList: any[] = [
    //       { projectid: 1, status: "NO GO" }]
    //     service.downloadOldProject("git",1).subscribe(res => {
    //       expect(res).toEqual(resultList);
    //     });
    //     const request = httpMock.expectOne('http://localhost:8080/api/checkertools/existinguser/oldproject/files/1');

    //     expect(request.request.method).toBe('POST');

    //     request.flush(resultList);

    //   });

