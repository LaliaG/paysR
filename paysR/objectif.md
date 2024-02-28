# Exercice : Création d'une liste de pays

## Objectif :

Le but de cet exercice est de créer une application React qui utilise l'API REST Countries pour afficher une liste de pays.

## Tâches :

### Configuration du projet :
  - Initialisez un projet React.
  - Installez Axios pour effectuer des requêtes HTTP vers l'API REST Countries.
  - Créez un composant CountryList pour afficher la liste des pays.

### Récupération des données :
  - Utilisez Axios pour effectuer une requête vers l'URL de l'API REST Countries (https://restcountries.com/v3.1/all).

  ### Affichage des données :
  - Une fois les données chargées, parcourez le tableau des pays et affichez :
    - Le nom du pay en **français**.
    - La capitale
    - la région
    - le drapeau en png
    - la population

### Fonctionnalité :
  - Ajoutez la fonctionnalité de recherche pour permettre aux utilisateurs de rechercher des pays par leur nom.

   - Initialisez un projet React.
   ```
   npm create vite@latest
   cd paysR
   npm install
   npm run dev pour lancer l'application
   ```
   - Installez Axios pour effectuer des requêtes HTTP vers l'API REST Countries.
   ```
   npm install axios        ne pas oublier de l'importer dans l'App
   ```
   - Créez un composant CountryList pour afficher la liste des pays.
   dans src créer un dossier components dans celui là créer un fichier CountryList.jsx

   ### Récupération des données :
   aller à cette adresse (https://restcountries.com/v3.1/all) pour recharger les données

   ### Affichage des données :
   créer composant CountryDetail

   - Ajoutez la fonctionnalité de recherche pour permettre aux utilisateurs de rechercher des pays par leur nom.

   Axios vous permettra d’effectuer des requêtes HTTP vers l’API REST Countries.
Création du composant CountryList :
Créez un composant appelé CountryList.js (ou tout autre nom que vous préférez).
Dans ce composant, vous pouvez effectuer la requête vers l’URL de l’API REST Countries (https://restcountries.com/v3.1/all) en utilisant Axios.
Une fois les données chargées, parcourez le tableau des pays et affichez les informations demandées :
Le nom du pays en français.
La capitale.
La région.
Le drapeau (vous pouvez utiliser le lien fourni par l’API pour afficher le drapeau en format PNG).
La population.
Ajout de la fonctionnalité de recherche :
Créez un champ de recherche dans votre application.
Lorsque l’utilisateur saisit un nom de pays, filtrez la liste des pays en fonction de ce nom.
Voici quelques ressources qui pourraient vous aider dans votre projet :

Exemple de projet utilisant l’API REST Countries avec Chakra UI et React1.
Exemple de projet sur GitHub utilisant l’API REST Countries

