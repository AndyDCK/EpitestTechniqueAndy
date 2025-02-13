# Calculatrice JavaScript

## Description

Ce projet implémente une calculatrice en JavaScript permettant de réaliser des opérations de base (addition, soustraction, multiplication, etc.), ainsi que des opérations plus avancées telles que la racine carrée et la division euclidienne. Il utilise Jest pour les tests unitaires afin de valider le bon fonctionnement des fonctionnalités.

## Fonctionnalités

- Addition (`+`)
- Soustraction (`-`)
- Multiplication (`*`)
- Division (`/`)
- Modulo (`%`)
- Puissance (`^`)
- Racine carrée (`sqrt`)
- Division Euclidienne (`div`)

## Choix technologiques

- **JavaScript** : Le projet est entièrement écrit en JavaScript pour être exécuté dans un environnement Node.js.
- **Jest** : Jest est utilisé pour les tests unitaires, permettant de vérifier que les différentes fonctionnalités de la calculatrice fonctionnent correctement.
- **Node.js** : L'environnement d'exécution JavaScript, permettant d'exécuter le code en dehors du navigateur.

## Installation et Exécution

### 1. Prérequis

Avant de commencer, vous devez avoir **Node.js** et **npm** installés sur votre machine. Si ce n'est pas déjà fait, vous pouvez les télécharger et les installer depuis [Node.js](https://nodejs.org/).

### 2. Installation

Clonez le projet ou téléchargez-le dans un dossier local :

```bash
git clone git@github.com:AndyDCK/EpitestTechniqueAndy.git
npm install
```

### 3. Exécuter
```bash
node src/server.js
```

Disponible sur l'URL: http://localhost:3000

### 4 Run les tests

```bash
npx jest src/calculator.test.js
```