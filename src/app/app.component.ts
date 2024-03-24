import { Component } from '@angular/core';
import { RouterOutlet, RouterModule, ActivatedRoute, Router } from '@angular/router';
import { AccountComponent } from './account/account.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AccountComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  title = 'my-account-app';

  onSearchAccount(searchQuery: string) {
    this.router.navigate(['account-name', searchQuery]);
  }
}
