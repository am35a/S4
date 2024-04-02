<script>
    import { Route, getPathSegments, path, query, hash, Link } from 'svelte-micro'

    import ArticleAlignment, {anchorsObj as alignmentObj} from './alignment/Alignment.svelte'
    import ArticleBackground, {anchorsObj as backgroundObj} from './background/Background.svelte'
    import ArticleBorder, {anchorsObj as borderObj} from './border/Border.svelte'
    import ArticleDisplay, {anchorsObj as displayObj} from './display/Display.svelte'
    import ArticleFlex, {anchorsObj as flexObj} from './flex/Flex.svelte'
    import ArticleFloat from './float/Float.svelte'
    import ArticleGrid from './grid/Grid.svelte'
    import ArticleOverflow from './overflow/Overflow.svelte'
    import ArticlePosition from './position/Position.svelte'
    import ArticlePseudos from './pseudos/Pseudos.svelte'
    import ArticleShadow, {anchorsObj as shadowObj} from './shadow/Shadow.svelte'
    import ArticleSizing from './sizing/Sizing.svelte'
    import ArticleSpacing from './spacing/Spacing.svelte'
    import ArticleTypography from './typography/Typography.svelte'

    // export let jumpTo = ''

    let anchorsObj = {
            alignmentObj: {modulePath: '/alignment', ...alignmentObj},
            backgroundObj: {modulePath: '/background', ...backgroundObj},
            borderObj: {modulePath: '/border', ...borderObj},
            displayObj: {modulePath: '/display', ...displayObj},
            flexObj: {modulePath: '/flex', ...flexObj},
            shadowObj: {modulePath: '/shadow', ...shadowObj},
        }
</script>

<h1>Utilities</h1>
<!-- {#if getPathSegments($path).length === 1 && getPathSegments($path)[0] === jumpTo} -->
    <Route path="/">
        <h2>Index</h2>
        <div class="display--grid gap--sm">
            {#each Object.entries(anchorsObj) as [_, moduleObj], index}
                <div class="display--grid gap--xs padding-x--xs">
                    <div class="font-size--lg">
                        <span>{index + 1}</span>
                        <Link
                            href="{$path}{moduleObj.modulePath}"
                        >{Object.values(moduleObj.headAnchorObg)}</Link>
                    </div>
                    <div class="display--grid gap--xs padding-x--xs">
                        {#each Object.entries(moduleObj.subAnchorsObj) as [anchor, name], subIndex}
                            <div>
                                <span>{index + 1}.{subIndex + 1}</span>
                                <Link
                                    href="{$path}{moduleObj.modulePath}#{anchor}"
                                >{name}</Link>
                            </div>
                        {/each}
                    </div>
                </div>
            {/each}
        </div>
    </Route>
<!-- {/if} -->

<Route path={anchorsObj.alignmentObj.modulePath}>
    <svelte:component this={ArticleAlignment}/>
</Route>
<Route path={anchorsObj.backgroundObj.modulePath}>
    <svelte:component this={ArticleBackground}/>
</Route>
<Route path={anchorsObj.borderObj.modulePath}>
    <svelte:component this={ArticleBorder}/>
</Route>
<Route path={anchorsObj.displayObj.modulePath}>
    <svelte:component this={ArticleDisplay}/>
</Route>
<Route path={anchorsObj.flexObj.modulePath}>
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
<Route path={anchorsObj.shadowObj.modulePath}>
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