import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { of } from "rxjs";
import { AuthService } from "src/services/auth.service";
import { LoginComponent } from "../body/login.component";

describe('Login form component ' ,() => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;

    const AuthServiceSpy = jasmine.createSpyObj({
        signup() {
            return of(false);
        },
        login() {
            return of(false);
        },
    });

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports:[ReactiveFormsModule , HttpClientTestingModule, FormsModule],
            declarations:[LoginComponent],
            providers:[
                {provide:AuthService, use:AuthServiceSpy},
            ]
        });

        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance; 
        
        component.ngOnInit();
    })
    it('Form should be not valid initially', () => {
        expect(component.loginForm.valid).toBeFalse();
    });

    it('Form should not be valid after filling the username only',() => {
        component.loginForm.get('username')?.setValue('reda')

        expect(component.loginForm.get('username')?.valid).toBeTrue();
        expect(component.loginForm.valid).toBeFalse();
    });

    it('Form should be valid after filling username and password',() => {
        component.loginForm.get('username')?.setValue('reda')
        component.loginForm.get('password')?.setValue('reda')
        
        expect(component.loginForm.get('username')?.valid).toBeTrue();
        expect(component.loginForm.get('password')?.valid).toBeFalse();
        
        component.loginForm.get('password')?.setValue('redareda');
        
        expect(component.loginForm.valid).toBeTrue();
    });

    it('Submit button should be disabled', () => {
        component.loginForm.get('username')?.setValue('reda');
        
    })
})