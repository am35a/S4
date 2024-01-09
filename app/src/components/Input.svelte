<script lang="ts">

    // https://developer.mozilla.org/ru/docs/Web/CSS/:out-of-range
    // https://developer.mozilla.org/ru/docs/Web/CSS/:read-only
    // https://developer.mozilla.org/en-US/docs/Web/CSS/:user-invalid

    export let value: string = ''

    // if($$restProps.type)
    //     console.log($$restProps.type)

    $: {
        if($$restProps.type === 'number')
            $$restProps.pattern = '^(0|[1-9][0-9]*)$'
    }
</script>

<input
    bind:value
    class:frm = {true}
    {...$$restProps}
    placeholder = {$$restProps.placeholder ? $$restProps.placeholder : $$restProps.type}
/>

<style lang="sass" global>
    $accentColors: 'primary', 'secondary', 'info', 'success', 'warning', 'error'

    [type="range"].frm,
    [type="url"].frm,
    [type="text"].frm,
    [type="search"].frm,
    [type="time"].frm,
    [type="date"].frm,
    [type="file"].frm,
    [type="email"].frm,
    [type="color"].frm,
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

    [type="file"].frm
        line-height: calc(var(--lh) * 1em + var(--size-2))
        cursor: pointer
        &::file-selector-button
            display: none

    [type="color"].frm
        padding: var(--size-1)
        cursor: pointer

    [type="range"].frm
        padding: var(--size-1)
        &::-webkit-slider-thumb
            appearance: none
            height: calc(var(--lh) * 1em)
            width: var(--size-2)
            background: currentColor
            cursor: ew-resize
            border-radius: calc(var(--size-1) / 2)
            border: unset
        &::-moz-range-thumb
            appearance: none
            height: calc(var(--lh) * 1em)
            width: var(--size-2)
            background: currentColor
            cursor: ew-resize
            border-radius: calc(var(--size-1) / 2)
            border: unset

    [type="radio"].frm,
    [type="checkbox"].frm
        display: inline-grid
        vertical-align: middle
        margin: unset
        width: 1em
        height: 1em
        background-color: var(--positive-color)
        border: none
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
            outline-width: 0
            &::after
                content: ''
                grid-row: 1/2
                grid-column: 1/2
                background-color: currentColor
        &:disabled
            background-color: var(--positive-color-20)
            color: var(--negative-color-20)
            outline-color: var(--negative-color-10)
            cursor: not-allowed
        &:focus,
        &:not(:disabled):hover
            outline-width: calc(var(--size-1) / 2)
            outline-style: solid
            outline-color: var(--negative-color-20)
            outline-offset: calc(var(--size-1) / 4)
        &-alt
            background-color: var(--negative-color-10)
            &:not(:disabled)
                outline-width: 0
                outline-offset: 0
            &:disabled
                outline-width: calc(var(--size-1) / 4)
            &:checked
                &::after
                    transform: scale(.75)
        &-outline
            outline-width: 0
            outline-offset: 0
            box-shadow: inset 0 0 0 calc(var(--size-1) / 4) currentColor
            &:checked
                &::after
                    transform: scale(.75)

        @each $colorName in $accentColors
            &-#{$colorName}
                color: var(--#{$colorName}-color)
                &:disabled
                    color: var(--negative-color-20)
                &:not(:disabled):hover
                    color: var(--#{$colorName}-color)

        @each $colorName in $accentColors
            &-alt-#{$colorName}
                background-color: var(--#{$colorName}-color-m)
                color: var(--#{$colorName}-color)
                &:disabled
                    color: var(--negative-color-20)
                &:not(:disabled):hover
                    color: var(--#{$colorName}-color)

        @each $colorName in $accentColors
            &-outline-#{$colorName}
                box-shadow: inset 0 0 0 calc(var(--size-1) / 4) var(--#{$colorName}-color, currentColor)
                color: var(--#{$colorName}-color)
                outline-color: transparent
                &:checked
                    &::after
                        transform: scale(.75)
                &:disabled
                    box-shadow: inset 0 0 0 calc(var(--size-1) / 4) var(--#{$colorName}-color-m, currentColor)
                    color: var(--negative-color-20)
                &:not(:disabled):hover
                    color: var(--#{$colorName}-color)

    [type="radio"].frm
        border-radius: 50%
        &:checked
            &::after
                border-radius: 50%
    [type="checkbox"].frm
        border-radius: var(--size-1)
        &:checked
            &::after
                border-radius: var(--size-1)
        &:indeterminate
            &::after
                content: ''
                grid-row: 1/2
                grid-column: 1/2
                background-color: currentColor
                border-radius: var(--size-1)
                height: var(--size-1)
                align-self: center
                transform: scale(.75)

</style>