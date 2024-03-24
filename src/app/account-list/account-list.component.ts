import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

interface Account {
  id: number,
  name: string;
  balance: number,
  imageUrl: string
}

@Component({
  selector: 'app-account-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './account-list.component.html',
  styleUrl: './account-list.component.scss'
})

export class AccountListComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  accounts: Account[] = [{
    id: 1,
    name: 'Savings account',
    balance: 100,
    imageUrl: 'https://static.vecteezy.com/system/resources/previews/021/314/124/original/bank-account-icon-design-free-vector.jpg'
  },
  {
    id: 2,
    name: 'Checking account',
    balance: 200,
    imageUrl: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Gd7PFElWOhvj1BotdMoTBw.jpeg'
  }]

  accountsToShow: Account[] = this.accounts;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((data) => {
      const searchQuery = (data.get('name') || '').toLowerCase();

      if (searchQuery.length > 0) {
        this.accountsToShow = this.accounts.filter((account) => {
          return account.name.toLowerCase().startsWith(searchQuery);
        });
      } else {
        this.accountsToShow = this.accounts;
      }
    });
  }
}
