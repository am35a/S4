<script lang="ts">
    import { Route, path, query, hash } from 'svelte-micro'

    import Signin from './signin/Signin.svelte'
    import Signup from './signup/Signup.svelte'
    import Forgotpass from './forgotpass/Forgotpass.svelte'
</script>

<main
    {...$$restProps}
>
    <!-- <div>
        <img
            class=" btn padding--none"
            src="/images/logo.svg"
            alt="S4 - The lightweight Svelte UI Kit"
        />

    </div> -->

    <Route>
        <Route path="/signin">
            <svelte:component this={Signin}/>
        </Route>
        <Route path="/signup">
            <svelte:component this={Signup}/>
        </Route>
        <Route path="/forgotpass">
            <svelte:component this={Forgotpass}/>
        </Route>
        <Route fallback>
            404
        </Route>
    </Route>
</main>

<style lang="sass">
    main
        position: relative
        grid-column: 1/-1
        grid-row: 1/-1
</style>