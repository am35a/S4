<script lang="ts">
    import { router } from 'svelte-micro'
    import { user, appSegment } from 'src/store/store'

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
    <div class="d-flex g-2 h-100">
        <div
            class="d-flex ai-center f p-1 bgc-positive br bs-xs border border-negative-30"
            style="--fg: 1"
        >
            <div
                class="d-flex ai-center f g-2 h-100"
                style="--fg: 1"
            >
                <img
                    on:click={() => router.push($appSegment = '/home')}
                    class="w-auto h-100"
                    src="/images/logo.svg"
                    alt="S4 - The lightweight Svelte UI Kit"
                    role={'button'}
                />
                <div>
                    <Button
                        class="btn-outline fs-xs fw-500"
                    >
                        home
                    </Button>
                    <Button
                        class="btn-outline fs-xs fw-500"
                    >
                        utilities
                    </Button>                    
                </div>
            </div>
            <div class="px-2">
                {$appSegment}
            </div>
        </div>
        <div class="d-flex g-2 px-2 bgc-positive br bs-xs border border-negative-30">
            <Button
                class="btn-ico my-auto"
                on:click={() => themeChange()}
            >
                {#if $user.settings.theme === 'light'}
                    <Icon name="moon"/>
                {:else}
                    <Icon name="sun"/>
                {/if}
            </Button>
            <Button
                class="btn-ico my-auto"
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