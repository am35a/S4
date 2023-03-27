<script lang="ts">
    export let value: string = ''

    if($$restProps.type)
        console.log($$restProps.type)

</script>

<input
    bind:value
    class:frm = {true}
    {...$$restProps}
    placeholder = {$$restProps.type}
/>

<style lang="sass" global>
    $accentColors: 'primary', 'secondary', 'info', 'success', 'warning', 'error'

    [type="text"].frm,
    [type="time"].frm,
    [type="url"].frm,
    [type="week"].frm,
    [type="month"].frm,
    [type="email"].frm,
    [type="date"].frm,
    [type='password'].frm,
    [type="datetime-local"].frm
        display: inline-grid
        grid-auto-flow: column
        margin: unset
        min-width: 0
        padding: var(--size-1) var(--size-3)
        background-color: var(--positive-color)
        border: none
        border-radius: var(--size-1)
        color: currentColor
        line-height: var(--lh)
        outline-width: 0
        outline-style: solid
        outline-color: transparent
        outline-offset: 0
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

</style>