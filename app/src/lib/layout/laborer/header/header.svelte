<script lang="ts">
    import { userData } from 'src/store/store'

    import Button from 'src/components/Button.svelte'
    import Icon from 'src/components/Icon.svelte'
</script>

<header class="header">
    <div class="hamburger">
        <button
            on:click={() => $userData.aside.expand = true}
            tabindex="-1"
        >
            <Icon name="menu" size="lg"/>
        </button>
    </div>
    <div class="title">
        Header title
    </div>
    <div class="d-i-grid">
        <button>12</button>
        <!-- <Button class="btn btn-ico my-auto">
            <Icon name="menu" size="lg"/>
        </Button> -->
    </div>
</header>

<style lang="sass">
    .header
        grid-column: 1/3
        grid-row: 1/2
        display: grid
        grid-template-columns: auto 1fr auto
        height: var(--layout-header-height)
        background-color: var(--header-bg-color, var(--secondary-color-l))
        color: var(--header-color, var(--positive-color))
        z-index: 10
        .hamburger
            display: grid
            min-width: var(--layout-header-height)
            width: var(--layout-aside-width)
            padding: .25rem
            button
                display: grid
                justify-items: center
                align-items: center
                border-radius: .25rem
                // background-color: var(--aside-bg-color, var(--secondary-color-d))
        .title
            display: grid
            padding-left: .5rem 
            align-items: center
            font-size: large
            font-weight: 500

</style>