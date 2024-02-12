<script lang="ts">
    import { Route, path, query, hash } from 'svelte-micro'

    import ArticleAlerts from './alerts/Alerts.svelte'
    import ArticleGroup from './group/Group.svelte'
</script>

<h1>No JS components</h1>

<Route path="/alerts">
    <svelte:component this={ArticleAlerts}/>
</Route>
<Route path="/group">
    <svelte:component this={ArticleGroup}/>
</Route>
<Route fallback>
    404
</Route>
