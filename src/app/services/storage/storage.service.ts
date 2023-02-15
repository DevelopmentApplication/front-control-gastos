import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseAuth } from '@models/auth/auth.interface';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private router: Router) {}

  setCurrentSession(res: ResponseAuth): void {
    localStorage.setItem('access_token', JSON.stringify(res.jwt));
    localStorage.setItem('user', JSON.stringify(res.user));
    localStorage.setItem('rol', JSON.stringify(res.user.role));
  }

  clean(): void {
    localStorage.clear();
    this.router.navigate(['auth/signIn']);
  }
}