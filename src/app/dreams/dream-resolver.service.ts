import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";

import { Observable } from "rxjs";
import { DreamService } from "./dream.service";

interface Dream {
  dreamId: number;
  boardId: number;
  name: string;
  description: string;
  imagePath: string;
}

@Injectable()
export class DreamResolver implements Resolve<Dream> {
  constructor(private dreamService: DreamService) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<Dream> | Promise<Dream> | Dream {
    return this.dreamService.getDream( +route.params['boardId'], +route.params['dreamId']);
  }
}
