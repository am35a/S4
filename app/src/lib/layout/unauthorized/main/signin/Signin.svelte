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

<!-- https://dribbble.com/shots/16029811/attachments/7872308?mode=media -->

<section
    class="display--grid gap--md padding--md background-color--positive border-radius--md box-shadow--xs border-style--solid border-color--negative-30 margin--auto width"
    style="--width: 18em"
>
    <div class="display--grid">
        <h1 class="font-size--xxl">Sign In</h1>
        <small class="color--negative-50">
            to manage your account
        </small>
    </div>
    <div class="display--grid gap--xs">
        <div class="display--grid gap--xxs">
            <label
                class="font-size--sm font-weight--600 padding-x--xxs"
                for="bindLoginEmailOrName"
            >
                Email
                <span class="color--error">*</span>
            </label>
            <Input
                id="bindLoginEmailOrName"
                bind:value={signinEmail}
                placeholder={'email@domain.com'}
                type={'email'}
            />
        </div>
        <div class="display--grid gap--xxs">
            <label
                class="font-size--sm font-weight--600 padding-x--xxs"
                for="bindLoginPassword"
            >
                Password
                <span class="color--error">*</span>
            </label>
            <Input
                id="bindLoginPassword"
                bind:value={signinPassword}
                type={'password'}
            />
        </div>
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="display--inline-grid gap--xxs grid-auto-flow--column justify-content--start align-items--center line-height--1">
            <Input type={'checkbox'}/> Remember me
        </label>
    </div>
    <div class="display--grid gap--xs">
        <div class="display--grid gap--xs grid-template-columns--2">
            <Button
                class="font-size--sm"
                on:click={() => router.push('/forgotpass')}
            >
                Forgotten pass?
                <!-- <Icon name="refresh" /> -->
            </Button>
            <Button
                class="font-size--sm"
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
    </div>

</section>

<style lang="sass">
    // section
    //     position: relative
    //     grid-column: 1/-1
    //     grid-row: 1/-1
</style>