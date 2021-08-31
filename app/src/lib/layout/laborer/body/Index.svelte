<script lang="ts">
    import Button from "../../../../components/Button.svelte";
</script>

<div class="body">
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores molestias veniam voluptas earum blanditiis nesciunt quas ducimus culpa harum magni sunt aperiam, corrupti deleniti voluptatum ex veritatis omnis voluptates consectetur?</p>
    <Button class="btn btn-primary" style="margin: 1rem">Button</Button>
    <Button class="btn btn-secondary" style="margin: 1rem">Button</Button>
    <Button class="btn btn-info" style="margin: 1rem">Button</Button>
    <Button class="btn btn-success" style="margin: 1rem">Button</Button>
    <Button class="btn btn-warning" style="margin: 1rem">Button</Button>
    <Button class="btn btn-error" style="margin: 1rem">Button</Button>
</div>

<style lang="sass">
    .body
        grid-column: 2/3
        grid-row: 2/3
        position: relative
        overflow: auto
        z-index: 1
</style>