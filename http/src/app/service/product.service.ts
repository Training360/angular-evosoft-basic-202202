import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { Product } from '../model/product';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseService<Product> {

  private categories: string[] = [];

  get categoryList$(): Observable<string[]> {
    if (this.categories.length < 1) {
      return this.getAll().pipe(
        map( () => this.categories )
      );
    }
    return of(this.categories);
  }

  constructor(
    http: HttpClient,
  ) {
    super(http);
    this.entityName = 'products';
  }

  public override getAll(): Observable<Product[]> {
    return super.getAll().pipe(
      tap( products => {
        const categorySet = new Set<string>();
        for (const product of products) {
          categorySet.add(product.category);
        }
        this.categories = Array.from(categorySet.values());
      }),
    )
  }

}
