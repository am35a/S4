<script lang="ts">
    import { asideExpand, appSegment } from 'src/store/store'

    import Button from 'component/Button.svelte'
    import Icon from 'component/Icon.svelte'
</script>

<header class="header">
    <div class="hamburger">
        <button
            on:click={() => $asideExpand = true}
            tabindex="-1"
        >
            <Icon class="fs-xl" name="menu"/>
        </button>
    </div>
    <div class="title">
        {$appSegment}
    </div>
    <div class="pouch">
        <Button
            class="btn btn-ico my-auto"
            on:click={() => window.open('https://github.com/am35a/S4', '_blank')}
        >
            <Icon name="github"/>
        </Button>
    </div>
</header>

<style lang="sass" global>
    .header
        grid-column: 1/3
        grid-row: 1/2
        display: grid
        grid-template-columns: auto 1fr auto
        min-height: var(--layout-header-height)
        background-color: var(--header-bgc, var(--secondary-color-l))
        color: var(--header-color, var(--negative-color))
        z-index: 10
        .hamburger
            display: grid
            min-width: var(--layout-header-height)
            width: var(--layout-aside-width)
            padding: 0.25em
            button
                display: grid
                justify-items: center
                align-items: center
                border-radius: var(--br-2, .25em)
                // background-color: var(--aside-bgc, var(--secondary-color-d))
        .title
            display: grid
            padding-left: 1em
            align-items: center
            font-size: var(--fs-lg, large)
            font-weight: 500
        .pouch
            display: inline-grid
            padding-left: 0.5em
            padding-right: 0.5em

</style>