<script lang="ts">
    import { path } from 'svelte-micro'
    import { asideItems, appSegment } from 'src/store/store'
    import Item from './itemin/Item.svelte'

    $: $appSegment = $path //for browser backward and forward buttons
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

<style lang="sass" global>
    .items
        grid-column: 1/-1
        grid-row: 1/2
        overflow-x: hidden
        overflow-y: auto
        scrollbar-width: none
        &::-webkit-scrollbar
            display: none
</style>