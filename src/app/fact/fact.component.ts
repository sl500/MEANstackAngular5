import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fact',
  templateUrl: './fact.component.html',
  styleUrls: ['./fact.component.css']
})
export class FactComponent implements OnInit {
  facts: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/fact').subscribe(data => {
      this.facts = data;
    });
  }
}
