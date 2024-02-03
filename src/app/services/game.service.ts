import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  http = inject(HttpClient)

  url:string = 'https://api.rawg.io/api/games?key=546121027b7a48cea28c2f563bffa660'

  getData() {
    return this.http.get(this.url)
      .pipe(
        retry(1),
        catchError(error => throwError(() => `Something went wrong: ${error}`))
      );
  }
}
