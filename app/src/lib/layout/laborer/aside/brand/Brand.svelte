<script lang="ts">
    import Icon from "src/components/Icon.svelte"
    import Button from "src/components/Button.svelte"
</script>

<div class="brand">
    <Button class="btn btn-ico btn-secondary">
        <Icon name="ghost" size="lg"/>
    </Button>
</div>

<style lang="sass">
    .brand
        grid-column: 1/-1
        grid-row: 2/3
        display: grid
        overflow: hidden
</style>