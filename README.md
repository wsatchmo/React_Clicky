# React_Clicky

```diff
+ How it works +
```

  - Users select a character to begin, but must not select the same character twice. The score counter will keep their score, up to the maximum of sixteen (there are sixteen possible character choices); if the user choses the same character twice they lose the round and their game starts over. Depending on the game's current state, the message will read one of three variants:

     * Not playing yet: "Choose your fighter - Defeat all challengers!"

     * Character selected/game started: "Another enemy defeated..."

     * Same character selected/round lost: "Never stood a chance."

     * Round won: "A new champion! HADOUKEN!"

  - These messages update dynamically based on the state of the game. Character cards also update dynamically after each correct character selection.

```diff
! Deployment !
```

This project is deployed [here on Github Pages](https://wsatchmo.github.io/React_Clicky/) 

```diff
- Notes -
```

* If downloading this project remember to use **npm install** to install all required dependencies

* This project is built with Bootstrap and uses both [React-Bootstrap](https://react-bootstrap.github.io/) and [Reactstrap](https://reactstrap.github.io/) components

```diff
# Have fun & enjoy coding! #
```

