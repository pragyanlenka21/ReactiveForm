import { Component } from '@angular/core';
import { CommonService } from '../services/common.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  myData: any[] = [];

  constructor(private common: CommonService, private route: ActivatedRoute) {


  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const category = params['category'];
      const search = params['search'];
      if (category) {
        this.getProductByCategory(category);
      } else if (search) {
        this.getProductSearch(search);
      } else {
        this.getdata();
      }



    });


  }

  getdata() {
    this.common.getProducts().subscribe({
      next: (response) => {
        // this.showLoader = false;
        this.myData = response.products;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete');
      }
    });
  }

  getProductByCategory(category: any) {
    this.common.getProductByCategories(category).subscribe({
      next: (response: any) => {
        // this.showLoader = false;
        this.myData = response.products;
        // this.showLoader = false;
      },
      error: (err) => {

        console.log(err);
      },
      complete: () => {
        console.log('complete');
      }
    });
  }

  getProductSearch(s: any) {
    this.common.getProductBySearch(s).subscribe({
      next: (response: any) => {
        // this.showLoader = false;
        this.myData = response.products;
        // this.showLoader = false;
      },
      error: (err) => {

        console.log(err);
      },
      complete: () => {
        console.log('complete');
      }
    });
  }



}
