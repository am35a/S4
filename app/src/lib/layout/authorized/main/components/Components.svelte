<script lang="ts">
    import { Route, path, query, hash } from 'svelte-micro'

    import ArticleAccordion from './accordion/Accordion.svelte'
    import ArticleAlerts from './alerts/Alerts.svelte'
    import ArticleButtons from './buttons/Buttons.svelte'
    import ArticleDropdown from './dropdown/Dropdown.svelte'
    import ArticleForms from './forms/Forms.svelte'
    import ArticleDetails from './details/Details.svelte'
    import ArticleIcons from './icons/Icons.svelte'
</script>

<h1>Components</h1>

<Route path="/accordion">
    <svelte:component this={ArticleAccordion}/>
</Route>
<Route path="/alerts">
    <svelte:component this={ArticleAlerts}/>
</Route>
<Route path="/buttons">
    <svelte:component this={ArticleButtons}/>
</Route>
<Route path="/dropdown">
    <svelte:component this={ArticleDropdown}/>
</Route>
<Route path="/details">
    <svelte:component this={ArticleDetails}/>
</Route>
<Route path="/icons">
    <svelte:component this={ArticleIcons}/>
</Route>
<Route path="/forms">
    <svelte:component this={ArticleForms}/>
</Route>
<Route fallback>
    404
</Route>
