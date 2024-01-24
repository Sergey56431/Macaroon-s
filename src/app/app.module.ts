import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { ProductsComponent } from './components/products/products.component';
import { ButtonColorsDirective } from './directives/button-colors.directive';
import { PhoneEditorPipe } from './pipes/phone-editor.pipe';
import { TextLenghtEditorPipe } from './pipes/text-lenght-editor.pipe';
import { AdvantagesComponent } from './components/advantages/advantages.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ButtonColorsDirective,
    PhoneEditorPipe,
    TextLenghtEditorPipe,
    AdvantagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
