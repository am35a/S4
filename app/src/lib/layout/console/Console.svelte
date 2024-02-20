<script lang="ts">
    import { slide } from 'svelte/transition'
    import { appConsole } from 'src/store/console'

    function onKeyDown(e: { keyCode: number; }) {
        if (e.keyCode === 27) {
            appConsole.setState()
        }
    }

    const date: Date = new Date()
</script>

<svelte:window
    on:keydown={onKeyDown}
    on:load={() => appConsole.windowLoaded(true)}
    on:offline={() => appConsole.message('window: the interface is fired - network connection has been lost', 'warning')}
/> <!-- on:keydown|preventDefault={onKeyDown} -->

{#if $appConsole.state === 'open' || $appConsole.state === 'half'}
    <section
        transition:slide
    >
        {#each $appConsole.history as message }
            <div>
                {#if message.time}
                    <span>[{message.time}]</span>
                {/if}
                <span class="{message.type}">{message.text}</span>
            </div>
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
        flex-direction: column
        justify-content: end
        align-items: start
        padding: 0.5em
        background-color: oklch(0% 0 0)
        color: oklch(75% 0 0)
        font-size: small
        z-index: 1000
        .default
            color: oklch(75% 0 0)
        .info
            color: oklch(75% 0.2 295)
        .success
            color: oklch(75% 0.2 145)
        .warning
            color: oklch(75% 0.2 85)
        .error
            color: oklch(75% 0.2 25)
</style>