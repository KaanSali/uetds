import { Injectable } from "@angular/core";
import * as localForage from "localforage";

@Injectable()
export class LocalStoreService {
    loginsession = localForage.createInstance({
        name: 'login'
      });
}   