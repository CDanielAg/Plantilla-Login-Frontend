import { inject } from '@angular/core';import { Router } from '@angular/router';import { map } from 'rxjs';import { AuthFacade } from '../features/auth/application/auth.facade';
export const authGuard=()=>{const a=inject(AuthFacade),r=inject(Router);return a.restore().pipe(map(ok=>ok||r.createUrlTree(['/login'])));};
export const anonymousGuard=()=>{const a=inject(AuthFacade),r=inject(Router);return a.restore().pipe(map(ok=>ok?r.createUrlTree(['/profile']):true));};
