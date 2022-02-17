<script lang="ts">
    import { Route, path, query, hash } from 'svelte-micro'

    import Alerts from './alerts/Alerts.svelte'
    import Buttons from './buttons/Buttons.svelte'
    import ButtonsGroup from './buttons-group/ButtonsGroup.svelte'
    import Details from './details/Details.svelte'
    import Icons from './icons/Icons.svelte'
</script>

<div class="h1" aria-level={1} role="heading">Components</div>

<Route path="/alerts">
    <svelte:component this={Alerts}/>
</Route>
<Route path="/buttons">
    <svelte:component this={Buttons}/>
</Route>
<Route path="/buttons-group">
    <svelte:component this={ButtonsGroup}/>
</Route>
<Route path="/details">
    <svelte:component this={Details}/>
</Route>
<Route path="/icons">
    <svelte:component this={Icons}/>
</Route>
<Route fallback>
    404
</Route>