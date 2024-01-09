<script lang="ts">
    import { router } from 'svelte-micro'
    import { user } from 'src/store/store'

    import Input from 'component/Input.svelte'
    import Button from "component/Button.svelte"
    import Icon from "component/Icon.svelte"

    let signinEmail: string = 'guest@mobitoon.ru',
        signinPassword: string = '123456'
    
    function signIn() {
        if (signinEmail === $user.email && signinPassword === $user.password) {
            $user.isAuthorized = true
            router.push('/home')
        }
    }

</script>

<section
    class="d-grid g-2 p-2 bgc-positive br bs-xs border border-negative-30 m-auto w"
    style="--w: 18em"
>
    <div class="d-grid g-1">
        <label
            class="px-1"
            for="bindLoginEmailOrName"
        >
            Email
            <span class="c-error">*</span>
        </label>
        <Input
            id="bindLoginEmailOrName"
            class=""
            bind:value={signinEmail}
            placeholder={'email@domain.com'}
            type={'text'}
        />
    </div>
    <div class="d-grid g-1">
        <label
            class="px-1"
            for="bindLoginPassword"
        >
            Password
            <span class="c-error">*</span>
        </label>
        <Input
            class=""
            bind:value={signinPassword}
            type={'password'}
        />
    </div>
    <div class="d-grid g-2 cols-2">
        <Button
            class="fs-sm"
            on:click={() => router.push('/forgotpass')}
        >
            Forgotten pass?
            <!-- <Icon name="refresh" /> -->
        </Button>
        <Button
            class="fs-sm"
            on:click={() => router.push('/signup')}
        >
            Sign Up
            <!-- <Icon name="user-plus" /> -->
        </Button>
    </div>
    <Button
        class="btn-alt"
        on:click={signIn}
    >
        Sign In
        <Icon name="sign-in" />
    </Button>

</section>

<style lang="sass">
    section
        position: relative
        grid-column: 1/-1
        grid-row: 1/-1
</style>