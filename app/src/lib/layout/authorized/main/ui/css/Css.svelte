<script lang="ts">
    import Icon from 'component/Icon.svelte'
    import Button from 'component/Button.svelte'

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
</script>

<article class="d-grid g-6">
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
    <div class="p-sticky b-0 d-flex g-2 background-color--positive p-2 border-radius--md w-fit ms-auto bs-sm">
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