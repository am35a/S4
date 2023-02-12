<script lang="ts">
    import { Route, pathToArray, path, query, hash } from 'svelte-micro'

    import ArticleCSS from './css/Css.svelte'
    import ArticleSvelte from './svelte/Svelte.svelte'

    export let jumpTo: string = ''
</script>

<h1>UI overview</h1>
{#if pathToArray($path).length === 1 && pathToArray($path)[0] === jumpTo}
    <p>
        Here will be the utilities description.
    </p>
{/if}

<Route path="/css">
    <svelte:component this={ArticleCSS}/>
</Route>
<Route path="/svelte">
    <svelte:component this={ArticleSvelte}/>
</Route>
<Route fallback>
    404
</Route>
