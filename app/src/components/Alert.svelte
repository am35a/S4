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
        <slot></slot>
        <div class="">
            <hr class="my-4">
            <Button
                class="btn btn-sm btn-success"
                on:click={() => isAlert = false}
            >
                <Icon name="close-o"/> Close
            </Button>
            <Button
                class="btn btn-sm btn-alt-success bg-positive"
                on:click={() => isAlert = false}
            >
                <Icon name="close-o"/> Close
            </Button>
        </div>
    </div>
{/if}

<style lang="sass" global>
    $accentColors: 'primary', 'secondary', 'info', 'success', 'warning', 'error'

    .alert
        display: grid
        padding: calc(var(--key-size) * 1)
        border-radius: calc(var(--key-size) * 0.25)
        @each $colorName in $accentColors
            &-#{$colorName}
                background-color: var(--#{$colorName}-color-l)
                color: var(--#{$colorName}-color-d)
                font-weight: 500
</style>