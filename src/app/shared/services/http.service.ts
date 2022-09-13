import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CustomerInterface} from "../types/customer.interface";
import {RequestCustomerInterface} from "../types/requestCustomer.interface";
import {ResponseCustomerInterface} from "../types/responseCustomer.interface";

const url = environment.dbUrl;
const httpOptions = {
    headers: new HttpHeaders({
        'content-type': 'application/json'
    })
}

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    customers: CustomerInterface[] = [];

    constructor(private http: HttpClient) {
    }

    createData(): void {
        const data: CustomerInterface = {
            name: 'tiffany',
            email: 'tiffany.doe@example.com',
            mobile: '+380636942069',
            location: 'Chirik'
        }
        this.http.post<RequestCustomerInterface>(`${url}customers.json`, data, httpOptions).subscribe({
            next: (res) => {

            }
        })
    }

    getData(): void {
        this.http
            .get<ResponseCustomerInterface>(`${url}customers.json`, httpOptions)
            .subscribe({
                next: (res) => {
                    Object.keys(res).forEach(key => this.customers.push({key, ...res[key]}))
                    console.log(this.customers)
                },
                error: err => console.log(err)
            })
    }

    updateData(): void {

    }

    deleteData(): void {

    }

}
