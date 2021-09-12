<script lang="ts">
    import { app } from 'src/store/store'

    import Item from './item/Item.svelte'

    // export let segment = 'home' // move to store
    const items = [
        {
            id: 1,
            icon: 'home',
            title: 'Home page',
            segment: 'home'
        },		
        {
            id: 2,
            icon: 'dashboard',
            title: 'Dashboards',
            segment: 'dashboard',
            turbo: {
                icon: 'plus',
                segment: 'dashboard'
            }
        },
        {
            id: 3,
            icon: 'help',
            title: 'Get help',
            segment: 'help'
        }
    ]

</script>

<div class="items">
    {#each items as item (item.id)}
        <Item
            {...item}
            active={$app.currentSegment === item.segment}
            segment={item.segment}
        />
    {/each}
</div>

<style lang="sass">
    .items
        overflow-y: auto 
</style>