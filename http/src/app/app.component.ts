import { Component, OnInit } from '@angular/core';
import { ProductService } from './service/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'http';

  constructor(
    private productService: ProductService,
  ) {}

  ngOnInit(): void {
    this.productService.getAll().subscribe(
      products => console.log(products),
      err => console.error(err),
      () => console.log('Completed'),
    );
  }
}
