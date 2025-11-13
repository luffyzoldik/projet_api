// src/game/game.service.ts

import { Injectable, OnModuleInit, NotFoundException } from '@nestjs/common';
import * as fs from 'fs';
import csv from 'csv-parser'; // Import corrigé (export par défaut)
import { resolve } from 'path';

// --- Interface pour la structure des données du CSV ---
interface Game {
  ID: string;
  Name: string;
  [key: string]: any; // Permet de gérer les autres colonnes sans les typer toutes
}

@Injectable()
export class GameService implements OnModuleInit {
  private games: Game[] = [];
  
  // Chemin d'accès au fichier CSV (ajustez si nécessaire)
  private readonly CSV_FILE_PATH = resolve(__dirname, '..', '..', 'bgg_dataset.csv');

  /**
   * 1. CHARGEMENT ASYNCHRONE du CSV au démarrage.
   */
  async onModuleInit() {
    console.log(`[GameService] Tentative de chargement du CSV : ${this.CSV_FILE_PATH}`);
    
    await new Promise<void>((resolvePromise, reject) => {
      if (!fs.existsSync(this.CSV_FILE_PATH)) {
        console.error(`[ERREUR] Fichier CSV introuvable à ${this.CSV_FILE_PATH}`);
        return reject(new Error('CSV file not found.'));
      }
      
      fs.createReadStream(this.CSV_FILE_PATH)
        .pipe(csv())
        .on('data', (row: Record<string, any>) => { // Typage de la ligne corrigé
          // Normalisation des données
          row.ID = String(row.ID).trim();
          this.games.push(row as Game);
        })
        .on('end', () => {
          console.log(`[GameService] ${this.games.length} jeux chargés avec succès.`);
          resolvePromise();
        })
        .on('error', (error: Error) => { // Typage de l'erreur corrigé
          console.error('[GameService] Erreur lors de la lecture du CSV:', error);
          reject(error);
        });
    });
  }

  // -------------------------------------------------------------------
  // --- MÉTHODES CRUD ---
  // -------------------------------------------------------------------

  /**
   * LIGNE 1 : GET /games (Tri et Pagination)
   */
  findAll(skip: number = 0, take: number = 10): Game[] {
    // Tri alphabétique sur la colonne 'Name'
    const sortedGames = [...this.games].sort((a, b) => a.Name.localeCompare(b.Name));

    // Application de l'offset et limit
    return sortedGames.slice(skip, skip + take);
  }

  /**
   * LIGNE 2 : GET /games/:id (Recherche)
   */
  findOne(id: string): Game {
    const game = this.games.find(g => g.ID === id);
    if (!game) {
      throw new NotFoundException(`Jeu avec l'ID "${id}" non trouvé.`);
    }
    return game;
  }

  /**
   * LIGNE 3 : POST /games (Création)
   */
  create(data: any): Game {
    const newId = String(Date.now()); 
    const newGame: Game = { ID: newId, Name: data.Name || 'Nouveau Jeu', ...data };
    this.games.push(newGame);
    return newGame;
  }

  /**
   * LIGNE 4 : PUT /games/:id (Mise à jour)
   */
  update(id: string, updateData: any): Game {
    const index = this.games.findIndex(g => g.ID === id);
    
    if (index === -1) {
      throw new NotFoundException(`Jeu avec l'ID "${id}" non trouvé pour la mise à jour.`);
    }

    this.games[index] = { ...this.games[index], ...updateData, ID: id };
    
    return this.games[index];
  }

  /**
   * LIGNE 5 : DELETE /games/:id (Suppression)
   */
  remove(id: string): void {
    const initialLength = this.games.length;
    this.games = this.games.filter(g => g.ID !== id);

    if (this.games.length === initialLength) {
      throw new NotFoundException(`Jeu avec l'ID "${id}" non trouvé pour la suppression.`);
    }
  }
}