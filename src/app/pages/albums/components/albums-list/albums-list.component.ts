import { Component, OnInit } from '@angular/core';
import { Subscription, BehaviorSubject } from 'rxjs';
import { albums } from 'src/app/models/albums/albums';
import { AlbumsService } from '../../services/albums.service';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.scss']
})
export class AlbumsListComponent implements OnInit {
  private _subscription: Subscription = new Subscription();
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isError$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  albumsList: albums[] = [];
  page = 1;
  pageSize = 10;
  constructor(
    private _albumsServices : AlbumsService,
  ) { }

  ngOnInit(): void {
    this.GetAll();
  }

  private GetAll(){
    this.isLoading$.next(true);
    this._albumsServices.GetAll().subscribe(data=> {
      //console.log(data);
      this.albumsList = data;
      this.isLoading$.next(false);
    }, err => {
      console.log(err); 
      this.isLoading$.next(false);
      this.isError$.next(true);
    })
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }
}
