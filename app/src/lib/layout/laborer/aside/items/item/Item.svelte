<script lang="ts">
    import { onMount } from 'svelte'

    import { router, getPathSegments, path } from 'svelte-micro'
    import { asideExpand, appSegment } from 'src/store/store'

    import Icon from 'component/Icon.svelte'

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
        $appSegment = getPathSegments($path)[0]
    })

    // $: segment

</script>

<div 
    class:item = {true}
    class:active = {active}
    class:has-action = {action}
    class:has-submenu = {items}
    class:show-submenu = {items && submenu}
    {...$$restProps}
>
    <button
        class="title"
        on:click={onTitleClick}
        disabled={active}
    >{title}</button>
    {#if action}
        <button class="action" on:click={onActionClick} tabindex={-1}>
            <Icon class="m-auto fs-lg" name={action.icon}/>
        </button>
    {:else if items}
        <button class="action" on:click={() => submenu = !submenu} tabindex={-1}>
            <Icon class="m-auto fs-lg" name={submenu ? 'selector-minimize' : 'selector-maximize'}/>
        </button>
    {/if}
    <div class="backdrop"></div>
    <div class="status"></div>
    <div class="icon">
        {#if icon}
            <Icon class="m-auto fs-xl" name={icon}/>
        {:else}
            <div class="m-auto fw-600">{title.slice(0, 2).toLocaleUpperCase()}</div>
        {/if}
    </div>
    {#if items}
        {#each items as item}
            <svelte:self
                {...item}
                active={$appSegment === item.segment}
                segment={item.segment}
            />
        {/each}
    {/if}
</div>

<style lang="sass" global>
    .item
        display: grid
        &.has-action,
        &.has-submenu
            .title
                padding-right: 3em
        &.has-submenu
            &.show-submenu
                background-color: var(--aside-submenu-bgc, var(--negative-color-10))
            &:not(.show-submenu)
                .item.active
                    background-color: var(--aside-submenu-bgc, var(--negative-color-10))
                .item:not(.active)
                    display: none
        .title
            grid-column: 1/-1
            grid-row: 1/-1
            display: grid
            height: var(--layout-aside-item-height)
            justify-items: start
            align-items: center
            padding-left: 3em
            padding-right: 1em
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
                        margin: .25em
                        border-radius: .25em
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
                    width: .375em
                    background: var(--aside-item-active-status-bg, var(--positive-color))
                    transition: width .25s .125s, background .25s .125s
        .action
            grid-column: 1/-1
            grid-row: 1/-1
            display: grid
            margin: 0 0 0 auto
            width: 3em
            height: 100%
            color: var(--aside-item-action-color)
            cursor: pointer
            z-index: 2
            .ico
                transform: scale(.75)
                transition: transform .25s
            // &:focus,
            &:hover
                color: var(--positive-color)
                .ico
                    transform: scale(1)
                ~ .backdrop
                    margin: .5em
                    margin-left: calc(100% - (3em - .5em))
                    border-radius: .25em
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
            height: calc(100% - 1em)
            border-top-right-radius: .125em
            border-bottom-right-radius: .125em
            background: var(--aside-item-status-bg)
            transition: width .25s, background .25s
        .icon
            grid-column: 1/-1
            grid-row: 1/-1
            display: grid
            width: 3em
            color: var(--aside-item-icon-color)
            cursor: default
            z-index: 0
</style>