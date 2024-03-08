<script>
    import { path } from 'svelte-micro'
    import { asideItems, appSegment } from 'src/store/store'
    import Segment from './segment/Segment.svelte'

    $: $appSegment = $path //for browser backward and forward buttons
</script>

<div
    class:segments={true}
    {...$$restProps}
>
    <div class="drpdwn-hover d-grid g-2">
        {#each $asideItems as item (item.id)}
            <Segment {...item}/>
        {/each}
    </div>
</div>