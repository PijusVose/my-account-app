import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  constructor(private router: Router) {}

  onRouteBtnClicked(routePath: string) {
    this.router.navigate(['auth', routePath]);
  }
}
