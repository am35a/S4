<script>
    import { Route, getPathSegments, path, query, hash, Link } from 'svelte-micro'

    import ArticleAlignment, {anchorsObj as alignmentObj} from './alignment/Alignment.svelte'
    import ArticleBackground from './background/Background.svelte'
    import ArticleBorder from './border/Border.svelte'
    import ArticleDisplay from './display/Display.svelte'
    import ArticleColors from './colors/Colors.svelte'
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

    // export let jumpTo = ''

    let anchorsObj = {
            alignmentObj: {modulePath: '/alignment', ...alignmentObj}
        }
</script>

<h1>Utilities</h1>
<!-- {#if getPathSegments($path).length === 1 && getPathSegments($path)[0] === jumpTo} -->
    <Route path="/">
        <h2>Index</h2>
        <div>
            <h3>{Object.values(anchorsObj.alignmentObj.headAnchorObg)}</h3>
            <div class="d-grid g-2 px-2">
                {#each Object.entries(anchorsObj.alignmentObj.subAnchorsObj) as [anchor, name]}
                    <Link
                        href="/utilities{anchorsObj.alignmentObj.modulePath}#{anchor}"
                    >{name}</Link>
                {/each}
            </div>
        </div>
    </Route>
<!-- {/if} -->

<Route path={anchorsObj.alignmentObj.modulePath}>
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