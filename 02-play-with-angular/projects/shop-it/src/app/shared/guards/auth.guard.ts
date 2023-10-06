import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  // condition to check if user is logged in
  return confirm('do you activate this route?');
};
