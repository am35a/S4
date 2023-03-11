<script lang="ts">
    import { Route, path, query, hash } from 'svelte-micro'

    import ArticleGroup from './group/Group.svelte'
</script>

<h1>No JS components</h1>

<Route path="/group">
    <svelte:component this={ArticleGroup}/>
</Route>
<Route fallback>
    404
</Route>
