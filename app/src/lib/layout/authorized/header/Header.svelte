<script lang="ts">
    import { appSegment } from 'src/store/store'

    import Button from 'component/Button.svelte'
    import Icon from 'component/Icon.svelte'
</script>

<header
    {...$$restProps}
    class="d-flex g-2 p-2 mb-auto h"
>
    <div
        class="d-flex ai-center f p-1 bgc-positive br s-xs"
        style="--fg: 1"
    >
        <div
            class="d-flex ai-center f g-2 h-100"
            style="--fg: 1"
        >
            <img class="w-auto h-100" src="/images/logo.svg" alt="S4 - The lightweight Svelte UI Kit">
            <div class="fs-lg fw-600">
                S4 UI library
            </div>
        </div>
        <div class="px-2">
            {$appSegment}
        </div>
    </div>
    <div class="d-flex g-1 px-2 bgc-positive br s-xs">
        <Button
            class="btn-ico my-auto"
        >
            <Icon name="x"/>
        </Button>
        <Button
            class="btn-ico my-auto"
            on:click={() => window.open('https://github.com/am35a/S4', '_blank')}
        >
            <Icon name="github"/>
        </Button>
    </div>
</header>

<style lang="sass">
    header
        grid-column: 1/-1
        grid-row: 1/-1
</style>