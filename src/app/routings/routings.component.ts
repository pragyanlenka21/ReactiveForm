import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonService } from '../services/common.service';
import { filter } from 'rxjs';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-routings',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './routings.component.html',
  styleUrl: './routings.component.css'
})
export class RoutingsComponent {
  categories: any[] = [];

  searchTerm :string= '';

  constructor(private common: CommonService, private router: Router) { }

  ngOnInit() {
    this.getCategoryList();
  }

  getCategoryList() {
    this.common.getCategory().subscribe((response: any) => {
      this.categories = response;
    });
  }

  search(){
     this.router.navigate(['/product-list'], 
      { queryParams: { search: this.searchTerm}
    });
  }

  getCategory(category: any) {
    this.router.navigate(['/product-list'], 
      { queryParams: { category: category, search: ''}
    });
  }

}
