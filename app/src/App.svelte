<script lang="ts">
    import { path, router } from 'svelte-micro'
    import { onMount } from 'svelte'
    import {
        appData,
        asideExpand,
        asideItems,
        user
    } from 'src/store/store'

    import DocWindow from './lib/DocumentWindow.svelte'
    import DocHead from './lib/DocumentHead.svelte'
    import DocBody from './lib/DocumentBody.svelte'

    import Layout from './lib/layout/Layout.svelte'

    import Console from './lib/layout/console/Console.svelte'

    // import Body from './lib/DocumentBody.svelte'

    // import LayoutSignIn from './lib/layout/signin/SignIn.svelte'
    // import LayoutLaborer from './lib/layout/laborer/Laborer.svelte'

    // async function getData(path:string): Promise<any> {
    //     let res = await fetch(path)
    //     return res.ok ? {
    //         data: await res.json(),
    //         status: true
    //     } : {
    //         data : `Error: ${res.status}`,
    //         status: false
    //     }
    // }

    // let promise = getData('/_api/app.js-on')
    // console.log(promise)

    // promise.then((value) => {
    //     console.log(value.data)
    // })

	onMount(async () => {
        let res = await fetch('/_api/app.json')
        if (res.ok) {
            $appData = await res.json()
            // console.log($appData)
        } else {
            console.log(`App data error: ${res.status}`)
        }

        res = await fetch('/_api/admin.json')
        
        let userData: any

        if (res.ok) {
            userData = await res.json()
            // console.log($appData)
        } else {
            console.log(`User data error: ${res.status}`)
        }

        $asideExpand = userData.aside.expand
        $asideItems = userData.aside.items
        
        // console.log(getData('/_api/app.json'))

        router.replace($path === '/' && $user.isAuthorized ? '/home' : '/signin')
        // router.replace($path === '/' ? '/home' : '')
	})
</script>

<DocWindow />
<DocHead />
<DocBody />

<Console />
<Layout />

<!-- {#if !$user.isAuthorized}
    <LayoutSignIn />
{:else}
    <LayoutLaborer />
{/if} -->