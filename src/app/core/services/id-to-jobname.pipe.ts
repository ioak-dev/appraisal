import { Pipe, PipeTransform } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { MatSnackBar } from '@angular/material';
import { AppState } from 'src/app/app-state';

@Pipe({
  name: 'idToJobname',
  pure: false
})
export class IdToJobnamePipe implements PipeTransform {
  users: any[] = [];
  users$ = this.store.pipe(select(state => state.users));


  constructor(private snackBar: MatSnackBar,
              private store: Store<AppState>) {
    this.users$.subscribe(
      result => {
        this.users = result;
      },
      error => {
        this.snackBar.open(error.message, error.statusText, {
          duration: 6000,
          panelClass: 'error'
        });
      }
    );
  }

  transform(id: string) {
    if (this.users.find(user => user.id === id)) {
      const value = this.users.find(user => user.id === id).job;
      return value;
    } else {
      return id;
    }
  }
}
