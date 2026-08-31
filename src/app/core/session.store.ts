import { Injectable, computed, signal } from '@angular/core';
import { AuthStatus, CurrentUser, SessionResponse } from '../features/auth/domain/auth.models';
@Injectable({providedIn:'root'}) export class SessionStore {
  private readonly token=signal<string|null>(null);
  private readonly state=signal<AuthStatus>('unknown');
  private readonly profile=signal<CurrentUser|null>(null);
  readonly status=this.state.asReadonly();
  readonly user=this.profile.asReadonly();
  readonly authenticated=computed(()=>this.state()==='authenticated');
  accessToken(){return this.token();} restoring(){this.state.set('restoring');}
  setSession(s:SessionResponse){this.token.set(s.accessToken);if(s.user)this.profile.set(s.user);this.state.set('authenticated');}
  setUser(u:CurrentUser){this.profile.set(u);this.state.set('authenticated');}
  clear(){this.token.set(null);this.profile.set(null);this.state.set('anonymous');}
}
