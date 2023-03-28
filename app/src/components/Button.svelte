<script lang="ts">
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
    
<style lang="sass" global>
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
        outline-width: 0
        outline-style: solid
        outline-color: transparent
        outline-offset: 0
        transition: color .15s linear, background-color .15s linear, outline .15s linear
        appearance: none
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
                background-color: var(--#{$colorName}-color)
                color: var(--positive-color)
                &:disabled
                    background-color: var(--#{$colorName}-color-l)
                    color: var(--positive-color-40)

        @each $colorName in $accentColors
            &-alt-#{$colorName}
                background-color: var(--#{$colorName}-color-m)
                color: var(--#{$colorName}-color)
                &:focus,
                &:not(:disabled):hover,
                &.active
                    color: var(--#{$colorName}-color-d)
                &:disabled
                    color: var(--negative-color-20)
                &:not(:disabled):hover
                    color: var(--#{$colorName}-color-d)

        @each $colorName in $accentColors
            &-outline-#{$colorName}
                box-shadow: inset 0px 0px 0px calc(var(--size-1) / 4) var(--#{$colorName}-color, currentColor)
                color: var(--#{$colorName}-color)
                &:focus,
                &:not(:disabled):hover,
                &.active
                    box-shadow: inset 0px 0px 0px calc(var(--size-1) / 4) var(--#{$colorName}-color-d, currentColor)
                    background-color: var(--#{$colorName}-color-m)
                    color: var(--#{$colorName}-color-d)
                &:disabled
                    box-shadow: inset 0px 0px 0px calc(var(--size-1) / 4) var(--#{$colorName}-color-m, currentColor)
                    color: var(--negative-color-20)

        @each $size in $fontSizes
            &-#{$size}
                font-size: var(--fs-#{$size})
        &-ico
            padding: var(--size-1)
</style>