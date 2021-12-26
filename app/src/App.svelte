<script lang="ts">
    // import { Route } from 'svelte-micro'

    import { onMount } from 'svelte'
    import { appData, user, userData } from 'src/store/store'

    import Head from './lib/DocumentHead.svelte'
    import Body from './lib/DocumentBody.svelte'

    import LayoutSignIn from './lib/layout/signin/SignIn.svelte'
    import LayoutLaborer from './lib/layout/laborer/Laborer.svelte'
    
	onMount(async () => {
        let res = await fetch('/_api/app.json')
        if (res.ok) {
            $appData = await res.json()
            // console.log($appData)
        } else {
            console.log(`Error: ${res.status}`)
        }

        res = await fetch('/_api/admin.json')
        
        if (res.ok) {
            $userData = await res.json()
            // console.log($appData)
        } else {
            console.log(`Error: ${res.status}`)
        }
	})
</script>

<Head />
<Body />

{#if !$user.isAuthorized}
    <LayoutSignIn />
{:else}
    <LayoutLaborer />
{/if}
  
<!-- <Route>
  
    <Route path="/">
      <h1>Home page</h1>
      <p>Feel at home!</p>
    </Route>
  
    <Route path="/portfolio">
      <h1>Portfolio</h1>
    </Route>
  
  
    <Route fallback>
      <h1>Route not found :(</h1>
      <a href="/">Back to home</a>
    </Route>
</Route> -->
  