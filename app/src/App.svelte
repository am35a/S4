<script lang="ts">
    // import { Route } from 'svelte-micro'

    import { onMount } from 'svelte'
    import { appData, user, userData } from 'src/store/store'

    import Head from './lib/DocumentHead.svelte'
    import Body from './lib/DocumentBody.svelte'

    import LayoutSignIn from './lib/layout/signin/SignIn.svelte'
    import LayoutLaborer from './lib/layout/laborer/Laborer.svelte'

    async function getData(path:string): Promise<any> {
        let res = await fetch(path)
        return res.ok ? {
            data: await res.json(),
            status: true
        } : {
            data : `Error: ${res.status}`,
            status: false
        }
    }

    let promise = getData('/_api/app.json')
    console.log(promise)

    // promise.then((value) => {
    //     console.log(value.data)
    // })

	// onMount(async () => {
    //     let res = await fetch('/_api/app.json')
    //     if (res.ok) {
    //         $appData = await res.json()
    //         // console.log($appData)
    //     } else {
    //         console.log(`Error: ${res.status}`)
    //     }

    //     res = await fetch('/_api/admin.json')
        
    //     if (res.ok) {
    //         $userData = await res.json()
    //         // console.log($appData)
    //     } else {
    //         console.log(`Error: ${res.status}`)
    //     }

    //     console.log(getData('/_api/app.json'))
	// })
</script>

<Head />
<Body />


{#await promise}
	<p>Loading data...</p>
{:then value}
    {#if value.status}
    	<p>fulfilled - {JSON.stringify(value.data)}</p>
    {:else}
        <p>rejected - {JSON.stringify(value.data)}</p>
    {/if}
{:catch error}
	<p>rejected - {error.message}</p>
{/await}

<!-- {#if !$user.isAuthorized}
    <LayoutSignIn />
{:else}
    <LayoutLaborer />
{/if} -->
  
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
  