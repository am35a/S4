<script lang="ts">
    import { Route, path, query, hash } from 'svelte-micro'

    import { asideItems } from 'src/store/store'

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
        <Route path={"/home"}>
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
            <svelte:component this={PageUtilities}/>
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

<!--
    <div class="d-inline-grid g-2 p-4">
        <Button class="btn btn-secondary">
            <Icon name="ghost" size="sm"/>
            Button
        </Button>
        <Button class="btn btn-secondary active">
            <Icon name="ghost" size="sm"/>
            Button
        </Button>
        <Button class="btn btn-secondary" disabled>
            <Icon name="ghost" size="sm"/>
            Button
        </Button>        
        <Button class="btn btn-secondary active" disabled>
            <Icon name="ghost" size="sm"/>
            Button
        </Button>
    </div>
    <div class="d-inline-grid g-2 p-4">
        <Button class="btn btn-link-primary">
            <Icon class="color-warning ico-sm" name="ghost"/>
            Button
        </Button>
        <Button class="btn btn-link-primary active">
            <Icon name="ghost" size="sm"/>
            Button
        </Button>
        <Button class="btn btn-link-primary" disabled>
            <Icon name="ghost" size="sm"/>
            Button
        </Button>
        <Button class="btn btn-link-primary active" disabled>
            <Icon name="ghost" size="sm"/>
            Button
        </Button>
    </div>

    <hr>

    <div class="h1" aria-level={1} role="heading">Colors</div>
    <div class="p-4">
        <div class="d-inline" style="width: 2rem; height: 2rem; background-color: var(--positive-color);"></div>
        <div class="d-inline" style="width: 2rem; height: 2rem; background-color: var(--positive-color-90);"></div>
        <div class="d-inline" style="width: 2rem; height: 2rem; background-color: var(--positive-color-80);"></div>
        <div class="d-inline" style="width: 2rem; height: 2rem; background-color: var(--positive-color-70);"></div>
        <div class="d-inline" style="width: 2rem; height: 2rem; background-color: var(--positive-color-60);"></div>
        <div class="d-inline" style="width: 2rem; height: 2rem; background-color: var(--positive-color-50);"></div>
        <div class="d-inline" style="width: 2rem; height: 2rem; background-color: var(--positive-color-40);"></div>
        <div class="d-inline" style="width: 2rem; height: 2rem; background-color: var(--positive-color-30);"></div>
        <div class="d-inline" style="width: 2rem; height: 2rem; background-color: var(--positive-color-20);"></div>
        <div class="d-inline" style="width: 2rem; height: 2rem; background-color: var(--positive-color-10);"></div>
        <div></div>
        <div class="d-inline" style="width: 2rem; height: 2rem; background-color: var(--negative-color);"></div>
        <div class="d-inline" style="width: 2rem; height: 2rem; background-color: var(--negative-color-90);"></div>
        <div class="d-inline" style="width: 2rem; height: 2rem; background-color: var(--negative-color-80);"></div>
        <div class="d-inline" style="width: 2rem; height: 2rem; background-color: var(--negative-color-70);"></div>
        <div class="d-inline" style="width: 2rem; height: 2rem; background-color: var(--negative-color-60);"></div>
        <div class="d-inline" style="width: 2rem; height: 2rem; background-color: var(--negative-color-50);"></div>
        <div class="d-inline" style="width: 2rem; height: 2rem; background-color: var(--negative-color-40);"></div>
        <div class="d-inline" style="width: 2rem; height: 2rem; background-color: var(--negative-color-30);"></div>
        <div class="d-inline" style="width: 2rem; height: 2rem; background-color: var(--negative-color-20);"></div>
        <div class="d-inline" style="width: 2rem; height: 2rem; background-color: var(--negative-color-10);"></div>
        <div></div>
        <div class="d-inline" style="width: 2rem; height: 2rem; background-color: var(--primary-color-l);"></div>
        <div class="d-inline" style="width: 2rem; height: 2rem; background-color: var(--primary-color);"></div>
        <div class="d-inline" style="width: 2rem; height: 2rem; background-color: var(--primary-color-d);"></div>
        <div></div>
        <div class="d-inline" style="width: 2rem; height: 2rem; background-color: var(--secondary-color-l);"></div>
        <div class="d-inline" style="width: 2rem; height: 2rem; background-color: var(--secondary-color);"></div>
        <div class="d-inline" style="width: 2rem; height: 2rem; background-color: var(--secondary-color-d);"></div>
        <div></div>
        <div class="d-inline" style="width: 2rem; height: 2rem; background-color: var(--info-color-l);"></div>
        <div class="d-inline" style="width: 2rem; height: 2rem; background-color: var(--info-color);"></div>
        <div class="d-inline" style="width: 2rem; height: 2rem; background-color: var(--info-color-d);"></div>
        <div></div>
        <div class="d-inline" style="width: 2rem; height: 2rem; background-color: var(--success-color-l);"></div>
        <div class="d-inline" style="width: 2rem; height: 2rem; background-color: var(--success-color);"></div>
        <div class="d-inline" style="width: 2rem; height: 2rem; background-color: var(--success-color-d);"></div>
        <div></div>
        <div class="d-inline" style="width: 2rem; height: 2rem; background-color: var(--warning-color-l);"></div>
        <div class="d-inline" style="width: 2rem; height: 2rem; background-color: var(--warning-color);"></div>
        <div class="d-inline" style="width: 2rem; height: 2rem; background-color: var(--warning-color-d);"></div>
        <div></div>
        <div class="d-inline" style="width: 2rem; height: 2rem; background-color: var(--error-color-l);"></div>
        <div class="d-inline" style="width: 2rem; height: 2rem; background-color: var(--error-color);"></div>
        <div class="d-inline" style="width: 2rem; height: 2rem; background-color: var(--error-color-d);"></div>
    </div>
-->
</div>

<style lang="sass" global>
    .body
        grid-column: 2/3
        grid-row: 2/3
        position: relative
        padding: calc(var(--key-size) * .5)
        overflow: auto
        z-index: 1
</style>