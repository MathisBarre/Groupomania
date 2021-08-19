# Groupomania - Front-end

Front-end du septième projet du parcours développeur web chez OpenClassrooms
Le projet consiste à construire un réseau social interne pour les employés de Groupomania.
Pour ce MVP, il a été décidé de partir sur un clone de 9GAG

![screenshot page d'accueil](https://groupomania.mathisbarre.com/images/screenshot.png)

## User stories

- [x] En tant qu'employé je veux créer et me connecter à un compte
- [x] En tant qu'employé je veux pouvoir partager des GIFs
- [x] En tant qu'employé je veux pouvoir voir les GIFs des autres employés
- [x] En tant qu'employé je veux pouvoir voir et écrire des commentaires sur les publications

## Technologies utilisées

- **Front-end :** React, NextJs
- **Back-end :** Fastify, Prisma ORM & MySQL

## Installation & lancement

### 0. Installer et lancer le back-end

Instruction sur le repository : [https://github.com/MathisBarre/MathisBarre_7_01082021_back-end](https://github.com/MathisBarre/MathisBarre_7_01082021_back-end)

### 1. Pré-requis

- Node.js 14
- Yarn 1.22

### 2. Cloner le projet

```bash
$ git clone https://github.com/MathisBarre/MathisBarre_7_01082021_front-end.git
```

### 3. Installer les dépendances

```bash
$ yarn
```

### 4. Completer les variable d'environnements

Renommer le fichier `example.env.local` en `.env.local` et puis modifier la valeur des informations si besoin.

### 5. Lancer le projet

#### Pour le développement

```bash
$ yarn dev
```

#### Pour la production

```bash
$ yarn build
$ yarn start
```

Puis ouvrez votre navigateur à l'adresse https://localhost:3001