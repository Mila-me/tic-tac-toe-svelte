<script>
    export let leaderboard = [];
</script>

{#each leaderboard as entry}
<li><strong>{entry.player}</strong>: - <strong>Wins:</strong> {entry.wins} - <strong>Draws:</strong> {entry.draws} - <strong>Losses:</strong> {entry.losses}</li>
{/each}