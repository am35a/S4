<script lang="ts">
    import { Route, path, query, hash } from 'svelte-micro'

    import PageAlerts from './alerts/Alerts.svelte'
    import PageButtons from './buttons/Buttons.svelte'
    import PageButtonsGroup from './buttons-group/ButtonsGroup.svelte'
    import PageDetails from './details/Details.svelte'
    import PageHeading from './heading/Heading.svelte'
    import PageIcons from './icons/Icons.svelte'
</script>

<div class="h1" aria-level={1} role="heading">Components</div>

<Route path="/alerts">
    <svelte:component this={PageAlerts}/>
</Route>
<Route path="/buttons">
    <svelte:component this={PageButtons}/>
</Route>
<Route path="/buttons-group">
    <svelte:component this={PageButtonsGroup}/>
</Route>
<Route path="/details">
    <svelte:component this={PageDetails}/>
</Route>
<Route path="/heading">
    <svelte:component this={PageHeading}/>
</Route>
<Route path="/icons">
    <svelte:component this={PageIcons}/>
</Route>
<Route fallback>
    404
</Route>