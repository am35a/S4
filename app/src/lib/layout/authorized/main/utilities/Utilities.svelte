<script lang="ts">
    import { Route, getPathSegments, path, query, hash } from 'svelte-micro'

    import ArticleAlignment from './alignment/Alignment.svelte'
    import ArticleColors from './colors/Colors.svelte'
    import ArticleBackground from './background/Background.svelte'
    import ArticleBorder from './border/Border.svelte'
    import ArticleDisplay from './display/Display.svelte'
    import ArticleFlex from './flex/Flex.svelte'
    import ArticleFloat from './float/Float.svelte'
    import ArticleGrid from './grid/Grid.svelte'
    import ArticleOverflow from './overflow/Overflow.svelte'
    import ArticlePosition from './position/Position.svelte'
    import ArticlePseudos from './pseudos/Pseudos.svelte'
    import ArticleShadow from './shadow/Shadow.svelte'
    import ArticleSizing from './sizing/Sizing.svelte'
    import ArticleSpacing from './spacing/Spacing.svelte'
    import ArticleTypography from './typography/Typography.svelte'

    export let jumpTo: string = ''
</script>

<h1>Utilities</h1>
{#if getPathSegments($path).length === 1 && getPathSegments($path)[0] === jumpTo}
    <p>
        Here will be the utilities description.
    </p>
{/if}

<Route path="/alignment">
    <svelte:component this={ArticleAlignment}/>
</Route>
<Route path="/colors">
    <svelte:component this={ArticleColors}/>
</Route>
<Route path="/background">
    <svelte:component this={ArticleBackground}/>
</Route>
<Route path="/border">
    <svelte:component this={ArticleBorder}/>
</Route>
<Route path="/display">
    <svelte:component this={ArticleDisplay}/>
</Route>
<Route path="/flex">
    <svelte:component this={ArticleFlex}/>
</Route>
<Route path="/float">
    <svelte:component this={ArticleFloat}/>
</Route>
<Route path="/grid">
    <svelte:component this={ArticleGrid}/>
</Route>
<Route path="/overflow">
    <svelte:component this={ArticleOverflow}/>
</Route>
<Route path="/position">
    <svelte:component this={ArticlePosition}/>
</Route>
<Route path="/pseudos">
    <svelte:component this={ArticlePseudos}/>
</Route>
<Route path="/shadow">
    <svelte:component this={ArticleShadow}/>
</Route>
<Route path="/sizing">
    <svelte:component this={ArticleSizing}/>
</Route>
<Route path="/spacing">
    <svelte:component this={ArticleSpacing}/>
</Route>
<Route path="/typography">
    <svelte:component this={ArticleTypography}/>
</Route>
<Route fallback>
    404
</Route>