import { SuppliersComponent } from "./components/suppliers/suppliers.component";
import { StocksComponent } from "./components/stocks/stocks.component";
import { ProductsComponent } from "./components/products/products.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "Products", component: ProductsComponent },
  { path: "Stocks", component: StocksComponent },
  { path: "Suppliers", component: SuppliersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
