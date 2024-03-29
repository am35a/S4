<script lang="ts">
    import Icon from 'component/Icon.svelte'

    import SectionColors from './colors/Colors.svelte'
    import SectionTypography from './typography/Typography.svelte'
    import SectionIcons from './icons/Icons.svelte'
    import SectionGrid from './grid/Grid.svelte'
    import SectionShadows from './shadows/Shadows.svelte'
    import SectionAlerts from './alerts/Alerts.svelte'
    import SectionButtons from './buttons/Buttons.svelte'
    import SectionRadius from './radius/Radius.svelte'
    import SectionDetails from './details/Details.svelte'

    let cssOverviewObj={
        colors: 'Colors',
        typography: 'Typography',
        icons: 'Icons',
        grid: 'Grid',
        shadows: 'Shadows',
        alerts: 'Alerts',
        buttons: 'Buttons',
        details: 'Details',
        radius: 'Radius'
    }

    let gravity = 1,
        scale = 1
</script>

<article class="">
    <div
        class="display--grid gap--xl"
        style="font-size: {gravity}em; transform: scale({scale}); transition: all 150ms ease 0s;"
    >
        <h2 id="css">CSS supported UI</h2>
        <SectionColors />
        <SectionTypography />
        <SectionIcons />
        <SectionGrid />
        <SectionShadows />
        <SectionAlerts />
        <SectionButtons />
        <SectionDetails />
        <SectionRadius />
    </div>

    <div class="position--sticky bottom--0 display--grid gap--sm padding--xs">
        <div
            class="
                display--flex
                margin-left--auto
                padding--xs
                width--fit
                background-color--positive
                border-radius--lg
                box-shadow--sm
                border-style--solid
                border-color--negative-30
                fs-xs"
        >
            <div class="display--flex flex-wrap--wrap gap--xs width--fit margin-left--auto">
                <div class="fs-lg margin-y--auto">
                    Scale:
                </div>
                <button
                    class="btn btn-ico"
                    on:click={() => scale-=0.01}
                    disabled={scale <= 0.5}
                ><span class="ico" style="--ico-image: url(/icons/minus.svg);"></span></button>
                <button
                    class="btn btn-ico"
                    on:click={() => scale = 1}
                    disabled={scale == 1}
                ><span class="ico" style="--ico-image: url(/icons/refresh.svg);"></span></button>
                <button
                    class="btn btn-ico"
                    on:click={() => scale+=.01}
                    disabled={scale >= 1.5}
                ><span class="ico" style="--ico-image: url(/icons/plus.svg);"></span></button>
            </div>
        </div>
        <div
            class="
                display--flex
                margin-left--auto
                padding--xs
                width--fit
                background-color--positive
                border-radius--lg
                box-shadow--sm
                border-style--solid
                border-color--negative-30
                fs-xs"
        >
            <div class="display--flex flex-wrap--wrap gap--xs width--fit margin-left--auto">
                <div class="fs-lg margin-y--auto">
                    Gravity:
                </div>
                <button
                    class="btn btn-ico"
                    on:click={() => gravity-=0.1}
                    disabled={gravity <= 0.1}
                ><span class="ico" style="--ico-image: url(/icons/minus.svg);"></span></button>
                <button
                    class="btn btn-ico"
                    on:click={() => gravity = 1}
                    disabled={gravity == 1}
                ><span class="ico" style="--ico-image: url(/icons/refresh.svg);"></span></button>
                <button
                    class="btn btn-ico"
                    on:click={() => gravity+=.1}
                    disabled={gravity >= 1.9}
                ><span class="ico" style="--ico-image: url(/icons/plus.svg);"></span></button>
            </div>
        </div>
        <div
            class="
                display--flex
                gap--xs
                margin-left--auto
                padding--xs
                width--fit
                background-color--positive
                border-radius--lg
                box-shadow--sm
                border-style--solid
                border-color--negative-30
                fs-xs"
        >
            <div class="display--flex flex-wrap--wrap gap--xxs width--fit margin-left--auto">
                {#each Object.entries(cssOverviewObj) as [key, value]}
                    <button
                        class="btn btn-primary"
                        on:click={() => window.open(`#${key}`, '_self')}
                    >{value}</button>
                {/each}
            </div>
            <button
                class="btn btn-ico"
                on:click={() => window.open('#', '_self')}
            ><span class="ico" style="--ico-image: url(/icons/arrow-top-big.svg);"></span></button>
        </div>
    </div>

</article>