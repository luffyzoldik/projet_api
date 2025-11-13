Projet API 

Ce projet implémente une API REST pour la gestion de jeux. Les données sont chargées depuis un fichier CSV en mémoire. L'accès aux fonctionnalités est sécurisé par une authentification par JWT.

1. Démarrage du Projet en Local
Prérequis et Configuration
Avant de démarrer, vous devez disposer de Node.js et npm, et avoir créé un fichier .env à la racine de votre projet. Ce fichier doit contenir le port d'écoute de l'API (APP_PORT=3001 par exemple) et votre clé secrète JWT (JWT_SECRET=VotreCleSecreteAleatoireTresLongueIci).

Pour lancer l'API, ouvrez votre terminal, installez les dépendances avec la commande npm install, puis démarrez le serveur en mode développement via npm run start:dev. Le serveur sera accessible à l'adresse http://localhost:PORT (en utilisant le port défini dans votre .env).

2. Tester l'Authentification et les Contrôleurs
Utilisez Thunder Client ou Postman pour envoyer des requêtes à l'API.

Authentification (Login)
L'unique compte est marcel avec le mot de passe azerty.

Envoyez une requête POST à l'endpoint /auth/login.

Le corps de la requête doit être un objet JSON contenant "username": "marcel" et "password": "azerty".

Vous devez recevoir le statut 200 OK et un jeton JWT dans le corps de la réponse.

Contrôleur de Jeux (CRUD)
Toutes les opérations de gestion des jeux sont effectuées via l'endpoint de base /games.

Lecture (GET)

Lister les jeux : Envoyez une requête GET à /games. Vous recevrez le statut 200 OK et un tableau JSON des jeux (les 10 premiers par défaut). Vous pouvez ajouter des paramètres de requête comme ?limit=5&offset=10 pour la pagination.

Voir un jeu spécifique : Envoyez une requête GET à /games/ID_DU_JEU (où ID_DU_JEU est un identifiant existant). Vous obtiendrez le statut 200 OK et les données du jeu. Si l'ID est incorrect, l'API renverra 404 Not Found.

Modification des Données (POST, PUT, DELETE)

Créer un jeu : Envoyez une requête POST à /games. Le corps doit contenir les données du nouveau jeu (par exemple, "Name": "Mon Nouveau Jeu"). Le statut attendu est 201 Created.

Mettre à jour un jeu : Envoyez une requête PUT à /games/ID_EXISTANT. Le corps doit contenir les champs à modifier (par exemple, "Rating": 9.5). Le statut attendu est 200 OK.

Supprimer un jeu : Envoyez une requête DELETE à /games/ID_EXISTANT. Le statut attendu pour une suppression réussie est 204 No Content. Si l'ID n'existe pas, vous obtiendrez 404 Not Found.
