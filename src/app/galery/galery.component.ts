import { Component, OnInit } from '@angular/core';
import { RequesterService } from '../requester.service';
import { environment } from '../../environments/environment.development';

@Component({
  selector: 'app-galery',
  standalone: true,
  imports: [],
  templateUrl: './galery.component.html',
  styleUrl: './galery.component.css'
})
export class GaleryComponent implements OnInit {
  constructor(private service: RequesterService) { }

  ngOnInit(): void {
    const url = environment.mainUrl + "classes/products"
    const method = 'get'
    this.service.get(url, environment.options).subscribe((d) => {

      console.log(d);


    });

  }

}
