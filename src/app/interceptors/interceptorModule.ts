import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from '../interceptors/auth-interceptor.service';



export const interceptorModules = [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}
]