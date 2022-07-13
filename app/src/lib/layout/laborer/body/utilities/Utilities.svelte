<script lang="ts">
    import { Route, path, query, hash } from 'svelte-micro'

    import PageAlignment from './alignment/Alignment.svelte'
    import PageBackground from './background/Background.svelte'
    import PageBorder from './border/Border.svelte'
    import PageDisplay from './display/Display.svelte'
    import PageFlex from './Flex/flex.svelte'
    import PageGrid from './Grid/grid.svelte'
    import PageOverflow from './overflow/Overflow.svelte'
    import PagePosition from './position/Position.svelte'
    import PagePseudos from './pseudos/Pseudos.svelte'
    import PageShadow from './shadow/Shadow.svelte'
    import PageSizing from './sizing/Sizing.svelte'
    import PageSpacing from './spacing/Spacing.svelte'
    import PageTypography from './typography/Typography.svelte'

</script>

<div class="h1" aria-level={1} role="heading">Utilities</div>

<Route path="/alignment">
    <svelte:component this={PageAlignment}/>
</Route>
<Route path="/background">
    <svelte:component this={PageBackground}/>
</Route>
<Route path="/border">
    <svelte:component this={PageBorder}/>
</Route>
<Route path="/display">
    <svelte:component this={PageDisplay}/>
</Route>
<Route path="/flex">
    <svelte:component this={PageFlex}/>
</Route>
<Route path="/grid">
    <svelte:component this={PageGrid}/>
</Route>
<Route path="/overflow">
    <svelte:component this={PageOverflow}/>
</Route>
<Route path="/position">
    <svelte:component this={PagePosition}/>
</Route>
<Route path="/pseudos">
    <svelte:component this={PagePseudos}/>
</Route>
<Route path="/shadow">
    <svelte:component this={PageShadow}/>
</Route>
<Route path="/sizing">
    <svelte:component this={PageSizing}/>
</Route>
<Route path="/spacing">
    <svelte:component this={PageSpacing}/>
</Route>
<Route path="/typography">
    <svelte:component this={PageTypography}/>
</Route>
<Route fallback>
    404
</Route>