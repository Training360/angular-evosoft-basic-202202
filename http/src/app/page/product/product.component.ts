import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ITableColumn, ConfigService } from 'src/app/service/config.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productList: Product[] = [];

  productCols: ITableColumn[] = this.config.productTableColumns;

  constructor(
    private productService: ProductService,
    private config: ConfigService,
    private router: Router,
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

  startEdit(product: Product): void {
    this.router.navigate(['/', 'product', 'edit', product.id]);
  }

}
