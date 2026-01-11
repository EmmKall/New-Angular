import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/app.routes';
import { RouterLink, RouterLinkActive } from "@angular/router";


@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
  imports: [RouterLink, RouterLinkActive]
})
export class SideMenuComponent implements OnInit {

  routes: {title: string, path: string}[] = routes.map(route => route.children ?? [])
  .flat()
  .filter(route => route && route.path)
  .filter( route => !route.path?.includes(':'))
  .map(route => {
    return {
      title: `${route.title}`,
      path: `${route.path}`,
    }
  });

  constructor() {
    /* routes.forEach(route => {
      if(route.children){
        const { children } = route;
        this.routes = children.map(child => {
          const childRoute = {
            title: `${child?.title}`,
            path: `${child?.path}`,
          }
          return childRoute
        });
        console.log(this.routes);
      }
    }); */
  }

  ngOnInit() {
  }

}
