# Groupomania - Front-end

Front-end du septième projet du parcours développeur web chez OpenClassrooms
Le projet consiste à construire un réseau social interne pour les employés de Groupomania.
Pour ce MVP, il a été décidé de partir sur un clone de 9GAG

## User stories

- [x] En tant qu'employé je veux créer et me connecter à un compte
- [x] En tant qu'employé je veux pouvoir partager des GIFs
- [x] En tant qu'employé je veux pouvoir voir les GIFs des autres employés
- [x] En tant qu'employé je veux pouvoir voir et écrire des commentaires sur les publications

## Technologies utilisées

- **Front-end :** React, NextJs
- **Back-end :** Fastify, Prisma ORM & MySQL

## Installation & lancement

### Pré-requis

- Node.js 14
- Yarn 1.22

### Cloner le projet

```bash
$ git clone https://github.com/MathisBarre/MathisBarre_7_01082021_front-end.git
```

### Installer les dépendances

```bash
$ yarn
```

### Lancer le projet

Pour le développement

```bash
yarn dev
```

Puis ouvrez votre navigateur à l'adresse https://localhost:3001

Pour la production

```bash
yarn build
yarn start
```

Puis ouvrez votre navigateur à l'adresse https://localhost:3001