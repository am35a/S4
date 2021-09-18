<script lang="ts">
    import { app } from 'src/store/store'

    import Icon from 'src/components/Icon.svelte'
</script>

<header class="header">
    <button
        on:click={() => $app.isAsideExpand = true}
        class="hamburger"
        tabindex="-1"
    >
        <Icon name="menu" size="lg"/>
    </button>
    <div>
        header
    </div>
    <div>

    </div>
</header>

<style lang="sass">
    .header
        grid-column: 1/3
        grid-row: 1/2
        display: grid
        grid-template-columns: auto 1fr auto
        height: var(--layout-header-height)
        background-color: var(--header-bg-color)
        z-index: 10
        .hamburger
            display: grid
            justify-items: center
            align-items: center
            min-width: var(--layout-header-height)
            width: var(--layout-aside-width)
            color: var(--positive-color)
            background-color: var(--aside-bg-color)
</style>