import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/products';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  products: Products[] = [
    {
      imagem: 'assets/products/banner1.png',
      nome: 'Blazer Masculino',
      descricao: 'New Arrival',
      preco: '289.45'
    },
    {
      imagem: 'assets/products/banner2.png',
      nome: 'Vestido Cetin Roxo',
      descricao: 'New Arrival',
      preco: '3.279'
    },
    {
      imagem: 'assets/products/banner3.png',
      nome: 'Tênis Corrida',
      descricao: 'New Arrival',
      preco: '119.00'
    },
    {
      imagem: 'assets/products/banner4.png',
      nome: 'Smart Watch',
      descricao: 'New Arrival',
      preco: '120.00'
    },
    {
      imagem: 'assets/products/delta.png',
      nome: 'Bota Motociclista',
      descricao: 'New Arrival',
      preco: '875.00'
    },
    {
      imagem: 'assets/products/feature_3.png',
      nome: 'Tênis Corrida',
      descricao: 'Alta Performance',
      preco: '429.00'
    },
    {
      imagem: 'assets/products/image2.png',
      nome: 'Sandália Anabella',
      descricao: 'New Arrival',
      preco: '119.00'
    },
    {
      imagem: 'assets/products/image3.png',
      nome: 'Tenis 12 Molas',
      descricao: 'New Arrival',
      preco: '475.00'
    },
    {
      imagem: 'assets/products/img08.jpg',
      nome: 'Ração Para Gatos',
      descricao: 'New Arrival',
      preco: '27.00'
    },
    {
      imagem: 'assets/products/img09.jpg',
      nome: 'Vermífugo',
      descricao: 'New Arrival',
      preco: '14.00'
    }
  ];

  currentIndex = 0;
  cardWidth = 330; // Largura do card + margem (ajuste conforme seu estilo)

  left_mover() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  right_mover() {
    const maxIndex = this.products.length - 5; // Mostrar 4 cards por vez
    if (this.currentIndex < maxIndex) {
      this.currentIndex++;
    }
  }








}




