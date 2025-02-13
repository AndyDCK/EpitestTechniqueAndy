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

- **JavaScript** : Le projet est entièrement écrit en JavaScript, un langage léger et performant, adapté aux applications de calcul. JavaScript est exécuté dans un environnement Node.js, ce qui permet de bénéficier d'une exécution rapide et efficace en dehors du navigateur. Choisir JavaScript permet d'éviter la surcharge d'une solution basée sur un framework plus lourd, ce qui est crucial pour ce projet qui se concentre sur des opérations mathématiques simples et des tests unitaires rapides.

- **Jest** : Jest est utilisé pour les tests unitaires, offrant une solution rapide et efficace pour vérifier le bon fonctionnement de la calculatrice. Jest est particulièrement adapté aux projets JavaScript grâce à sa simplicité d'intégration et son faible impact sur les performances. Il permet d'exécuter des tests unitaires de manière fluide, tout en maintenant une vitesse d'exécution optimale. L'utilisation de Jest garantit que le code reste fiable sans ajouter de complexité inutile.

- **Node.js** : Node.js est l'environnement d'exécution JavaScript choisi pour ce projet, permettant d'exécuter le code sur le serveur avec des performances optimisées. Node.js est particulièrement performant grâce à son moteur V8 et son architecture non-bloquante. Il permet d'exécuter le code JavaScript côté serveur de manière rapide et efficace. Choisir Node.js plutôt qu'un autre environnement plus lourd permet de minimiser l'empreinte mémoire et d'améliorer la réactivité, en particulier pour un projet de calcul qui doit fonctionner rapidement sans dépendances excessives.

### Pourquoi éviter les frameworks ?

Pour ce projet, l'objectif principal est de maintenir la **performance** et la **légèreté**. L'utilisation de frameworks lourds, comme React ou Angular, aurait introduit des dépendances supplémentaires et une complexité inutile. Étant donné que ce projet se concentre sur des calculs de base et des tests unitaires, il est plus judicieux d'opter pour des technologies simples et directes telles que **JavaScript natif** avec **Node.js**.

En choisissant de ne pas utiliser de frameworks, on réduit la consommation des ressources (mémoire et CPU) tout en assurant une exécution rapide et fluide. Cette approche garantit également une meilleure compréhension du fonctionnement sous-jacent de la calculatrice et permet de garder le code plus modulable et facilement maintenable.

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
