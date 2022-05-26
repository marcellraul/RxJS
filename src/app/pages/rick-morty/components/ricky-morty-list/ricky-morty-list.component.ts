import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Subscription, BehaviorSubject } from 'rxjs';
import { character } from 'src/app/models/rick-morty/character';
import { RickMortyService } from '../../services/rick-morty.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-ricky-morty-list',
  templateUrl: './ricky-morty-list.component.html',
  styleUrls: ['./ricky-morty-list.component.scss']
})
export class RickyMortyListComponent implements OnInit {
  private _subscription: Subscription = new Subscription();
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  characteresList: character[] = [];
  page = 0;
  count: number = 0;

  constructor(private _rickMortyServices: RickMortyService,) {
    //this.getCharacters(1);
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }
  
  private getCharacters(paginate) {
    //console.log(paginate);
    const arrayParams = [
      `page,${paginate}`,
    ];
    this.isLoading$.next(true);
    this._subscription  = this._rickMortyServices.GetAllCharacters(arrayParams).subscribe((data: any) => {
      this.characteresList = data.results;
      this.count = data.info.count/2;
      this.isLoading$.next(false);
    },
      err => {
        console.log(err);
        this.isLoading$.next(false);
      });
  }


 
}
