<script>
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

<!-- <svg class="tl-grid" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="grid-64" width="640" height="640" patternUnits="userSpaceOnUse">
        <circle class="tl-grid-dot" cx="616.5" cy="540.5" r="1" opacity="1"></circle>
      </pattern>
      <pattern id="grid-16" width="160" height="160" patternUnits="userSpaceOnUse">
        <circle class="tl-grid-dot" cx="136.5" cy="60.5" r="1" opacity="1"></circle>
      </pattern>
      <pattern id="grid-4" width="40" height="40" patternUnits="userSpaceOnUse">
        <circle class="tl-grid-dot" cx="16.5" cy="20.5" r="1" opacity="1"></circle>
      </pattern>
      <pattern id="grid-1" width="10" height="10" patternUnits="userSpaceOnUse">
        <circle class="tl-grid-dot" cx="6.5" cy="0.5" r="1" opacity="0.16666666666666669"></circle>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid-64)"></rect>
    <rect width="100%" height="100%" fill="url(#grid-16)"></rect>
    <rect width="100%" height="100%" fill="url(#grid-4)"></rect>
    <rect width="100%" height="100%" fill="url(#grid-1)"></rect>
</svg> -->

<style lang="sass">
    main
        position: relative
        grid-column: 1/-1
        grid-row: 1/-1

    // .tl-grid
    //     position: absolute
    //     top: 0
    //     right: 0
    //     bottom: 0
    //     left: 0
    //     width: 100%
    //     height: 100%
    //     touch-action: none
    //     pointer-events: none
    //     z-index: 0
    //     contain: strict
</style>