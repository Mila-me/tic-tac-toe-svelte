<svelte:head>
  <title>TicTacToe in Svelte</title>
</svelte:head>
<script>
  import History from './History.svelte';
  import Leaderboard from './Leaderboard.svelte';

  let board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ];
  let activePE = false;
  let gameEnd = 0;
  let gameHistory = [];
  let gameLeaderboard = [];
  let isButtonDisabled = false;
  let isDraw = false;
  let currentPlayer = "X";
  if(Math.floor(Math.random() * 2 + 1) === 1) {
    currentPlayer = "X";
  }
  else {
    currentPlayer = "O";
  }

  let cPlayer = currentPlayer;
  let player1 = "";
  let player2 = "";
  let p1 = undefined
  let p2 = undefined;

  function cPlayerUpdate() {
    cPlayer = currentPlayer === "O" ? player1 : player2;
  }

  function updateLeaderboard(winner, loser, isDraw) {
        let entry1 = gameLeaderboard.find(e => e.player === winner);
        let entry2 = gameLeaderboard.find(e => e.player === loser);
        if(!isDraw) {
          entry1.wins += 1;
          entry2.losses += 1;
        }
        else {
          entry1.draws += 1;
          entry2.draws += 1;
        }
        gameLeaderboard = gameLeaderboard;
        gameLeaderboard.sort((a, b) => {
        if (a.wins !== b.wins) {
            return b.wins - a.wins;
        } else if (a.draws !== b.draws) {
            return b.draws - a.draws;
        } else {
            return a.losses - b.losses;
        }
        });
        gameLeaderboard = gameLeaderboard;
  }

  function makeMove(row, col) {
    isButtonDisabled = true;
    if (board[row][col] === "") {
      board[row][col] = currentPlayer;
      checkWinner();
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      cPlayerUpdate();
    }
  }

  function checkWinner() {
    for (let i = 0; i < 3; i++) {
      if (
        board[i][0] && board[i][0] === board[i][1] && board[i][0] === board[i][2] ||
        board[0][i] && board[0][i] === board[1][i] && board[0][i] === board[2][i]
      ) {
        gameEnd = 1;
      }
    }

    if (
      board[0][0] && board[0][0] === board[1][1] && board[0][0] === board[2][2] ||
      board[0][2] && board[0][2] === board[1][1] && board[0][2] === board[2][0]
    ) {
      gameEnd = 1;
    }

    if (!board.flat().includes("")) {
      gameEnd = 2;
    }

    if(gameEnd === 1) {
      alert(`${cPlayer} | ${currentPlayer} wins!`);
      let loser = cPlayer === player1 ? player2 : player1;
      isDraw = false;
      gameHistory.push({ winner: cPlayer, loser: loser, draw: isDraw });
      gameHistory = gameHistory;
      updateLeaderboard(cPlayer, loser, isDraw);
    }

    if(gameEnd === 2) {
      alert(`Draw!`);
      let loser = cPlayer === player1 ? player2 : player1;
      isDraw = true;
      gameHistory.push({ winner: cPlayer, loser: loser, draw: isDraw });
      gameHistory = gameHistory;
      updateLeaderboard(cPlayer, loser, isDraw);
    }

    if(gameEnd > 0) {
      gameEnd = 0;
      isDraw = false;
      reset();
    }
  }

  function reset() {
    board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""]
    ];
    currentPlayer = "X";
    isButtonDisabled = false;
  }
  function toggle_players() {
  if((p1 !== undefined && p2 !== undefined) &&
  (p1 !== p2)) {
  activePE = true;

  player1 = p1;
  player2 = p2;
  cPlayerUpdate();

  if (!gameLeaderboard.some(entry => entry.player === player1)) {
    gameLeaderboard.push({player: player1, wins: 0, draws: 0, losses: 0});
  }
  if (!gameLeaderboard.some(entry => entry.player === player2)) {
    gameLeaderboard.push({player: player2, wins: 0, draws: 0, losses: 0});
  }
  gameLeaderboard = gameLeaderboard;
}
}
</script>

<style>
  .board {
    display: grid;
    grid-template-columns: 60px 60px 60px;
    gap: 5px;
    pointer-events: none;
  }
  .activePE {
    pointer-events: all !important;
  }
  .cell {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    font-size: 28px;
  }
</style>
<h1>TicTacToe in Svelte</h1>
<div class="board" class:activePE>
  {#each board as row, rowIndex}
    {#each row as cell, colIndex}
      <div class="cell" on:click={() => makeMove(rowIndex, colIndex)}>
        {cell}
      </div>
    {/each}
  {/each}
</div>
<div class="players">
<p> Current player: <strong>{currentPlayer} | {cPlayer}</strong></p>
<p>Player1 name: {player1}</p>
<p>Player2 name: {player2}</p>
<input id="p1" bind:value={p1} placeholder="Enter name of the Player 1" />
<input id="p2" bind:value={p2} placeholder="Enter name of the Player 2" />
<button type="button" on:click="{toggle_players}" disabled={isButtonDisabled}>Update player names</button>
</div>
<h2>Leaderboard:</h2>
<Leaderboard leaderboard={gameLeaderboard} />
<h2>Results history:</h2>
<History history={gameHistory} />
