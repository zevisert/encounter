import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

// Component declarations
import { AppComponent }   from "./app.component";
import { AboutComponent } from "./about.component";
import { BlogComponent } from "./blog.component";
import { PostComponent } from "./post.component";
import { DashboardComponent } from "./dashboard.component";

// Service declarations
import { BlogService } from "./blog.service";
import { AuthService } from "./auth.service";
import { AuthGuard } from "./auth.guard";
import { provideAuth } from "angular2-jwt";

// Pipe declarations
import { TrustHtml } from "./trust.pipe";

// Other declarations
import { routing } from "./app.routing";
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

import "./rxjs-extensions";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        Ng2Bs3ModalModule,
        routing
    ],

    declarations: [
        AppComponent,
        AboutComponent,
        BlogComponent,
        PostComponent,
        DashboardComponent,
        TrustHtml
    ],

    entryComponents: [
        
    ],

    providers: [
        BlogService,
        AuthService,
        AuthGuard,
        provideAuth({
            headerName: "x-access-token",
            tokenName: "blog_auth",
            noTokenScheme: true,
            tokenGetter: () => localStorage.getItem("blog_auth")
        })
    ],

    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
