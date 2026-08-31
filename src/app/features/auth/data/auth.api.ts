import { HttpClient } from '@angular/common/http'; import { Injectable } from '@angular/core'; import { CurrentUser,SessionResponse } from '../domain/auth.models';
@Injectable({providedIn:'root'}) export class AuthApi { private readonly base='/api/v1'; constructor(private http:HttpClient){}
 register(body:{displayName:string;email:string;password:string;termsAccepted:boolean}){return this.http.post<{status:string;maskedEmail:string;resendAvailableInSeconds:number}>(`${this.base}/auth/register`,body);}
 verifyEmail(token:string){return this.http.post<void>(`${this.base}/auth/verify-email`,{token});} resendVerification(email:string){return this.http.post(`${this.base}/auth/resend-verification`,{email});}
 login(email:string,password:string){return this.http.post<SessionResponse>(`${this.base}/auth/login`,{email,password});} refresh(){return this.http.post<SessionResponse>(`${this.base}/auth/refresh`,{});} logout(){return this.http.post<void>(`${this.base}/auth/logout`,{});}
 forgotPassword(email:string){return this.http.post(`${this.base}/auth/forgot-password`,{email});} resetPassword(token:string,newPassword:string){return this.http.post<void>(`${this.base}/auth/reset-password`,{token,newPassword});}
 changePassword(currentPassword:string,newPassword:string){return this.http.post<void>(`${this.base}/auth/change-password`,{currentPassword,newPassword});} profile(){return this.http.get<CurrentUser>(`${this.base}/users/me`);} updateProfile(displayName:string){return this.http.patch<CurrentUser>(`${this.base}/users/me`,{displayName});}
}
