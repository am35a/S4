<script lang="ts">
    import Icon from "component/Icon.svelte"
    import Button from "component/Button.svelte"
</script>

<div class="brand">
    <Button class="btn btn-ico color-positive">
        <Icon name="ghost" size="lg"/>
    </Button>
</div>

<style lang="sass" global>
    .brand
        grid-column: 1/-1
        grid-row: 2/3
        display: grid
        overflow: hidden
</style>