<script lang="ts">
    import { onMount } from 'svelte'

    import { router, pathToArray, path } from 'svelte-micro'
    import { userData } from 'src/store/store'    

    import Icon from 'src/components/Icon.svelte'
    export let active: boolean = false
    export let icon: string = 'ghost'
    export let title: string = undefined
    export let turbo: any = undefined
    export let segment: string = undefined

    function onTitleClick() {
        router.push(segment)
        $userData.aside.segment = segment
        $userData.aside.expand = false
    }

    onMount(async () => {
        // let loadPath: string
        $userData.aside.segment = pathToArray($path)[0]
        // console.log($path)
        // console.log(loadPath)
    })

    // $: segment

</script>

<div 
    class:item = {true}
    class:active = {active}
    {...$$restProps}
>
    <div class="backdrop"></div>
    <div class="status"></div>
    <div class="icon">
        <Icon name={icon} size="lg"/>
    </div>
    {#if turbo}
        <div class="turbo">
            <Icon name={turbo.icon}/>
        </div>
    {/if}
    <div on:click={onTitleClick} class="title">{title}</div>
</div>

<style lang="sass">
    .item
        display: grid
        height: var(--layout-aside-item-height)
        color: var(--aside-item-color)
        // transition: color 0.25s
        transition: all 0.25s

        .backdrop
            grid-column: 1/-1
            grid-row: 1/-1
            margin: 0
            border-radius: 0
            background: var(--aside-item-backdrop-bg)
            transition: background .25s, margin .25s, border-radius .25s
        .status
            grid-column: 1/-1
            grid-row: 1/-1
            margin: auto auto auto 0
            width: 0
            height: calc(100% - var(--key-size))
            border-top-right-radius: calc(var(--key-size) * .125)
            border-bottom-right-radius: calc(var(--key-size) * .125)
            background: var(--aside-item-status-bg)
            transition: width .25s, background .25s
        .icon
            grid-column: 1/-1
            grid-row: 1/-1
            display: grid
            width: calc(var(--key-size) * 3)
            justify-items: center
            align-items: center
            color: var(--aside-item-icon-color)
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
            color: var(--aside-item-turbo-color)
            cursor: pointer
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
            max-width: 100%
            color: var(--aside-item-title-color)
            cursor: pointer
            text-transform: capitalize
            user-select: none
            z-index: 1
        &:hover
            color: var(--positive-color)
            .backdrop
                margin: calc(var(--key-size) * .25)
                border-radius: calc(var(--key-size) * .25)
                background: var(--aside-item-backdrop--hover-bg, var(--positive-color-10))
        &.active
            color: var(--aside-item-active-color, var(--positive-color))
            .status
                width: .375rem
                background: var(--aside-item-active-status-bg, var(--positive-color))
                transition: width .25s .125s, background .25s .125s
            .title
                cursor: default
                pointer-events: none
                color: var(--aside-item-active-title-color)
                
                
</style>