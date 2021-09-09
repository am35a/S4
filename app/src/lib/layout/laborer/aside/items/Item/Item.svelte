<script lang="ts">
    import { app } from '../../../../../../store/store'

    import Icon from '../../../../../../components/Icon.svelte'
    export let active: boolean = false
    export let icon: string = 'ghost'
    export let title: string = undefined
    export let turbo: any = undefined
    export let segment: string = undefined
</script>

<div 
    class:item = {true}
    class:active = {active}
    {...$$restProps}
>
    <div class="hover"></div>
    <div class="status"></div>
    <div class="icon">
        <Icon name={icon} size="lg"/>
    </div>
    {#if turbo}
        <div class="turbo">
            <Icon name={turbo.icon}/>
        </div>
    {/if}
    <div on:click={() => $app.currentSegment = segment} class="title">{title}</div>
</div>

<style lang="sass">
    .item
        display: grid
        height: var(--layout-aside-item-height)
        color: var(--positive-color-85)
        cursor: pointer
        transition: color 0.25s
        .hover
            grid-column: 1/-1
            grid-row: 1/-1
            margin: 0
            border-radius: 0
            transition: background-color .25s, margin .25s, border-radius .25s
        .status
            grid-column: 1/-1
            grid-row: 1/-1
            margin: auto auto auto 0
            width: 0
            height: calc(100% - .5rem)
            border-top-right-radius: .125rem
            border-bottom-right-radius: .125rem
            background-color: transparent
            transition: width .25s, height .25s, background-color .25s
        &.active
            color: var(--positive-color)
            .status
                width: .375rem
                height: .25rem
                background-color: var(--positive-color)
                transition: width .25s .25s, height .25s .25s, background-color .25s .25s
        .icon
            grid-column: 1/-1
            grid-row: 1/-1
            display: grid
            width: calc(var(--key-size) * 3)
            justify-items: center
            align-items: center
            z-index: 0
        .turbo
            grid-column: 1/-1
            grid-row: 1/-1
            display: grid
            margin: 0 0 0 auto
            width: calc(var(--key-size) * 3)
            height: 100%
            justify-items: center
            align-items: center
            z-index: 2
            :global(.ico)
                transform: scale(.5)
                transition: transform .25s
            &:hover
                :global(.ico)
                    transform: scale(.75)
            + .title
                padding-right: 3rem
    

        .title
            grid-column: 1/-1
            grid-row: 1/-1
            display: grid
            justify-items: start
            align-items: center

            padding-left: calc(var(--key-size) * 3)
            padding-right: 1rem
            text-transform: capitalize
            max-width: 100%
            z-index: 1
        &:hover
            color: var(--positive-color)
            .hover
                margin: calc(var(--key-size) * .25)
                border-radius: calc(var(--key-size) * .25)
                background-color: var(--positive-color-10)
</style>