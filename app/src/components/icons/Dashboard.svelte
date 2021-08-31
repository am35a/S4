<script lang="ts">
    export let size: string = undefined;
</script>

<div
    class:ico = {true}
    class:ico-sm = {size === 'sm'}
    class:ico-md = {size === 'md'}
    class:ico-lg = {size === 'lg'}
    class:ico-dashboard = {true}
    {...$$restProps}
>
    {size}
</div>

<style lang="sass">
    .ico-dashboard
        -webkit-mask-image: url(/icons/dashboard.svg)
</style>