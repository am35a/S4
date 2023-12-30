<script lang="ts">
    import { path } from 'svelte-micro'
    import { asideItems, appSegment } from 'src/store/store'
    import Segment from './segment/Segment.svelte'

    $: $appSegment = $path //for browser backward and forward buttons
</script>

<div
    class:segments = {true}
    {...$$restProps}
>
    {#each $asideItems as item (item.id)}
        <Segment {...item}/>
    
        <!-- <button
            id="id-{item.id}"
            class="btn jc-start px-1"
            type="reset"
            disabled={$appSegment === item.segment}
        >
            <span class="ico ico-ghost" style="--ico-image: url(/icons/{item.icon}.svg);">&nbsp;</span>
            <span class="truncate">{item.title}</span>
        </button> -->

        <!-- <Item
            {...item}
            active={$appSegment === item.segment}
            segment={item.segment}
        /> -->
    {/each}
    <!-- <button class="btn jc-start px-1" type="reset">
        <span class="ico ico-ghost" style="--ico-image: url(/icons/ghost.svg);">&nbsp;</span>
        <span class="truncate">Title of nav menu item with long name</span>
    </button> -->
</div>

<style lang="sass">
</style>