<script lang="ts">
    import { Route, getPathSegments, path, query, hash } from 'svelte-micro'

    import ArticleCSS from './css/Css.svelte'
    import ArticleSvelte from './svelte/Svelte.svelte'

    export let jumpTo: string = ''
</script>

<h1>UI overview</h1>
{#if getPathSegments($path).length === 1 && getPathSegments($path)[0] === jumpTo}
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
