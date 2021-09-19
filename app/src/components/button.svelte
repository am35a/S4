<script lang='ts'>
// https://github.com/hperrin/svelte-material-ui/tree/master/packages
</script>

<button on:click {...$$restProps}>
    <slot></slot>
</button>

<style lang='sass'>
    $colorsName: 'primary', 'secondary', 'info', 'success', 'warning', 'error'

    .btn
        display: inline-block
        margin: unset
        padding: calc(var(--key-size) * .25) calc(var(--key-size) * .625)
        background-color: var(--negative-color-15)
        border: calc(var(--key-size) * .0625) solid transparent
        border-radius: calc(var(--key-size) * .25)
        vertical-align: middle
        text-align: center
        color: var(--negative-color)
        font-size: var(--key-size)
        line-height: 1.5
        text-decoration: none
        cursor: pointer
        user-select: none
        @each $colorName in $colorsName
            &-#{$colorName}
                background-color: var(--#{$colorName}-color)
                color: var(--positive-color)
        @each $colorName in $colorsName
            &-#{$colorName}
                &:hover
                    background-color: var(--#{$colorName}-color-d)
                    color: var(--positive-color)
        
</style>