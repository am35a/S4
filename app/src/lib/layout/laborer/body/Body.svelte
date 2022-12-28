<script lang="ts">
    import { Route, path, query, hash } from 'svelte-micro'

    // import { asideItems } from 'src/store/store'

    // let asideRoute = [
	// 	{comp: () => import('./home/Home.svelte')}
    // ]
    // $: for (const [index, item] of $asideItems.entries()) {
    //     asideRoute[index] = {comp: () => import(`.${item.segment}/${item.segment[1].toUpperCase()}${item.segment.slice(2)}.svelte`)}
    // }
    // $: console.log(JSON.stringify(asideRoute))

    import PageHome from './home/Home.svelte'
    import PageCore from './core/Core.svelte'
    import PageColors from './colors/Colors.svelte'
    import PageComponents from './components/Components.svelte'
    import PageUtilities from './utilities/Utilities.svelte'
        // import Alignment from './utilities/alignment/Alignment.svelte'
        // ...
        // import Typography from './utilities/typography/Typography.svelte'
    import PageLayout from './layout/Layout.svelte'
    import PageHelp from './help/Help.svelte'

    // $: console.log($asideItems[2])
</script>

<div class="body">
    
    <!-- <Icon name={$userData.aside.items[3].turbo.icon} size="lg"/> -->
<!-- 
    <div><span>{$path}</span></div>
    <hr> -->

    <Route>
        <Route path={'/home'}>
            <svelte:component this={PageHome}/>
        </Route>
        <Route path="/core">
            <svelte:component this={PageCore}/>
        </Route>
        <Route path="/colors">
            <svelte:component this={PageColors}/>
        </Route>
        <Route path="/components">
            <svelte:component this={PageComponents}/>
        </Route>
        <Route path="/utilities">
            <svelte:component this={PageUtilities} jumpTo={'/utilities'}/>
        </Route>
        <Route path="/layout">
            <svelte:component this={PageLayout}/>
        </Route>
        <Route path="/help">
            <svelte:component this={PageHelp}/>
        </Route>
        <Route fallback>
            404
        </Route>
    </Route>

    <!-- {#if $path === '/home'}
        <svelte:component this={Home}/>
    {:else if $path === '/help'}
        <svelte:component this={Help}/>
    {:else}
        404
    {/if} -->
</div>

<style lang="sass" global>
    .body
        grid-column: 2/3
        grid-row: 2/3
        position: relative
        padding: 1em
        overflow: auto
        z-index: 1
</style>