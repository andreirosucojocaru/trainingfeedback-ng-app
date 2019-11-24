import { ApplicationConfiguration } from './../shared/application-configuration';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  authenticated: boolean = true;

  constructor(private router: Router,
    private http: HttpClient) { }

  signin(username: string, password: string) {
    this.http.get<boolean>(ApplicationConfiguration.API_ENDPOINT + '/login', {
      params: {
        username: username,
        password: password
      }
    }).subscribe(
      result => this.authenticated = result
    );
  }

  signup(username: string, password: string) {

  }

  logout() {
    this.authenticated = false;
  }

  isAuthenticated() {
    return this.authenticated;
  }

}
