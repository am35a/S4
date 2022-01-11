<script lang="ts">
    import { onMount } from 'svelte'

    import { router, pathToArray, path } from 'svelte-micro'
    import { asideExpand, appSegment } from 'src/store/store'

    import Icon from 'src/components/Icon.svelte'

    export let active: boolean = false
    export let icon: string = undefined
    export let title: string = undefined
    export let action: any = undefined
    export let segment: string = undefined

    export let items: any = undefined

    export let submenu: boolean = items ? false : true

    function onTitleClick() {
        router.push(segment)
        $appSegment = segment
        $asideExpand = false
    }

    function onActionClick(event: any) {
        console.log('action')
        // event.Blur()
        // event.blur()
    }


    onMount(async () => {
        // let loadPath: string
        $appSegment = pathToArray($path)[0]
        // console.log($path)
        // console.log(loadPath)
    })

    // $: segment

</script>

<div 
    class:item = {true}
    class:has-action = {action}
    class:has-submenu = {items}
    {...$$restProps}
>
    <button
        class="title"
        on:click={onTitleClick}
        disabled={active}
    >{title}</button>
    {#if action}
        <button class="action" on:click={onActionClick} tabindex={-1}>
            <Icon class="m-auto" name={action.icon}/>
        </button>
    {:else if items}
        <button class="action" on:click={() => submenu = !submenu} tabindex={-1}>
            <Icon class="m-auto" name={submenu ? 'selector-minimize' : 'selector-maximize'}/>
        </button>
    {/if}
    <div class="backdrop"></div>
    <div class="status"></div>
    <div class="icon">
        {#if icon}
            <Icon class="m-auto" name={icon} size="lg"/>
        {:else}
            <div class="m-auto fw-600">{title.slice(0, 2).toLocaleUpperCase()}</div>
        {/if}
    </div>
    {#if items}
        <div
            class:d-none = {!submenu}
            class="submenu"
        >
            {#each items as item}
                <svelte:self
                    {...item}
                    active={$appSegment === item.segment}
                    segment={item.segment}
                />
            {/each}
        </div>
    {/if}
</div>

<style lang="sass">
    .item
        display: grid
        &.has-action,
        &.has-submenu
            .title
                padding-right: 3rem
        &.has-submenu
            background-color: var(--negative-color-10)
        .title
            grid-column: 1/-1
            grid-row: 1/-1
            display: grid
            height: var(--layout-aside-item-height)
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
            &:not(:disabled)
                &:focus,
                &:hover
                    color: var(--positive-color)
                    ~ .backdrop
                        margin: calc(var(--key-size) * .25)
                        border-radius: calc(var(--key-size) * .25)
                        background: var(--aside-item-backdrop--hover-bg, var(--positive-color-10))
                    ~ .icon
                        color: var(--positive-color)
            &:disabled
                cursor: default !important
                pointer-events: none
                color: var(--aside-item-active-color, var(--positive-color))
                ~ *:not(.submenu)
                    color: var(--aside-item-active-color, var(--positive-color))
                ~ .status
                    width: .375rem
                    background: var(--aside-item-active-status-bg, var(--positive-color))
                    transition: width .25s .125s, background .25s .125s
        .action
            grid-column: 1/-1
            grid-row: 1/-1
            display: grid
            margin: 0 0 0 auto
            width: calc(var(--key-size) * 3)
            height: 100%
            color: var(--aside-item-action-color)
            cursor: pointer
            z-index: 2
            :global(.ico)
                transform: scale(.5)
                transition: transform .25s
            // &:focus,
            &:hover
                color: var(--positive-color)
                :global(.ico)
                    transform: scale(.625)
                ~ .backdrop
                    margin: calc(var(--key-size) * .5)
                    margin-left: calc(100% - calc(var(--key-size) * 3 - calc(var(--key-size) * .5)))
                    border-radius: calc(var(--key-size) * .25)
                    background: var(--aside-item-backdrop--hover-bg, var(--positive-color-10))
        .backdrop
            grid-column: 1/-1
            grid-row: 1/-1
            margin: 0
            border-radius: 0
            background: var(--aside-item-backdrop-bg)
            transition: background .25s, margin .25s, border-radius .25s,
        .status
            grid-column: 1/-1
            grid-row: 1/-1
            height: var(--layout-aside-item-height)
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
            color: var(--aside-item-icon-color)
            cursor: default
            z-index: 0
</style>