export type AuthStatus = 'unknown' | 'restoring' | 'anonymous' | 'authenticated';
export interface CurrentUser { id:string; displayName:string; email:string; emailVerified:boolean; createdAt?:string; lastLoginAt?:string|null; }
export interface SessionResponse { accessToken:string; tokenType:'Bearer'; expiresIn:number; user?:CurrentUser; }
export interface ProblemDetails { code:string; detail:string; correlationId?:string; fieldErrors?:Array<{field:string;code:string;message:string}>; }
