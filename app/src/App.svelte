<script lang="ts">
    import { onMount } from 'svelte'
    import { user } from './store/store'

    import Head from './lib/DocumentHead.svelte'
    import Body from './lib/DocumentBody.svelte'

    import LayoutSignIn from './lib/layout/signin/Index.svelte'
    import LayoutLaborer from './lib/layout/laborer/Laborer.svelte'
    
    let appData: any

	onMount(async () => {
        // https://learn.javascript.ru/fetch

           const res = await fetch('https://mockend.com/am35a/mockend/posts')
           appData = await res.json()
           console.log(appData)

        // if ($user.settings.autoSignIn) {
        //     console.log(`autoSignIn = ${$user.settings.autoSignIn}`)
        //     route.goto('list')
        // }
	})    
</script>

<Head />
<Body />

{#if !$user.isAuthorized}
    <LayoutSignIn />
{:else}
    <LayoutLaborer />
{/if}
