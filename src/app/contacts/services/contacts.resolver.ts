import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { filter, first, Observable, tap } from 'rxjs';
import { ContactEntityService } from './contact-entity.service';

@Injectable({
  providedIn: 'root'
})
export class ContactsResolver implements Resolve<boolean> {

  constructor(private contactEntityService: ContactEntityService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    // Fetch all contacts from the server and add them to the store if not already loaded
    return this.contactEntityService.loaded$
      .pipe(
        tap(loaded => {
          if (!loaded) {
            this.contactEntityService.getAll();
          }
        }),
        filter(loaded => !!loaded), // Wait until the contacts are loaded
        first() // Complete the observable AND the transition. Continue to the route
      );
  }
}
