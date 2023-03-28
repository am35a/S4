<script lang="ts">
    export let value: string = ''

    if($$restProps.type)
        console.log($$restProps.type)

    $: {
        if($$restProps.type == 'number')
            $$restProps.pattern = '^(0|[1-9][0-9]*)$'
    }
</script>

<input
    bind:value
    class:frm = {true}
    {...$$restProps}
    placeholder = {$$restProps.type}
/>

<style lang="sass" global>
    $accentColors: 'primary', 'secondary', 'info', 'success', 'warning', 'error'

    [type="url"].frm,
    [type="text"].frm,
    [type="time"].frm,
    [type="date"].frm,
    [type="email"].frm,
    [type="number"].frm,
    [type='password'].frm,
    [type="datetime-local"].frm
        display: inline-grid
        grid-auto-flow: column
        margin: unset
        min-width: 0
        height: calc(var(--lh) * 1em + var(--size-2))
        padding: 0 var(--size-3)
        background-color: var(--positive-color)
        border: none
        border-radius: var(--size-1)
        color: currentColor
        line-height: var(--lh)
        outline-width: calc(var(--size-1) * .25)
        outline-style: solid
        outline-color: var(--negative-color-20)
        outline-offset: calc(var(--size-1) * -.25)
        transition: all .125s
        appearance: none
        &::placeholder
            color: var(--negative-color-20)
        &:disabled
            color: var(--negative-color-20)
            cursor: not-allowed
        &:focus,
        &:not(:disabled):hover,
        &.active
            outline-width: calc(var(--size-1) / 2)
            outline-style: solid
            outline-color: var(--negative-color-20)
            outline-offset: calc(var(--size-1) / 4)
        &.active:not(:disabled):not(:focus):hover,
        &.active:not(:disabled):focus
            outline-color: var(--negative-color-40)
        &-alt
            background-color: var(--negative-color-10)
        &-outline
            box-shadow: inset 0px 0px 0px calc(var(--size-1) / 4) currentColor

        @each $colorName in $accentColors
            &-#{$colorName}
                color: var(--#{$colorName}-color-d)
                &:disabled
                    color: var(--negative-color-20)
                &:not(:disabled):hover
                    color: var(--#{$colorName}-color-d)

        @each $colorName in $accentColors
            &-alt-#{$colorName}
                background-color: var(--#{$colorName}-color-m)
                color: var(--#{$colorName}-color-d)
                &:disabled
                    color: var(--negative-color-20)
                &:not(:disabled):hover
                    color: var(--#{$colorName}-color-d)

        @each $colorName in $accentColors
            &-outline-#{$colorName}
                box-shadow: inset 0px 0px 0px calc(var(--size-1) / 4) var(--#{$colorName}-color, currentColor)
                color: var(--#{$colorName}-color)
                outline-color: transparent
                &:disabled
                    box-shadow: inset 0px 0px 0px calc(var(--size-1) / 4) var(--#{$colorName}-color-m, currentColor)
                    color: var(--negative-color-20)

    [type="radio"].frm,
    [type="checkbox"].frm
        display: inline-grid
        vertical-align: middle
        margin: unset
        width: 1em
        height: 1em
        background-color: var(--positive-color)
        border: none
        border-radius: var(--size-1)
        color: currentColor
        line-height: var(--lh)
        outline-width: calc(var(--size-1) / 4)
        outline-style: solid
        outline-color: var(--negative-color-20)
        outline-offset: calc(var(--size-1) / -4)
        transition: all .125s
        appearance: none
        cursor: pointer
        appearance: none
        &:checked
            &::after
                content: ''
                grid-row: 1/2
                grid-column: 1/2
                background-color: currentColor
                border-radius: var(--size-1)
        &:disabled
            color: var(--negative-color-20)
            cursor: not-allowed
        &:focus,
        &:not(:disabled):hover
            outline-width: calc(var(--size-1) / 2)
            outline-style: solid
            outline-color: var(--negative-color-20)
            outline-offset: calc(var(--size-1) / 4)
        &-alt
            background-color: var(--negative-color-10)
            outline-width: 0
            outline-offset: 0
            &:checked
                &::after
                    transform: scale(.75)
        &-outline
            outline-width: 0
            outline-offset: 0
            box-shadow: inset 0px 0px 0px calc(var(--size-1) / 4) currentColor
            &:checked
                &::after
                    transform: scale(.75)


</style>