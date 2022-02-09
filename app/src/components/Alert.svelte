<script lang="ts">
    import Icon from 'src/components/Icon.svelte'
    import Button from 'src/components/Button.svelte'

    let isAlert: boolean = true
</script>

{#if isAlert}
    <div
        class:alert={true}
        {...$$restProps}
    >
        {#if $$restProps.class.includes('alert-closable')}
            <Button
                class="btn-close"
                on:click={() => isAlert = false}
                title="Close alert"
            ><Icon name="close"/></Button>
        {/if}
        <slot></slot>
    </div>
{/if}

<!-- https://www.youtube.com/watch?v=8-shf8rZcXU -->

<style lang="sass" global>
    $accentColors: 'primary', 'secondary', 'info', 'success', 'warning', 'error'

    .alert
        position: relative
        grid-gap: var(--key-size)
        padding: calc(var(--key-size) * 1)
        border-radius: calc(var(--key-size) * 0.25)
        border: calc(var(--key-size) * .0625) solid transparent
        @each $colorName in $accentColors
            &-#{$colorName}
                background-color: var(--#{$colorName}-color-l)
                color: var(--#{$colorName}-color-d)
                font-weight: 500
        &:not(&-closable)
            .btn-close
                display: none
        &-closable
            .btn-close
                position: absolute
                top: 0
                right: 0
                margin-top: calc(var(--key-size) * .125)
                margin-right: calc(var(--key-size) * .125)
                padding: calc(var(--key-size) * .125)
                &:hover
                    background-color: var(--positive-color-50)

</style>