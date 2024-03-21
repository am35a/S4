<script lang="ts">
    import { router } from 'svelte-micro'
    import { user } from 'src/store/store'

    import Input from 'component/Input.svelte'
    import Button from "component/Button.svelte"
    import Icon from "component/Icon.svelte"

    let signinEmail: string = 'guest@mobitoon.ru',
        signinPassword: string = '123456'
    
    function signUp() {
        console.log('Sign Up')
    }

</script>

<section
    class="display--grid g-2 p-2 background-color--positive border-radius--md box-shadow--xs border-style--solid border-color--negative-30 m-auto w"
    style="--w: 18em"
>
    <div class="display--grid g-1">
        Sign up
    </div>
    <div class="display--grid g-2 grid-template-columns--2">
        <Button
            class="fs-sm"
            on:click={() => router.push('/signin')}
        >
            Sign In
        </Button>
        <Button
            class="fs-sm"
            on:click={() => router.push('/forgotpass')}
        >
            Forgotten pass?
            <!-- <Icon name="refresh" /> -->
        </Button>
    </div>
    <Button
        class="btn-alt"
        on:click={signUp}
    >
        Sign Up
        <Icon name="user-plus" />
    </Button>

</section>

<style lang="sass">
    // section
    //     position: relative
    //     grid-column: 1/-1
    //     grid-row: 1/-1
</style>