<script lang="ts">
    import Icon from '../../../../../../components/Icon.svelte'
    export let active: boolean = false
    export let icon: string = 'ghost'
    export let title: string = undefined
    export let segment : string = undefined
</script>

<div on:click={() => active = !active} 
    class:item = {true}
    class:active = {active}
    {...$$restProps}
>
    <div class="hover"></div>
    <div class="status"></div>
    <div class="icon">
        <Icon name={icon} size="lg"/>
    </div>
    <div class="title">{title}</div>
</div>

<style lang="sass">
    .item
        display: grid
        height: var(--layout-aside-item-height)
        color: var(--positive-color)
        cursor: pointer
        .hover
            grid-column: 1/-1
            grid-row: 1/-1
            transition: background-color .25s
        .status
            grid-column: 1/-1
            grid-row: 1/-1
            margin: auto auto auto .25rem
            width: .25rem
            height: calc(100% - 0.5rem)
            border-radius: .125rem
            background-color: transparent
            transition: height .25s, background-color .25s .125s        
        &.active
            .status
                margin: auto auto auto .25rem
                width: .25rem
                height: 0.25rem
                border-radius: .125rem
                background-color: var(--positive-color)
                transition: height .25s, background-color .25s
        .icon
            grid-column: 1/-1
            grid-row: 1/-1
            display: grid
            width: calc(var(--key-size) * 3)
            justify-items: center
            align-items: center
        .title
            grid-column: 1/-1
            grid-row: 1/-1
            display: grid
            margin: auto auto auto calc(var(--key-size) * 3)
            text-transform: uppercase
        &:hover
            .hover
                background-color: var(--positive-color-25)
</style>