import { createAction, props } from "@ngrx/store";

export const authLogin=createAction("[Auth] Login",props<{email:string,password:string}>());
