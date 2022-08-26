<script lang="ts">
    import { Route, path, query, hash } from 'svelte-micro'

    import ArticleAlerts from './alerts/Alerts.svelte'
    import ArticleButtons from './buttons/Buttons.svelte'
    import ArticleButtonsGroup from './buttonsgroup/ButtonsGroup.svelte'
    import ArticleDetails from './details/Details.svelte'
    import ArticleIcons from './icons/Icons.svelte'
</script>

<h1>Components</h1>

<Route path="/alerts">
    <svelte:component this={ArticleAlerts}/>
</Route>
<Route path="/buttons">
    <svelte:component this={ArticleButtons}/>
</Route>
<Route path="/buttonsgroup">
    <svelte:component this={ArticleButtonsGroup}/>
</Route>
<Route path="/details">
    <svelte:component this={ArticleDetails}/>
</Route>
<Route path="/icons">
    <svelte:component this={ArticleIcons}/>
</Route>
<Route fallback>
    404
</Route>
