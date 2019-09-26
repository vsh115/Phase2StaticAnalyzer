
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CsService } from './cs.service';
import { stringify } from 'querystring';
import { browser } from 'protractor';

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
    


    it('should download a new project of new user with POST', async () => {

      const result: any = "NO-GO Count of Issues = -1  Files to process must be specified, found 0.";
      var csRep:String = (await service.getCsReport("vj")).data;
        expect(csRep).toEqual(result);
        const request = httpMock.expectOne('http://localhost:8080/api/cs');
  
      expect(request.request.method).toBe('POST');
  
        request.flush(result);
      });
      
  
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

