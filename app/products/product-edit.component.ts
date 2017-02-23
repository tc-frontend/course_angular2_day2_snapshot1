import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router  } from '@angular/router';


import { IProduct } from './product';
import { ProductService } from './product-mock.service';

@Component({
    templateUrl: 'app/products/product-edit.component.html'
})
export class ProductEditComponent implements OnInit, OnDestroy {
 
    pageTitle: string = 'Product Edit';


    errorMessage: string;
    product: IProduct;
    private sub: Subscription;


    constructor( private route: ActivatedRoute,
                private router: Router,
                private productService: ProductService) {
      
    }
    ngOnInit(): void {
        // Read the product Id from the route parameter
        this.sub = this.route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getProduct(id);
            }
        );
    }


    getProduct(id: number): void {
        this.productService.getProduct(id)
            .subscribe(
                (product: IProduct) => this.onProductRetrieved(product),
                (error: any) => this.errorMessage = <any>error
            );
    }

    onProductRetrieved(product: IProduct): void {
     
        this.product = product;

        if (this.product.id === 0) {
            this.pageTitle = 'Add Product';
            this.product.tags = [];
        } else {
            this.pageTitle = `Edit Product: ${this.product.productName}`;
        }

    }

    addTag(): void {
        if(!this.product.tags){
            this.product.tags = [];
        }
        this.product.tags.push('');
    }
    saveProduct(): void {
 
        this.productService.saveProduct(this.product)
            .subscribe(
                () => this.onSaveComplete(),
                (error: any) => this.errorMessage = <any>error
            );
    }

    onSaveComplete(): void {
        // Reset the form to clear the flags
        this.router.navigate(['/products']);
    }


    trackByIndex(index:number) {
        return index;
    }


    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
}