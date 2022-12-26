<script lang="ts">
    import { path, router } from 'svelte-micro'
    import { onMount } from 'svelte'
    import {
        appData,
        asideExpand,
        asideItems,
        user
    } from 'src/store/store'

    import Window from './lib/DocumentWindow.svelte'
    import Head from './lib/DocumentHead.svelte'
    import Body from './lib/DocumentBody.svelte'

    import LayoutSignIn from './lib/layout/signin/SignIn.svelte'
    import LayoutLaborer from './lib/layout/laborer/Laborer.svelte'

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

/*

Логин диктует настройки

настройки приложения глобальные {
    // настройки может менять администратор
    заголовок
    логотип {
        адрес
    }
    initialScale
    название темы
    название шрифта (пока из дефолтных)
}
данные пользователя {
    имя,
    фамилия,
    отчество,
    почтовый адрес,
}

настройки меню приложения {
    ширина меню
    сегмент (он же стартовый сегмент)

}

*/
	onMount(async () => {
        let res = await fetch('/_api/app.json')
        if (res.ok) {
            $appData = await res.json()
            // console.log($appData)
        } else {
            console.log(`Error: ${res.status}`)
        }

        res = await fetch('/_api/admin.json')
        
        let userData: any

        if (res.ok) {
            userData = await res.json()
            // console.log($appData)
        } else {
            console.log(`Error: ${res.status}`)
        }

        $asideExpand = userData.aside.expand
        $asideItems = userData.aside.items
        
        // console.log(getData('/_api/app.json'))

        router.replace($path === '/' && $user.isAuthorized ? '/home' : '/login')
	})
</script>

<Window />
<Head />
<Body />


<!-- {#await promise}
	<p>Loading data...</p>
{:then value}
    {#if value.status}
    	<p>fulfilled - {JSON.stringify(value.data)}</p>
    {:else}
        <p>rejected - {JSON.stringify(value.data)}</p>
    {/if}
{:catch error}
	<p>rejected - {error.message}</p>
{/await} -->

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
  