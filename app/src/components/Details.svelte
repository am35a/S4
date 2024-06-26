<script lang="ts">
    import Icon from 'component/Icon.svelte'
</script>

<details
    class:dtl={true}
    {...$$restProps}
>
    {#if $$slots.title}
        <summary>
            <slot name="title"/>
            <Icon name="chevron-down" class="font-size--sm" expand/>
            <Icon name="chevron-up" class="font-size--sm" contract/>
        </summary>
    {:else}
        <slot name="summary"></slot>
    {/if}
    {#if $$slots.body}
        <slot name="body"/>
    {:else}
        <div class="padding--sm">
            <div class="alert alert-error"> Error: details without details</div>
        </div>
    {/if}
</details>

<style lang="sass" global>
    $accentColors: 'primary', 'secondary', 'info', 'success', 'warning', 'error'

    .dtl
        border-radius: var(--size-1)
        outline-width: 0
        outline-style: solid
        outline-color: transparent
        outline-offset: 0
        transition: color .15s linear, outline .15s linear
        &:not([open])
            &:focus-within,
            &:hover
                outline-width: calc(var(--size-1) / 2)
                outline-style: solid
                outline-color: var(--negative-color-20)
                outline-offset: calc(var(--size-1) / 4)
        &[open]
            outline-width: calc(var(--size-1) / 2)
            outline-style: solid
            outline-color: var(--negative-color-20)
            outline-offset: calc(var(--size-1) / 4)
            &:focus-within,
            &:hover
                outline-color: var(--negative-color-40)

        &:not([open]) [contract],
        &[open] [expand]
                display: none

        summary
            display: grid
            grid-auto-flow: column
            column-gap: 0.5em
            justify-content: space-between
            padding: var(--size-3)
            background-color: var(--positive-color-30)
            border: none
            color: currentColor
            list-style: none
            cursor: pointer
            outline: none
            transition: background-color .15s linear
            user-select: none
        &:not([open])
            summary
                border-radius: var(--size-1) var(--size-1) var(--size-1) var(--size-1)
        &[open]
            summary
                border-radius: var(--size-1) var(--size-1) 0 0

        &-alt
            summary
                background-color: var(--negative-color-10)
        &-outline
            summary
                box-shadow: inset 0 0 0 calc(var(--size-1) / 4) currentColor


        @each $colorName in $accentColors
            &-#{$colorName}
                summary
                    background-color: var(--#{$colorName}-color)
                    color: var(--positive-color)

        @each $colorName in $accentColors
            &-alt-#{$colorName}
                summary
                    background-color: var(--#{$colorName}-color-m)
                    color: var(--#{$colorName}-color)
                &:focus-within,
                &:hover
                    summary
                        color: var(--#{$colorName}-color-d)

        @each $colorName in $accentColors
            &-outline-#{$colorName}
                summary
                    box-shadow: inset 0 0 0 calc(var(--size-1) / 4) currentColor
                    color: var(--#{$colorName}-color)
                &:focus-within,
                &:hover
                    summary
                        background-color: var(--#{$colorName}-color-m)
                        color: var(--#{$colorName}-color-d)
</style>