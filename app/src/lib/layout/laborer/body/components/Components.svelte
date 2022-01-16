<script lang="ts">
    import { Route, path, query, hash } from 'svelte-micro'

    import Buttons from './buttons/Buttons.svelte'
    import Icons from './icons/Icons.svelte'
</script>

<div class="h1" aria-level={1} role="heading">Components</div>

<Route path="/buttons">
    <svelte:component this={Buttons}/>
</Route>
<Route path="/icons">
    <svelte:component this={Icons}/>
</Route>
<Route fallback>
    404
</Route>