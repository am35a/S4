<script lang='ts'>
// https://github.com/hperrin/svelte-material-ui/tree/master/packages

    if ($$restProps.type != 'reset' && $$restProps.type != 'submit')
        $$restProps.type = 'button'
</script>

<button
    class:btn={true}
    {...$$restProps}
    on:click
>
    <slot></slot>
</button>

<style lang='sass'>
    $accentColors: 'primary', 'secondary', 'info', 'success', 'warning', 'error'

    .btn
        display: inline-grid
        grid-auto-flow: column
        grid-gap: calc(var(--key-size) * .25)
        justify-content: center
        align-items: center
        margin: unset
        padding: calc(var(--key-size) * .25) calc(var(--key-size) * .75)
        background-color: transparent
        border: calc(var(--key-size) * .0625) solid transparent
        border-radius: calc(var(--key-size) * .25)
        vertical-align: middle
        text-align: center
        color: currentColor
        font-size: var(--key-size)
        line-height: calc(var(--key-size) * 1.5)
        text-decoration: none
        cursor: pointer
        user-select: none
        outline: calc(var(--key-size) * .125) solid transparent
        outline-offset: calc(var(--key-size) * .0625)
        @each $colorName in $accentColors
            &-#{$colorName}
                background-color: var(--#{$colorName}-color)
                color: var(--positive-color)
                &:focus,
                &:hover,
                &.active
                    background-color: var(--#{$colorName}-color-d)
                    color: var(--positive-color)
                &:disabled
                    background-color: var(--#{$colorName}-color-l)
                    color: var(--positive-color-40)
                    &.active
                        background-color: var(--#{$colorName}-color-d)
                        color: var(--positive-color-60)
        &-positive
            background-color: var(--positive-color)
            color: var(--negative-color)
            &:focus,
            &:hover,
            &.active
                background-color: var(--positive-color-d)
            &:disabled
                background-color: var(--positive-color-l)
                color: var(--negative-color-40)
                &.active
                    background-color: var(--positive-color-d)
                    color: var(--negative-color-60)
        &-negative
            background-color: var(--negative-color)
            color: var(--positive-color)
            &:focus,
            &:hover,
            &.active
                background-color: var(--negative-color-d)
            &:disabled
                background-color: var(--negative-color-l)
                color: var(--positive-color-40)
                &.active
                    background-color: var(--negative-color-d)
                    color: var(--positive-color-60)
        @each $colorName in $accentColors
            &-alt-#{$colorName}
                color: var(--#{$colorName}-color)
                &:focus,
                &:hover,
                &.active
                    color: var(--#{$colorName}-color-d)
                &:disabled
                    color: var(--negative-color-20)
                    &.active
                        color: var(--negative-color-40)
        &-alt-positive
            color: var(--positive-color)
            &:focus,
            &:hover,
            &.active
                color: var(--positive-color-60)
            &:disabled
                color: var(--positive-color-20)
                &.active
                    color: var(--positive-color-40)
        &-alt-negative
            color: var(--negative-color)
            &:focus,
            &:hover,
            &.active
                color: var(--negative-color-60)
            &:disabled
                color: var(--negative-color-20)
                &.active
                    color: var(--negative-color-40)

        &:disabled
            cursor: not-allowed
        &:focus
            outline-color: var(--negative-color-20)
        &:not(:focus):not(:disabled):hover.active
            outline-color: var(--negative-color-40)
        &-sm
            font-size: calc(var(--key-size) * .875)
            line-height: calc(var(--key-size) * 1.25)
        &-lg
            font-size: calc(var(--key-size) * 1.125)
            line-height: calc(var(--key-size) * 1.75)
        // &-ico
        //     padding: calc(calc(calc(calc(var(--key-size) * 1.5) - 1em) / 2) + calc(var(--key-size) * .25))
        //     &.btn-sm
        //         padding: calc(calc(calc(calc(var(--key-size) * 1.25) - 1em) / 2) + calc(var(--key-size) * .25))
        //     &.btn-lg
        //         padding: calc(calc(calc(calc(var(--key-size) * 1.75) - 1em) / 2) + calc(var(--key-size) * .25))
        &-ico
            min-width: calc(var(--key-size) * 2.125)
            min-height: calc(var(--key-size) * 2.125)
            padding: calc(var(--key-size) * .25)
            &.btn-sm
                min-width: calc(var(--key-size) * 1.875)
                min-height: calc(var(--key-size) * 1.875)
            &.btn-lg
                min-width: calc(var(--key-size) * 2.375)
                min-height: calc(var(--key-size) * 2.375)
</style>