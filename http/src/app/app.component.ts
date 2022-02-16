import { Component, OnInit } from '@angular/core';
import { Product } from './model/product';
import { ConfigService, ITableColumn } from './service/config.service';
import { ProductService } from './service/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'http';

}
