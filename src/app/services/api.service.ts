import {Request, Response} from 'angular2/http';
import {RESTClient, GET, PUT, POST, DELETE, BaseUrl, Headers, DefaultHeaders, Path, Body, Query} from 'angular2-rest';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable()
@BaseUrl("http://5862365a4dad0912007f547d.mockapi.io/api")
@DefaultHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
})
export class ApiService extends RESTClient {
    @GET("/docs")
    public getDocs(): Observable { return null; };
}