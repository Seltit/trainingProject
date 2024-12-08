import { Component, OnInit } from '@angular/core';
import { RequesterService } from '../requester.service';
import { environment } from '../../environments/environment.development';
import { Stock } from '../types/stock';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-galery',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './galery.component.html',
  styleUrl: './galery.component.css'
})
export class GaleryComponent implements OnInit {
  stock: Stock[] = [];
  constructor(private service: RequesterService) { }
  ngOnInit(): void {
    const url = environment.mainUrl + "classes/products"
    this.service.get(url, environment.options).subscribe((stock: any) => {

      this.stock = stock.results;
    });
  }
}