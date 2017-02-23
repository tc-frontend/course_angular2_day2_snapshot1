import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute  } from '@angular/router';
import { IProduct } from './product';

@Component({
    templateUrl: 'app/products/product-edit.component.html'
})
export class ProductEditComponent implements OnInit, OnDestroy {
 
    pageTitle: string = 'Product Edit';
    private sub: Subscription;
    private product: IProduct;
   constructor( private route: ActivatedRoute) {
      
    }
    ngOnInit(): void {
        // Read the product Id from the route parameter
        this.sub = this.route.params.subscribe(
            params => {
                let id = +params['id'];
                this.pageTitle = `Edit Product: ${id}`;
            }
        );
    }

    addTag(): void {
        if(!this.product){
            this.product ={
                id: 0,
                productName: null,
                productCode: null,
                tags: [],
                releaseDate: null,
                price: null,
                description: null,
                starRating: null,
                imageUrl: null
            };
        }
        if(!this.product.tags){
            this.product.tags = [];
        }
        this.product.tags.push('');
    }

    trackByIndex(index:number) {
        return index;
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
}
