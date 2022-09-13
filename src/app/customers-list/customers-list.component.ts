import {Component, OnInit} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpService} from "../shared/services/http.service";

@Component({
    selector: 'crud-customers-list',
    templateUrl: './customers-list.component.html',
    styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

    constructor(public httpService: HttpService) {
    }

    ngOnInit(): void {
        console.log(environment.dbUrl)
        this.httpService.getData()
    }

}
