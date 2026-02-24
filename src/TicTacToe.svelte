<svelte:head>
  <title>TicTacToe in Svelte 5</title>
</svelte:head>

<script>
  import History from './History.svelte';
  import Leaderboard from './Leaderboard.svelte';

  let board = $state([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ]);
  
  let activePE = $state(false);
  let gameEnd = $state(0);
  let gameHistory = $state([]);
  let gameLeaderboard = $state([]);
  let isButtonDisabled = $state(false);
  let isDraw = $state(false);
  let currentPlayer = $state(Math.random() < 0.5 ? "X" : "O");

  let player1 = $state("");
  let player2 = $state("");
  let p1 = $state("");
  let p2 = $state("");
  let cPlayer = $state("");

  // --- LOGIKA GRY ---
  function cPlayerUpdate() {
    cPlayer = currentPlayer === "X" ? player1 : player2;
  }

  function updateLeaderboard(winner, loser, drawStatus) {
    let entry1 = gameLeaderboard.find(e => e.player === winner);
    let entry2 = gameLeaderboard.find(e => e.player === loser);

    if (!drawStatus) {
      if (entry1) entry1.wins += 1;
      if (entry2) entry2.losses += 1;
    } else {
      if (entry1) entry1.draws += 1;
      if (entry2) entry2.draws += 1;
    }

    gameLeaderboard.sort((a, b) => {
      if (a.wins !== b.wins) return b.wins - a.wins;
      if (a.draws !== b.draws) return b.draws - a.draws;
      return a.losses - b.losses;
    });
  }

  function makeMove(row, col) {
    if (board[row][col] === "" && activePE) {
      board[row][col] = currentPlayer;
      checkWinner();
      // Zmiana tury
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      cPlayerUpdate();
    }
  }

  function checkWinner() {
    // Sprawdzanie rzędów i kolumn
    for (let i = 0; i < 3; i++) {
      if (
        (board[i][0] !== "" && board[i][0] === board[i][1] && board[i][0] === board[i][2]) ||
        (board[0][i] !== "" && board[0][i] === board[1][i] && board[0][i] === board[2][i])
      ) {
        gameEnd = 1;
      }
    }

    // Sprawdzanie przekątnych
    if (
      (board[0][0] !== "" && board[0][0] === board[1][1] && board[0][0] === board[2][2]) ||
      (board[0][2] !== "" && board[0][2] === board[1][1] && board[0][2] === board[2][0])
    ) {
      gameEnd = 1;
    }

    // Remis
    if (gameEnd === 0 && !board.flat().includes("")) {
      gameEnd = 2;
    }

    if (gameEnd === 1) {
      alert(`Winner: ${cPlayer} (${currentPlayer})`);
      const loser = cPlayer === player1 ? player2 : player1;
      gameHistory.push({ winner: cPlayer, loser: loser, draw: false });
      updateLeaderboard(cPlayer, loser, false);
      reset();
    } else if (gameEnd === 2) {
      alert(`Draw!`);
      gameHistory.push({ winner: "Draw", loser: "Draw", draw: true });
      updateLeaderboard(player1, player2, true);
      reset();
    }
  }

  function reset() {
    board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""]
    ];
    gameEnd = 0;
    currentPlayer = "X";
    cPlayerUpdate();
  }

  function toggle_players() {
    if (p1 && p2 && p1 !== p2) {
      activePE = true;
      player1 = p1;
      player2 = p2;
      cPlayerUpdate();

      if (!gameLeaderboard.some(e => e.player === player1)) {
        gameLeaderboard.push({ player: player1, wins: 0, draws: 0, losses: 0 });
      }
      if (!gameLeaderboard.some(e => e.player === player2)) {
        gameLeaderboard.push({ player: player2, wins: 0, draws: 0, losses: 0 });
      }
    } else {
      alert("Please enter two different names.");
    }
  }
</script>

<style>
  .board {
    display: grid;
    grid-template-columns: repeat(3, 60px);
    gap: 5px;
    margin-bottom: 20px;
    /* Plansza jest nieaktywna, dopóki activePE nie jest true */
    opacity: 0.5;
    pointer-events: none;
  }
  
  .board.activePE {
    opacity: 1;
    pointer-events: all;
  }

  .cell {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    background: white;
    border: 1px solid #ccc;
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
  }

  .cell:hover:not(:disabled) {
    background-color: #f0f0f0;
  }

  .cell:disabled {
    cursor: not-allowed;
    color: #555;
  }

  .players {
    margin-top: 20px;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 8px;
  }

  input {
    display: block;
    margin: 5px 0;
    padding: 5px;
  }
</style>

<h1>TicTacToe in Svelte 5</h1>

<div class="board" class:activePE={activePE}>
  {#each board as row, rowIndex}
    {#each row as cell, colIndex}
      <button 
        type="button" 
        class="cell" 
        onclick={() => makeMove(rowIndex, colIndex)}
        disabled={cell !== ""} 
      >
        {cell}
      </button>
    {/each}
  {/each}
</div>

<div class="players">
  <p> Current player: <strong>{currentPlayer} | {cPlayer || '???'}</strong></p>
  <p>Player 1: {player1 || '—'}</p>
  <p>Player 2: {player2 || '—'}</p>
  
  <input bind:value={p1} placeholder="Enter Player 1 name" />
  <input bind:value={p2} placeholder="Enter Player 2 name" />
  
  <button type="button" onclick={toggle_players}>
    Start Game / Update Names
  </button>
</div>

<h2>Leaderboard:</h2>
<Leaderboard leaderboard={gameLeaderboard} />

<h2>Results history:</h2>
<History history={gameHistory} />