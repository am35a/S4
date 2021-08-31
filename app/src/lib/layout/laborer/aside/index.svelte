<script lang="ts">
    import IconHome from '../../../../components/icons/Home.svelte'
    // import IconDashboard from '../../../../components/icons/Dashboard.svelte'
    import Icon from '../../../../components/Icon.svelte'
</script>

<aside class="aside">
    <div class="fader"></div>
    <div class="item">
        <div class="hover"></div>
        <div class="active"></div>
        <div class="icon">
            <svelte:component this="{IconHome}"/>
        </div>
        <!-- <IconDashboard size="sm"/> -->
        <Icon name="dashboard" size="sm"/>
        <div class="title"></div>
    </div>
</aside>

<style lang="sass">
    .aside
        grid-column: 1/2
        grid-row: 1/3
        display: grid
        width: 16rem //var(--layout-aside-width)
        background-color: var(--aside-bg-color)
        z-index: 100
        // &:hover
        //     width: calc(var(--layout-aside-width) * 8)
        .fader
            position: absolute
            display: grid
            width: 100%
            height: 100%
            background-color: hsl(0, 0%, 0%, .75)
    .item
        display: grid
        color: var(--positive-color)
</style>