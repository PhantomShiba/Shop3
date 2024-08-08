import {Component, Input} from '@angular/core';
import {Product} from "../../models/product.model";

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() product!: Product;
}
