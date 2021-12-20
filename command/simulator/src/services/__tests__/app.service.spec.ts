import { TestBed } from "@angular/core/testing";
import { AppService } from "../app.service";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HttpErrorResponse, HttpRequest } from "@angular/common/http";

describe('Testing app service' , () => {
    let appService: AppService;
    let controller:HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
        });

        appService = TestBed.inject(AppService);
        controller = TestBed.inject(HttpTestingController);
    });

    it('Should create app service',async () => {
        expect(appService).toBeTruthy();
    });

    it('Should send a hand shake' ,() => {
        let handShakeResponse: {message:string} | undefined;
        appService.serverHandshake().subscribe((result) => {
            handShakeResponse = result as any;
        });

        const request = controller.expectOne(appService.getApiUrl());
        
        request.flush({
            message:"hello world",
        })

        controller.verify();
        
        expect(handShakeResponse).toEqual({
            message:"hello world",
        })
    });

    it('Should return an error when hand shake fails' , () => {
        const status = 500;
        const statusText = 'Internal Server Error';
        const errorEvent = new ErrorEvent('API error');

        let actualError: HttpErrorResponse | undefined;

        appService.serverHandshake().subscribe(
            () => {
                fail('next handler must not be called')
            },
            (error) => {
                actualError = error as any;
            }
        )

        const request = controller.expectOne({
            method:'GET',
            url:appService.getApiUrl()
        });

        request.error(
            errorEvent,
            {status,
            statusText}
        )

        expect(actualError?.status).toEqual(status);
        expect(actualError?.statusText).toEqual(statusText);
    })
})