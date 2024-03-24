import { Component, OnInit} from '@angular/core';
import { BalanceComponent } from '../balance/balance.component';
import { ActivatedRoute } from '@angular/router';
import { stringify } from 'querystring';

interface Account {
  name: string;
  balance: number
}

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [BalanceComponent],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((data) => {
      let id: number = parseInt(data.get('id') || '');
      id--;

      if (id >= 0 && id < this.accounts.length) {
        this.accountsToShow = [this.accounts[id]];
      }
      else {
        this.accountsToShow = this.accounts;
      }
    });
  }

  accounts: Account[] = [{
    name: 'Savings account',
    balance: 100
  },
  {
    name: 'Checking account',
    balance: 200
  }]

  accountsToShow: Account[] = this.accounts

  withdraw(account: Account, amount: number) {
    account.balance -= amount;
  }
  deposit(account: Account, amount: number) {
    account.balance += amount;
  }
}
