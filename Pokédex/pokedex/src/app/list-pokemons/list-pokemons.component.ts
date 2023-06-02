import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-list-pokemons',
  templateUrl: './list-pokemons.component.html',
  styleUrls: ['./list-pokemons.component.css']
})
export class ListPokemonsComponent implements OnInit {

  showListFoudre: boolean = false;
  showListFeu: boolean = false;
  showListPlantes: boolean = false;
  //Pokemons foudre
  pokemonsFoudre: Pokemon[] = [
    {
      id: 1,
      nom: 'Pikachu',
      taille: 0.4,
      evolution: 'Raichu',
      faiblesses: ['Sol', 'Combat'],
      attaques: ['Eclair', 'Tonnerre', 'Cage-éclair'],
    },
    {
      id: 2,
      nom: 'Elekid',
      taille: 0.6,
      evolution: 'Elektek',
      faiblesses: ['Sol', 'Électrik'],
      attaques: ['Eclair', 'Tonnerre', 'Poing-éclair'],
    },
    {
      id: 3,
      nom: 'Electhor',
      taille: 1.6,
      evolution: 'néant',
      faiblesses: ['Électrik', 'Plante', 'Roche'],
      attaques: ['Eclair', 'Tonnerre', 'Fatal-foudre'],
    },
  ];
  //Pokemons feu
  pokemonsFeu: Pokemon[] = [
    {
      id: 4,
      nom: 'Salamèche',
      taille: 0.6,
      evolution: 'Reptincel',
      faiblesses: ['Eau', 'Roche', 'Combat'],
      attaques: ['Lance-Flammes', 'Griffe', 'Crocs Feu'],
    },
    {
      id: 5,
      nom: 'Caninos',
      taille: 0.7,
      evolution: 'Arcanin',
      faiblesses: ['Eau', 'Sol', 'Roche'],
      attaques: ['Lance-Flammes', 'Mâchouille', 'Morsure'],
    },
    {
      id: 6,
      nom: 'Ponyta',
      taille: 1.0,
      evolution: 'Galopa',
      faiblesses: ['Eau', 'Sol', 'Roche'],
      attaques: ['Déflagration', 'Charge', 'Flammèche'],
    },
  ];
  //Pokemons plantes
  pokemonsPlantes: Pokemon[] = [
    {
      id: 7,
      nom: 'Bulbizarre',
      taille: 0.7,
      evolution: 'Herbizarre',
      faiblesses: ['Feu', 'Glace', 'Vol', 'Poison', 'Insecte'],
      attaques: ['Fouet Lianes', 'Canon Graine', 'Bombe Florale'],
    },
    {
      id: 8,
      nom: 'Chétiflor',
      taille: 0.7,
      evolution: 'Boustiflor',
      faiblesses: ['Vol', 'Insecte', 'Ténèbres', 'Poison', 'Feu', 'Glace'],
      attaques: ['Lance-Soleil', 'Acide', 'Tranch\'Herbe'],
    },
    {
      id: 9,
      nom: 'Germignon',
      taille: 0.9,
      evolution: 'Macronium',
      faiblesses: ['Vol', 'Feu', 'Insecte', 'Glace', 'Poison'],
      attaques: ['Charge', "Tranch'Herbe", 'Poudre Toxik'],
    },
  ];

  ngOnInit(): void {

  }
}
