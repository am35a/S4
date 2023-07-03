<script lang="ts">
    import { slide } from 'svelte/transition'
    import { appConsole } from 'src/store/console'

    function onKeyDown(e) {
        if (e.keyCode === 27) {
            appConsole.setState()
        }
    }
</script>

<svelte:window
    on:load={() => appConsole.windowLoaded(true)}
    on:keydown|preventDefault={onKeyDown}
/>

{#if $appConsole.state === 'open' || $appConsole.state === 'half'}
    <section
        transition:slide
    >
        {#each $appConsole.history as item }
            <div>{item}</div>
        {/each}
    </section>
{/if}

<style lang="sass">
    section
        position: fixed
        left: 0
        top: 0
        right: 0
        bottom: 0
        display: flex
        justify-content: end
        align-items: end
        padding: 0.5em
        background-color: oklch(0% 0 0)
        color: oklch(60% 0.2 145)
        font-size: small
        z-index: 1000
        flex-direction: column
</style>