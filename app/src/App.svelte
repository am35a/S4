<script lang="ts">
    import { path, query, hash } from 'svelte-micro'

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
    console.log($path, $query, $hash)
</script>

<Head />
<Body />

{#if !$user.isAuthorized}
    <LayoutSignIn />
{:else}
    <LayoutLaborer />
{/if}
