import { Route } from "@angular/compiler/src/core";
import { CanActivate } from "@angular/router/src/utils/preactivation";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

const routes : Route = [
    {
        path: '',
        component: RotaPolylineComponent,
        canActivate: [AuthoGuard]
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RotaPolylineModule {}