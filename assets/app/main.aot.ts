import './polyfills';
import {enableProdMode} from "@angular/core";
import {AppModuleNgFactory} from "./app.module.ngfactory";
import {platformBrowser} from "@angular/platform-browser";


enableProdMode();

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);