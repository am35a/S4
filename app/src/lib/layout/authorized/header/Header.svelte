<script lang="ts">
    import { router, path } from 'svelte-micro'
    import { user } from 'src/store/store'

    import Button from 'component/Button.svelte'
    import Icon from 'component/Icon.svelte'

    function themeChange() {
        switch ($user.settings.theme) {
            case 'light':
                $user.settings.theme = 'dark'
                break;
            case 'dark':
                $user.settings.theme = 'light'
                break;
            // default:
            //     console.log(`Sorry, we are out of ${expr}.`);
        }
    }
</script>

<header
    {...$$restProps}
>
    <div class="display--flex gap--xs height--100">
        <div class="display--flex align-items--center flex-grow--1 padding--xxs background-color--positive border-radius--md box-shadow--xs border-style--solid border-color--negative-30">
            <div class="display--flex align-items--center flex-grow--1 gap--xs height--100">
                <!-- <Button
                    class="width--auto height--100 padding--none {$path === '/home' ? 'active' : ''}"
                    title="S4 - The lightweight Svelte UI library"
                    on:click={() => router.push('/home')}
                >
                    <img class="width--auto height--100" src="/images/logo.svg" alt="S4 logo" />
                </Button> -->
                <img
                    on:click={() => router.push('/home')}
                    class="width--auto height--100 btn padding--none"
                    src="/images/logo.svg"
                    alt="S4 - The lightweight Svelte UI Kit"
                    role={'button'}
                />
                <div class="display--inline-flex gap--xxs align-items--center">
                    {#each $path.slice(1).split('/') as segment}
                        {#if $path !== '/home'}
                            <Button
                                on:click={() => router.push(`/${segment}`)}
                                class="font-size--xs font-weight--600 text-transform--capitalize tw-nowrap"
                                disabled={segment === $path.split('/').at(-1)}
                            >{segment}</Button>
                        {/if}
                    {/each}
                </div>
            </div>
            <!-- <div class="padding-x--xs"> -->
                <!-- {getPathSegments($path).includes('/components') ? 'true' : 'false'} -->
                <!-- {getPathSegments($path).at(-1)} -->
                <!-- {$appSegment.split('/').length} -->
            <!-- </div> -->
        </div>
        <div class="display--flex gap--xs padding-x--xs background-color--positive border-radius--md box-shadow--xs border-style--solid border-color--negative-30">
            <Button
                class="btn-ico margin-y--auto"
                on:click={() => themeChange()}
            >
                {#if $user.settings.theme === 'light'}
                    <Icon name="moon"/>
                {:else}
                    <Icon name="sun"/>
                {/if}
            </Button>
            <Button
                class="btn-ico margin-y--auto"
                on:click={() => window.open('https://github.com/am35a/S4', '_blank')}
            >
                <Icon name="github"/>
            </Button>
        </div>
    </div>
</header>

<style lang="sass">
    header
        grid-column: 1/-1
        grid-row: 1/-1
</style>