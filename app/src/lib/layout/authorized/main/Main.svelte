<script lang="ts">
    import { Route, path, query, hash } from 'svelte-micro'

    import PageHome from './home/Home.svelte'
    import PageCore from './core/Core.svelte'
    import PageColors from './colors/Colors.svelte'
    import PageComponents from './components/Components.svelte'
    import PageNoJSComponents from './nojscomponents/Components.svelte'
    import PageUtilities from './utilities/Utilities.svelte'
    import PageUi from './ui/Ui.svelte'
    import PageLayout from './layout/Layout.svelte'
    import PageHelp from './help/Help.svelte'

</script>

<!-- class="overflow--hidden" -->
<main
    {...$$restProps}
>
    <Route>
        <Route path="/home">
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
        <Route path="/nojscomponents">
            <svelte:component this={PageNoJSComponents}/>
        </Route>
        <Route path="/utilities">
            <svelte:component this={PageUtilities} jumpTo={'/utilities'}/>
        </Route>
        <Route path="/ui">
            <svelte:component this={PageUi} jumpTo={'/ui'}/>
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
</main>

<style lang="sass">
    main
        position: relative
        grid-column: 1/-1
        grid-row: 1/-1
</style>