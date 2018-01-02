import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fact-create',
  templateUrl: './fact-create.component.html',
  styleUrls: ['./fact-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FactCreateComponent implements OnInit {
  
  fact = {};

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  saveFact() {
    this.http.post('/fact', this.fact)
      .subscribe(res => {
          let id = res['_id'];
          //this.router.navigate(['/fact-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }
}
