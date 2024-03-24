import { Routes } from '@angular/router';
import { FaqComponent } from './faq/faq.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AccountComponent } from './account/account.component';
import { filterAccessToAccountGuard } from './guards/filter-access-to-account.guard';
import { AccountListComponent } from './account-list/account-list.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

export const routes: Routes = [
  { path: 'account-name/:name', component: AccountListComponent },
  { path: 'accounts', component: AccountListComponent },
  { path: 'accounts/:id', component: AccountComponent, canActivate: [filterAccessToAccountGuard] },
  { path: 'faq', component: FaqComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'auth', component: AuthComponent, children: [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
  ] },
  { path: "**", component: NotfoundComponent }
];
