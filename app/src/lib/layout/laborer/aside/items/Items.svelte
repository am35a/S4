<script lang="ts">
    import Item from './item/Item.svelte'

    export let segment = 'home' // move to store
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
            segment: 'dashboard'
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
        <!-- <Item icon={item.icon} title={item.title} active={segment === item.segment} segment={segment} /> -->
        <Item {...item} active={segment === item.segment} segment={segment} />
    {/each}
</div>

<style lang="sass">
    .items
        overflow-y: auto 
</style>