import { Injectable,inject,signal } from '@angular/core'; import { Router } from '@angular/router'; import { catchError,finalize,of,switchMap,tap } from 'rxjs'; import { SessionStore } from '../../../core/session.store'; import { AuthApi } from '../data/auth.api';
@Injectable({providedIn:'root'}) export class AuthFacade { private readonly api=inject(AuthApi);private readonly store=inject(SessionStore);private readonly router=inject(Router);readonly busy=signal(false);readonly status=this.store.status;readonly user=this.store.user;
 restore(){if(this.store.status()!=='unknown')return of(this.store.authenticated());this.store.restoring();return this.api.refresh().pipe(tap(s=>this.store.setSession(s)),switchMap(()=>this.api.profile()),tap(u=>this.store.setUser(u)),switchMap(()=>of(true)),catchError(()=>{this.store.clear();return of(false);}));}
 login(email:string,password:string){this.busy.set(true);return this.api.login(email,password).pipe(tap(s=>this.store.setSession(s)),finalize(()=>this.busy.set(false)));}
 logout(){this.busy.set(true);return this.api.logout().pipe(finalize(()=>{this.store.clear();this.busy.set(false);this.router.navigateByUrl('/login');}));}
}
