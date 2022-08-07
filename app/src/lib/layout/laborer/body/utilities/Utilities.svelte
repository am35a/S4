<script lang="ts">
    import { Route, path, query, hash } from 'svelte-micro'

    import ArticleAlignment from './alignment/Alignment.svelte'
    import ArticleColors from './colors/Colors.svelte'
    import ArticleBackground from './background/Background.svelte'
    import ArticleBorder from './border/Border.svelte'
    import ArticleDisplay from './display/Display.svelte'
    import ArticleFlex from './flex/Flex.svelte'
    import ArticleGrid from './grid/Grid.svelte'
    import ArticleOverflow from './overflow/Overflow.svelte'
    import ArticlePosition from './position/Position.svelte'
    import ArticlePseudos from './pseudos/Pseudos.svelte'
    import ArticleShadow from './shadow/Shadow.svelte'
    import ArticleSizing from './sizing/Sizing.svelte'
    import ArticleSpacing from './spacing/Spacing.svelte'
    import ArticleTypography from './typography/Typography.svelte'

</script>

<h1>Utilities</h1>

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