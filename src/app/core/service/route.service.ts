import { ShellComponent } from '../shell/shell.component'
import { AuthenticationGuard } from '../authentication/authentication.guard'
import { Route, Routes } from '@angular/router'
import { AuthenticationService } from '../authentication/authentication.service'

export class RouteService {

  static withShell(routes: Routes): Route {
    return {
      path:  '',
      component: ShellComponent,
      children: routes,
      canActivate: [ AuthenticationGuard ],
      data: { reuse: true }
    }
  }

}
