import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

const API = environment.ApiUrl;

@Injectable({ providedIn: 'root' })
export class EventService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<any[]>(API + "/event")
    }


    getById(identifier: string) {
        return this.http.get<any>(API + "/event/" + identifier)
    }
}