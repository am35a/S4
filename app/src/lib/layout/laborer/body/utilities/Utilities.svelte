<script lang="ts">
    import { Route, path, query, hash } from 'svelte-micro'

    import Alignment from './alignment/Alignment.svelte'
    import Background from './background/Background.svelte'
    import Border from './border/Border.svelte'
    import Display from './display/Display.svelte'
    import Flex from './Flex/flex.svelte'
    import Grid from './Grid/grid.svelte'
    import Overflow from './overflow/Overflow.svelte'
    import Position from './position/Position.svelte'
    import Pseudos from './pseudos/Pseudos.svelte'
    import Shadow from './shadow/Shadow.svelte'
    import Sizing from './sizing/Sizing.svelte'
    import Spacing from './spacing/Spacing.svelte'
    import Typography from './typography/Typography.svelte'

</script>

<div class="h1" aria-level={1} role="heading">Utilities</div>

<Route path="/alignment">
    <svelte:component this={Alignment}/>
</Route>
<Route path="/background">
    <svelte:component this={Background}/>
</Route>
<Route path="/border">
    <svelte:component this={Border}/>
</Route>
<Route path="/display">
    <svelte:component this={Display}/>
</Route>
<Route path="/flex">
    <svelte:component this={Flex}/>
</Route>
<Route path="/grid">
    <svelte:component this={Grid}/>
</Route>
<Route path="/overflow">
    <svelte:component this={Overflow}/>
</Route>
<Route path="/position">
    <svelte:component this={Position}/>
</Route>
<Route path="/pseudos">
    <svelte:component this={Pseudos}/>
</Route>
<Route path="/shadow">
    <svelte:component this={Shadow}/>
</Route>
<Route path="/sizing">
    <svelte:component this={Sizing}/>
</Route>
<Route path="/spacing">
    <svelte:component this={Spacing}/>
</Route>
<Route path="/typography">
    <svelte:component this={Typography}/>
</Route>
<Route fallback>
    404
</Route>