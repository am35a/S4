<script lang="ts">
    import { Route, path, query, hash } from 'svelte-micro'

    import { asideItems } from 'src/store/store'

    $: for (const item of $asideItems) {
        console.log( `${item.segment[1].toUpperCase()}${item.segment.slice(2)}` )
    }

    // const array1 = ['a', 'b', 'c'];
    // for (const element of array1) {
    //     console.log(element);
    // }


    import Home from './home/Home.svelte'
    import Core from './core/Core.svelte'
    import Components from './components/Components.svelte'
        import Buttons from './components/buttons/Buttons.svelte'
        import Icons from './components/icons/Icons.svelte'
    import Utilities from './utilities/Utilities.svelte'
        // import Alignment from './utilities/alignment/Alignment.svelte'
        // ...
        // import Typography from './utilities/typography/Typography.svelte'
    import Layout from './layout/Layout.svelte'
    import Help from './help/Help.svelte'

    
    // let Help
    // import('./help/Help.svelte').then(res => Help = res.default)

    // import Button from 'src/components/Button.svelte'
    import Icon from 'src/components/Icon.svelte'

    $: console.log($asideItems[2])

</script>


<!-- !!! https://svelte.dev/repl/5d0bb97b35f84cd59373277f0638a75d?version=3.23.1 -->

<!-- https://svelte.dev/repl/ec6f6b61329f4f43ae049464d73d8158?version=3.23.1 -->

<!-- https://www.akashmittal.com/dynamically-import-components-svelte/ -->
<!-- https://svelte.dev/tutorial/svelte-component -->

<div class="body">
    
    <!-- <Icon name={$userData.aside.items[3].turbo.icon} size="lg"/> -->
<!-- 
    <div><span>{$path}</span></div>
    <hr> -->

    <!-- <Button on:click={() => console.log($userData.aside.items[1])}>111111</Button> -->
    <!-- <Button on:click={() => $userData.data.name = 'Tester'}>111111</Button> -->

    <Route>
        <Route path={"/home"}>
            <svelte:component this={Home}/>
        </Route>
        <Route path="/core">
            <svelte:component this={Core}/>
        </Route>
        <Route path="/components">
            <svelte:component this={Components}/>
            <Route path="/buttons">
                <svelte:component this={Buttons}/>
            </Route>
            <Route path="/icons">
                <svelte:component this={Icons}/>
            </Route>
        </Route>
        <Route path="/utilities">
            <svelte:component this={Utilities}/>
        </Route>
        <Route path="/layout">
            <svelte:component this={Layout}/>
        </Route>
        <Route path="/help">
            <svelte:component this={Help}/>
        </Route>
        <Route fallback>
            404
        </Route>
    </Route>

    <!-- {#if $path === '/home'}
        <svelte:component this={Home}/>
    {:else if $path === '/help'}
        <svelte:component this={Help}/>
    {:else}
        404
    {/if} -->

<!--
    <div class="d-i-grid g-2 p-4">
        <Button class="btn btn-secondary">
            <Icon name="ghost" size="sm"/>
            Button
        </Button>
        <Button class="btn btn-secondary active">
            <Icon name="ghost" size="sm"/>
            Button
        </Button>
        <Button class="btn btn-secondary" disabled>
            <Icon name="ghost" size="sm"/>
            Button
        </Button>        
        <Button class="btn btn-secondary active" disabled>
            <Icon name="ghost" size="sm"/>
            Button
        </Button>
    </div>
    <div class="d-i-grid g-2 p-4">
        <Button class="btn btn-link-primary">
            <Icon class="text-warning ico-sm" name="ghost"/>
            Button
        </Button>
        <Button class="btn btn-link-primary active">
            <Icon name="ghost" size="sm"/>
            Button
        </Button>
        <Button class="btn btn-link-primary" disabled>
            <Icon name="ghost" size="sm"/>
            Button
        </Button>
        <Button class="btn btn-link-primary active" disabled>
            <Icon name="ghost" size="sm"/>
            Button
        </Button>
    </div>

    <hr>

    <div class="h1" aria-level={1} role="heading">Colors</div>
    <div class="p-4">
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--positive-color);"></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--positive-color-90);"></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--positive-color-80);"></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--positive-color-70);"></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--positive-color-60);"></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--positive-color-50);"></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--positive-color-40);"></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--positive-color-30);"></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--positive-color-20);"></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--positive-color-10);"></div>
        <div></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--negative-color);"></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--negative-color-90);"></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--negative-color-80);"></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--negative-color-70);"></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--negative-color-60);"></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--negative-color-50);"></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--negative-color-40);"></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--negative-color-30);"></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--negative-color-20);"></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--negative-color-10);"></div>
        <div></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--primary-color-l);"></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--primary-color);"></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--primary-color-d);"></div>
        <div></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--secondary-color-l);"></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--secondary-color);"></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--secondary-color-d);"></div>
        <div></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--info-color-l);"></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--info-color);"></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--info-color-d);"></div>
        <div></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--success-color-l);"></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--success-color);"></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--success-color-d);"></div>
        <div></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--warning-color-l);"></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--warning-color);"></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--warning-color-d);"></div>
        <div></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--error-color-l);"></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--error-color);"></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--error-color-d);"></div>
    </div>
-->
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