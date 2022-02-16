import { Component, OnInit } from '@angular/core';
import { Product } from './model/product';
import { ConfigService, ITableColumn } from './service/config.service';
import { ProductService } from './service/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'http';

  productList: Product[] = [];

  productCols: ITableColumn[] = this.config.productTableColumns;

  constructor(
    private productService: ProductService,
    private config: ConfigService,
  ) {}

  ngOnInit(): void {
    this.productService.getAll().subscribe(
      products => this.productList = products,
      err => console.error(err),
      () => console.log('Completed'),
    );
  }

  startDelete(product: Product): void {
    this.productService.delete(product.id).subscribe(
      () => {},
    );
  }

}
