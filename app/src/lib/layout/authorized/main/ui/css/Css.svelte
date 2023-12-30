<script lang="ts">
    import Icon from 'component/Icon.svelte'
    import Button from 'component/Button.svelte'
    import DropDown from 'component/DropDown.svelte'

    import SectionColors from './colors/Colors.svelte'
    import SectionTypography from './typography/Typography.svelte'
    import SectionIcons from './icons/Icons.svelte'
    import SectionGrid from './grid/Grid.svelte'
    import SectionShadows from './shadows/Shadows.svelte'
    import SectionAlerts from './alerts/Alerts.svelte'
    import SectionButtons from './buttons/Buttons.svelte'
    import SectionRadius from './radius/Radius.svelte'
    import SectionDetails from './details/Details.svelte'

    let cssOverviewObj = {
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
</script>

<article class="d-grid g-6">
    <h2 id="css">CSS supported UI</h2>
    <div class="d-grid g-2">
        <div>
            <DropDown class="drpdwn-hover">
                <Button 
                    slot="btn"
                    class="btn-alt"
                    data-position="right bottom"
                ><Icon name="ghost"/>Svelte button</Button>
                <div
                    slot="content"
                    class="d-grid g-2 w p-2 bgc-positive br border border-negative-30"
                    style="--w: 16rem"
                >
                    <button class="btn jc-start px-1" type="reset">
                        <span class="ico ico-ghost" style="--ico-image: url(/icons/palette.svg);">&nbsp;</span>
                        <span class="truncate">Color palette</span>
                    </button>
                    <button class="btn jc-start px-1" type="reset">
                        <span class="ico ico-ghost" style="--ico-image: url(/icons/palette.svg);">&nbsp;</span>
                        <span class="truncate">Color palette</span>
                    </button>
                    <button class="btn jc-start px-1" type="reset">
                        <span class="ico ico-ghost" style="--ico-image: url(/icons/palette.svg);">&nbsp;</span>
                        <span class="truncate">Color palette</span>
                    </button>
                </div>
            </DropDown>
        </div>
        <div>

            <div class="drpdwn-hover">
                <button
                    class="btn btn-alt"
                    data-position="right bottom"
                >
                    html
                </button>
                <div
                    class="drp-content"
                >
                    <div
                        class="d-grid g-2 w p-2 bgc-positive br border border-negative-30"
                        style="--w: 16rem"
                    >
                        <button class="btn jc-start px-1" type="reset">
                            <span class="ico ico-ghost" style="--ico-image: url(/icons/palette.svg);">&nbsp;</span>
                            <span class="truncate">Color palette</span>
                        </button>
                        <button class="btn jc-start px-1" type="reset">
                            <span class="ico ico-ghost" style="--ico-image: url(/icons/palette.svg);">&nbsp;</span>
                            <span class="truncate">Color palette</span>
                        </button>
                        <button class="btn jc-start px-1" type="reset">
                            <span class="ico ico-ghost" style="--ico-image: url(/icons/palette.svg);">&nbsp;</span>
                            <span class="truncate">Color palette</span>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <SectionColors />
    <SectionTypography />
    <SectionIcons />
    <SectionGrid />
    <SectionShadows />
    <SectionAlerts />
    <SectionButtons />
    <SectionDetails />
    <SectionRadius />
    <div class="p-sticky b-0 d-flex g-2 bgc-positive p-2 br w-fit ms-auto bs-sm">
        <div class="d-flex fw-wrap g-1 w-fit ms-auto">
            {#each Object.entries(cssOverviewObj) as [key, value]}
                <Button
                    class="btn-xs btn-primary"
                    on:click={() => window.open(`#${key}`, '_self')}
                >{value}</Button>
            {/each}
        </div>
        <Button
            class="btn btn-ico btn-alt-primary btn-xs bs-none my-auto"
            on:click={() => window.open('#css', '_self')}
        ><Icon name="arrow-top-big" /></Button>
    </div>
</article>