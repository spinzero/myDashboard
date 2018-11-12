import { Injectable, Inject } from '@angular/core';
import { Product } from './product.model';
import { Observable/*, of*/ } from 'rxjs';            //import { Observable } from 'rxjs/Rx';
//import { tap, filter, map } from 'rxjs/operators';

import 'rxjs/add/operator/mergeMap';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';
import 'firebase/storage';

@Injectable()
export class ProductService {

    private uid: string;
    private firebasestorage: any;

    initializeNew(): Product {
        return { name: '', sku: '', price: '', description: '', imageUrl: '' };
    }

    constructor(private afAuth: AngularFireAuth, private afd: AngularFireDatabase, fbApp: FirebaseApp) {
        this.afAuth.authState.subscribe(auth => {
            if (auth != undefined && auth != null)
                this.uid = auth.uid;
        }
        );
        this.firebasestorage = fbApp.storage();
    }

    /*
    addProduct(prod: Product, file: File) {
        if (this.uid != undefined && this.uid != null) {
            let key = 0;//this.afd.list('products').$ref.ref.push().key;
          //  let key = this.afd.list('products').ref.push().key;
            this.firebasestorage.ref(`products` + `/` + key + `/` + prod.name).put(file).then(
                snapshot => {
                    prod.imageUrl = snapshot.downloadURL;
                    this.afd.object('products/' + key).set(prod);
                });
        }
    }

    updateProduct(cas: Product, file: File) {
        if (this.uid != undefined && this.uid != null) {
            if (file != undefined && file != null) {
                this.firebasestorage.ref(`products` + `/` + cas.$key + `/` + file.name).put(file).then(
                    snapshot => {
                        cas.imageUrl = snapshot.downloadURL;
                        this.afd.object('products/' + cas.$key).update({ name: cas.name, sku: cas.sku, price: cas.price, description: cas.description, imageUrl: cas.imageUrl });
                    });
            }
            else {
                this.afd.object('products/' + cas.$key).update({ name: cas.name, sku: cas.sku, price: cas.price, description: cas.description, imageUrl: cas.imageUrl });
            }
        }
    }

    getProducts(): Observable<Product[]> {
        return this.afd.list('products').valueChanges();
    }

    deleteProduct(cas: Product) {
        if (this.uid != undefined && this.uid != null) {
            return this.afd.list('products').remove(cas.$key).then(
                onResolve => {
                    this.firebasestorage.ref(`products` + `/` + cas.$key + `/` + cas.name).delete().then(
                        snapshot => {
                            //console.log(snapshot.downloadURL);
                        });
                }
            );
        }
    }

    */
}
