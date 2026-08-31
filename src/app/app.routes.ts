import { Routes } from '@angular/router';
import { LoginPage } from './features/auth/presentation/login.page';
import { RegisterPage } from './features/auth/presentation/register.page';
import { ForgotPasswordPage } from './features/auth/presentation/forgot-password.page';
import { ResetPasswordPage } from './features/auth/presentation/reset-password.page';
import { VerifyEmailPage } from './features/auth/presentation/verify-email.page';
import { ProfilePage } from './features/auth/presentation/profile.page';
import { authGuard, anonymousGuard } from './core/auth.guards';

export const routes: Routes = [
  { path: 'login', component: LoginPage, canActivate: [anonymousGuard] },
  { path: 'register', component: RegisterPage, canActivate: [anonymousGuard] },
  { path: 'forgot-password', component: ForgotPasswordPage, canActivate: [anonymousGuard] },
  { path: 'reset-password', component: ResetPasswordPage },
  { path: 'verify-email', component: VerifyEmailPage },
  { path: 'profile', component: ProfilePage, canActivate: [authGuard] },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: '**', redirectTo: 'login' }
];
