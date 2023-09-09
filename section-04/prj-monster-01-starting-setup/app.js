const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null,
            logMessages: [],
        };
    },

    computed: {
        monsterBarStyles() {
            if (this.monsterHealth < 0) {
                return { width: "0%" };
            }
            return { width: this.monsterHealth + "%" };
        },
        playerBarStyles() {
            if (this.playerHealth < 0) {
                return { width: "0%" };
            }
            return { width: this.playerHealth + "%" };
        },
        isSpecialAttackAvailable() {
            return this.currentRound % 3 !== 0;
        },
    },

    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                this.winner = "draw";
            } else if (value <= 0) {
                // player lost
                this.winner = "monster";
            }
        },

        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                this.winner = "draw";
            } else if (value <= 0) {
                // monster lost
                this.winner = "player";
            }
        },
    },

    methods: {
        attackMonster() {
            this.currentRound++;
            const damage = getRandomNumber(5, 12);
            this.monsterHealth -= damage;
            this.addLogMessage("player", "attack", damage);
            this.attackPlayer();
        },
        attackPlayer() {
            const damage = getRandomNumber(15, 8);
            this.playerHealth -= damage;
            this.addLogMessage("monster", "attack", damage);
        },
        specialAttackMonster() {
            this.currentRound++;
            const damage = getRandomNumber(10, 25);
            this.monsterHealth -= damage;
            this.addLogMessage("player", "attack", damage);
            this.attackPlayer();
        },
        healPlayer() {
            this.currentRound++;
            const healValue = getRandomNumber(8, 20);

            if (this.playerHealth + healValue > 100) {
                this.playerHealth = 100;
            } else {
                this.playerHealth += healValue;
            }

            this.addLogMessage("player", "heal", healValue);
            this.attackPlayer();
        },
        newGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.winner = null;
            this.currentRound = 0;
            this.logMessages = [];
        },
        surrender() {
            this.winner = "monster";
        },
        addLogMessage(who, what, value) {
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value,
            });
        },
    },
});

app.mount("#game");

// Functions
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
