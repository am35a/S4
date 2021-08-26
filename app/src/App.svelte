<script lang="ts">
    import { user } from './store/store'

    import Head from './lib/head.svelte'
    import Body from './lib/body.svelte'

    import LayoutAuthorization from './lib/layout/Authorization.svelte'
    import LayoutMain from './lib/layout/main.svelte'
    
</script>

<Head />
<Body />

{#if !$user.isAuthorized}
    <LayoutAuthorization />
{:else}
    <LayoutMain />
{/if}
