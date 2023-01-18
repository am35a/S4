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
        $fontSizes: xxs, xs, sm, md, lg, xl, xxl
    
        .btn
            display: inline-grid
            grid-auto-flow: column
            grid-gap: var(--size-1)
            justify-content: center
            align-items: center
            margin: unset
            padding: var(--size-1) var(--size-3)
            background-color: transparent
            border: none
            border-radius: var(--size-1)
            vertical-align: middle
            text-align: center
            color: currentColor
            line-height: var(--lh)
            text-decoration: none
            cursor: pointer
            user-select: none
            outline: calc(var(--size-1) / 2) solid transparent
            outline-offset: calc(var(--size-1) / 4)                    
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
            &:disabled
                cursor: not-allowed
            &:focus
                outline-color: var(--negative-color-20)
            &:not(:focus):not(:disabled):hover.active
                outline-color: var(--negative-color-40)

            @each $size in $fontSizes
                &-#{$size}
                    font-size: var(--fs-#{$size})
                    // line-height: 2ex
    
            // &-sm
                // font-size: calc(var(--key-size) * .875)
                // line-height: calc(var(--key-size) * 1.25)
            // &-lg
                // font-size: calc(var(--key-size) * 1.125)
                // line-height: calc(var(--key-size) * 1.75)
            // &-ico
            //     padding: calc(calc(calc(calc(var(--key-size) * 1.5) - 1em) / 2) + calc(var(--key-size) * .25))
            //     &.btn-sm
            //         padding: calc(calc(calc(calc(var(--key-size) * 1.25) - 1em) / 2) + calc(var(--key-size) * .25))
            //     &.btn-lg
            //         padding: calc(calc(calc(calc(var(--key-size) * 1.75) - 1em) / 2) + calc(var(--key-size) * .25))
            &-ico
                // min-width: 2ex
                // min-height: 2ex
                // min-width: calc(0.25em + 2ex + 0.25em)
                // min-height: calc(0.25em + 2ex + 0.25em)
                padding: .25em
    </style>