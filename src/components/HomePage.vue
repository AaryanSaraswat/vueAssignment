<template>
  <div>
    <main id="game">
      <h1 class="game-title">Fifteen Puzzle Game</h1>
      <GameController />
      <GameMatrix />
      <GameFooter />
    </main>
  </div>
</template>

<script>
import GameController from "./subComponents/GameController.vue";
import GameMatrix from "./subComponents/GameMatrix.vue";
import GameFooter from "./subComponents/GameFooter.vue";

export default {
  name: "HomePage",
  components: {
    GameController,
    GameMatrix,
    GameFooter,
  },
  mounted() {
    if (localStorage.getItem("gameState")) {
      let ans = confirm("Do you want to resume the last saved game?");
      if (ans) {
        this.$store.replaceState(
          Object.assign(
            this.$store.state,
            JSON.parse(localStorage.getItem("gameState"))
          )
        );

        this.$store.state.tooglePlayPause = false;
        this.$store.state.showOverlay = true;
        this.$store.state.overlayText = "Play";
        this.$store.state.buttonText = "Play";
      }
    }
  },
};
</script>
