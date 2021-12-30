<script lang="ts">
    import { Route, path, query, hash } from 'svelte-micro'

    import { userData } from 'src/store/store'



    import Home from './home/Home.svelte'
    import Core from './core/Core.svelte'
    import Utilities from './utilities/Utilities.svelte'
    import Help from './help/Help.svelte'

    async () => {
        const { default: Help } = await import('./help/Help.svelte')
    }

    
    import Button from 'src/components/Button.svelte'
    import Icon from 'src/components/Icon.svelte'
</script>

<div class="body">

    <div><span>{$path}</span></div>
    <hr>

    
    <Route>
        <Route path="/home">
            <svelte:component this={Home}/>
        </Route>
        <Route path="/core">
            <svelte:component this={Core}/>
        </Route>
        <Route fallback>
            404
        </Route>
    </Route>

    
</div>

<style lang="sass">
    .body
        grid-column: 2/3
        grid-row: 2/3
        position: relative
        padding: calc(var(--key-size) * .5)
        overflow: auto
        z-index: 1
</style>