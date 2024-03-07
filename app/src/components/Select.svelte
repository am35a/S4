<script>

</script>

<select
    class:frm = {true}
    {...$$restProps}
    placeholder = {$$restProps.placeholder ? $$restProps.placeholder : `Select the ${$$restProps.name}`}
>
    <slot></slot>
</select>

<style lang="sass" global>
    $accentColors: 'primary', 'secondary', 'info', 'success', 'warning', 'error'

    select
        &.frm
            display: inline-grid
            grid-auto-flow: column
            margin: unset
            min-width: 0
            background-color: var(--positive-color)
            border: none
            border-radius: var(--br-sm)
            color: currentColor
            line-height: var(--lh)
            outline-width: calc(var(--size-1) * .25)
            outline-style: solid
            outline-color: var(--negative-color-20)
            outline-offset: calc(var(--size-1) * -.25)
            transition: all .125s
            // appearance: none
            &:not([multiple])
                height: calc(var(--lh) * 1em + var(--size-2))
                padding: 0 var(--size-3)
            &[multiple]
                padding: var(--size-1)
                > option
                    height: calc(var(--lh) * 1em)
                    display: inline-grid
                    align-content: center
                    padding: 0 var(--size-2)
                    border-radius: var(--br-xs)
                    background-color: var(--positive-color)
                &:not(:disabled) > option
                    &:checked
                        background-color: var(--negative-color-20)
                    &:not(:checked):hover
                        background-color: var(--negative-color-10)
                &:disabled > option
                    &:checked
                        background-color: var(--negative-color-10)

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
                box-shadow: inset 0 0 0 calc(var(--size-1) / 4) currentColor

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
                    box-shadow: inset 0 0 0 calc(var(--size-1) / 4) var(--#{$colorName}-color, currentColor)
                    color: var(--#{$colorName}-color)
                    outline-color: transparent
                    &:disabled
                        box-shadow: inset 0 0 0 calc(var(--size-1) / 4) var(--#{$colorName}-color-m, currentColor)
                        color: var(--negative-color-20)
</style>