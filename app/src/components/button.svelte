<script lang='ts'>
// https://github.com/hperrin/svelte-material-ui/tree/master/packages
</script>

<button on:click {...$$restProps}>
    <slot></slot>
</button>

<style lang='sass'>
    $accentColors: 'primary', 'secondary', 'info', 'success', 'warning', 'error'

    .btn
        display: inline grid
        grid-auto-flow: column
        grid-gap: calc(var(--key-size) * .25)
        align-items: center
        margin: unset
        padding: calc(var(--key-size) * .25) calc(var(--key-size) * .75)
        background-color: var(--negative-color-15)
        border: calc(var(--key-size) * .0625) solid transparent
        border-radius: calc(var(--key-size) * .25)
        vertical-align: middle
        text-align: center
        color: var(--negative-color)
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
                    cursor: not-allowed
                    &.active
                        background-color: var(--#{$colorName}-color-d)
                        color: var(--positive-color-60)
        @each $colorName in $accentColors
            &-link-#{$colorName}
                color: var(--#{$colorName}-color)
                &:focus,
                &:hover,
                &.active
                    color: var(--#{$colorName}-color-d)
                &:disabled
                    color: var(--negative-color-20)
                    &.active
                        color: var(--negative-color-40)
        // @each $colorName in $accentColors
        //     &-outline-#{$colorName}
        //         border-color: var(--#{$colorName}-color)
        //         color: var(--#{$colorName}-color-d)
        //         &:focus,
        //         &:hover,
        //         &.active
        //             color: var(--positive-color)
        //             &:not(:disabled)
        //                 background-color: var(--#{$colorName}-color)
        //         &:disabled
        //             border-color: var(--#{$colorName}-color-l)
        //             color: var(--#{$colorName}-color-l)
        //             cursor: not-allowed
        //             &.active
        //                 border-color: var(--#{$colorName}-color)
        //                 background-color: var(--#{$colorName}-color)
        //                 color: var(--positive-color-50)
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
        &-ico
            padding: calc(var(--key-size) * .25)
        
</style>