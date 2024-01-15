<script lang="ts">
    import { router } from 'svelte-micro'
    import { user } from 'src/store/store'

    import Input from 'component/Input.svelte'
    import Button from "component/Button.svelte"
    import Icon from "component/Icon.svelte"

    let signinEmail: string = 'guest@mobitoon.ru',
        signinPassword: string = '123456'
    
    function refresh() {
        console.log('Forgotten pass?')
    }

</script>

<section
    class="d-grid g-2 p-2 bgc-positive br bs-xs border border-negative-30 m-auto w"
    style="--w: 18em"
>
    <div class="d-grid g-1">
        Forgot pass
    </div>
    <div class="d-grid g-2 gtc-2">
        <Button
            class="fs-sm"
            on:click={() => router.push('/signup')}
        >
            Sign Up
        </Button>
        <Button
            class="fs-sm"
            on:click={() => router.push('/signin')}
        >
            Sign In
        </Button>
    </div>
    <Button
        class="btn-alt"
        on:click={refresh}
    >
        Forgotten pass?
        <Icon name="refresh" />
    </Button>

</section>

<style lang="sass">
    // section
    //     position: relative
    //     grid-column: 1/-1
    //     grid-row: 1/-1
</style>