<script lang="ts">
    import { asideItems, appSegment } from 'src/store/store'
    import Item from './item/Item.svelte'
</script>

<div class="items">
    {#each $asideItems as item (item.id)}
        <Item
            {...item}
            active={$appSegment === item.segment}
            segment={item.segment}
        />
    {/each}
</div>

<style lang="sass">
    .items
        grid-column: 1/-1
        grid-row: 1/2
        overflow-x: hidden
        overflow-y: auto
</style>