import { createAction, props } from "@ngrx/store";
export const authenticateSuccess = createAction("[Auth] Login", props<{ email: string, userId: string, token: string, expirationDate: Date, redirect: boolean }>());
export const loginStart = createAction("[Auth] Login Start", props<{ email: string, password: string }>());
export const signupStart=createAction('[Auth] Signup Start', props<{email:string,password:string}>());
export const authenticateFail=createAction('[Auth] Login Fail', props<{message:string}>());
export const logout=createAction('[Auth] Logout');
export const autoLogin=createAction('[Auth] Auto Login');
