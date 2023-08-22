<script>
    export let history = [];
</script>

<ul>
    {#each history as game, index}
        <li>{index + 1}.       
        {#if game.draw}
        <strong>{game.winner}</strong> played with <strong>{game.loser}</strong> with result <strong>draw.</strong>
        {:else}
        <strong>{game.winner}</strong> won over <strong>{game.loser}</strong>
        {/if}
        </li>
    {/each}
</ul>

<style>
    ul {
        list-style-type: none;
        padding-left: 0;
    }
</style>