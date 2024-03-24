import { CanActivateFn } from '@angular/router';

export const filterAccessToAccountGuard: CanActivateFn = (route, state) => {
  const id = parseInt(route.params['id']);

  return !(id === 1);
};
