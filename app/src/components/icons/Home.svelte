<script lang="ts">
    export let size: string = undefined;
</script>

<div
    class:ico = {true}
    class:ico-sm = {size === 'sm'}
    class:ico-md = {size === 'md'}
    class:ico-lg = {size === 'lg'}
    class:ico-home = {true}
    {...$$restProps}
>
    {size}
</div>

<style lang="sass">
    .ico-home
        -webkit-mask-image: url(/icons/home.svg)
    .ico-sm
        height: 1rem
</style>