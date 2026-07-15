import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { RegisterService } from './services/register.service';

export const authGuard: CanActivateFn = (route, state) => {
  const register = inject(RegisterService)
  const router = inject(Router)

  const user = register.registerValues()
  if(user && user.name){
    return true
  }
  router.navigate(['/register'])
  return false;

};
