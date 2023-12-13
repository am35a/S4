<script lang="ts">
    import Header from './header/Header.svelte'
    import Aside from './aside/Aside.svelte'
    import Main from './main/Main.svelte'

    let heightHeader: any = '4rem',
        withAside: any = '16rem'
</script>

<Main
    style="margin-left: {withAside}; margin-top: {heightHeader}"
/>
<Aside
    style="width: {withAside}; margin-top: {heightHeader}"
/>
<Header
    style="--h: {heightHeader}"
/>
