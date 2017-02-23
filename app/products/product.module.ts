import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';


import { ProductDetailGuard } from './product-guard.service';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';

import { SharedModule } from '../shared/shared.module';

import { ProductFilterPipe } from './product-filter.pipe';
import { ProductService } from './product.service';
import { ProductRoutingModule  } from './product-routing.module';


@NgModule({
  imports: [
    SharedModule,
    ProductRoutingModule
  ],
  declarations: [
    ProductFilterPipe,
    ProductListComponent,
    ProductDetailComponent
  ],
  providers: [
    ProductService,
    ProductDetailGuard
  ]
})
export class ProductModule {}
