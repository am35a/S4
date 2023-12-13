<script lang="ts">
    import {
        user
    } from 'src/store/store'

    import Authorized from './authorized/Authorized.svelte'
    import Unauthorized from './unauthorized/Unauthorized.svelte'
</script>

{#if !$user.isAuthorized}
    <Unauthorized />
{:else}
    <Authorized />
{/if}
