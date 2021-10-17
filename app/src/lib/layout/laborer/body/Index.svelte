<script lang="ts">
    import Button from 'src/components/Button.svelte'
</script>

<div class="body">
    <Button class="btn btn-primary" style="margin: 1rem">Button</Button>
</div>

<style lang="sass">
    .body
        grid-column: 2/3
        grid-row: 2/3
        position: relative
        overflow: auto
        z-index: 1
</style>