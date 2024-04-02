<script lang="ts">
    import Button from "src/components/Button.svelte"

    let breakpointsNamesArr = [
        { class: '.' },
        { variable: '--' }
    ]
    let breakpointsName = breakpointsNamesArr[0]
</script>

<h1>Core</h1>
<div class="display--inline-block">
    <h2 id="devicesChecking">Devices checking</h2>
    <p>
        The <a href="https://github.com/matthewhudson/current-device">current-device (v0.10.2)</a>
        library is use to define devices and get other data from device, which install the
        breakpoints dependencies.
    </p>
    <div class="display--inline-grid grid-template-columns gap--xs" style="--grid-template-columns: auto 1fr">
        <div class="text-align--end font-weight--600">Device type:</div>
        <div>'mobile', 'tablet', 'desktop', or 'unknown'</div>
        <div class="text-align--end font-weight--600">Device orientation:</div>
        <div>'landscape', 'portrait', or 'unknown'</div>
        <div class="text-align--end font-weight--600">Device OS:</div>
        <div>
            'ios', 'iphone', 'ipad', 'ipod', 'android', 'blackberry', 'windows',
            'macos', 'fxos', 'meego', 'television', or 'unknown'
        </div>
    </div>
</div>
<div class="display--inline-block">
    <h2 id="breakpoints">Breakpoints</h2>
    <div>
        <h3>Device type</h3>
        <div class="display--grid grid-template-columns--3 gap--xs">
            <div class="font-weight--600">Breakpoint</div>
            <div class="font-weight--600">Class prefix</div>
            <div class="font-weight--600">
                Pattern
                <div class="display--inline-grid grid-template-columns gap--xxs font-size--xxs" style="--grid-template-columns: auto auto">
                    {#each breakpointsNamesArr as object }
                        <Button
                            on:click={() => breakpointsName = object}
                            class="btn-alt"
                            disabled={object === breakpointsName}
                        >{Object.values(object)}{Object.keys(object)}</Button>
                    {/each}
                </div>
            </div>
            <hr class="grid-column--full width--100 margin-y--none">
            <div>Landscape</div>            <div>l</div>    <div>{Object.values(breakpointsName)}l_<span class="c-secondary">{Object.keys(breakpointsName)}-name</span></div>
            <div>Portrait</div>             <div>p</div>    <div>{Object.values(breakpointsName)}p_<span class="c-secondary">{Object.keys(breakpointsName)}-name</span></div>
            <div class="grid-column--full"></div>
            <div>Desktop</div>              <div>d</div>    <div>{Object.values(breakpointsName)}d_<span class="c-secondary">{Object.keys(breakpointsName)}-name</span></div>
            <div>Tablet</div>               <div>t</div>    <div>{Object.values(breakpointsName)}t_<span class="c-secondary">{Object.keys(breakpointsName)}-name</span></div>
            <div>Mobile</div>               <div>m</div>    <div>{Object.values(breakpointsName)}m_<span class="c-secondary">{Object.keys(breakpointsName)}-name</span></div>
            <div class="grid-column--full"></div>
            <div>Landscape/Desktop</div>    <div>l/d</div>  <div>{Object.values(breakpointsName)}l_d_<span class="c-secondary">{Object.keys(breakpointsName)}-name</span></div>
            <div>Portrait/Desktop</div>     <div>p/d</div>  <div>{Object.values(breakpointsName)}p_d_<span class="c-secondary">{Object.keys(breakpointsName)}-name</span></div>
            <div>Landscape/Tablet</div>     <div>l/t</div>  <div>{Object.values(breakpointsName)}l_t_<span class="c-secondary">{Object.keys(breakpointsName)}-name</span></div>
            <div>Portrait/Tablet</div>      <div>p/t</div>  <div>{Object.values(breakpointsName)}p_t_<span class="c-secondary">{Object.keys(breakpointsName)}-name</span></div>
            <div>Landscape/Mobile</div>     <div>l/m</div>  <div>{Object.values(breakpointsName)}l_m_<span class="c-secondary">{Object.keys(breakpointsName)}-name</span></div>
            <div>Portrait/Mobile</div>      <div>p/m</div>  <div>{Object.values(breakpointsName)}p_m_<span class="c-secondary">{Object.keys(breakpointsName)}-name</span></div>
        </div>
    </div>
    <div>
        <h3 id="map">Map</h3>
        <p>
            The breakpoint map for the S4 consists of individual CSS modules (files) that are loaded depending on the device and orientation: as an example.
        </p>
        <p>The S4 style gist panel breakpoint map:</p>
        <div class="display--grid grid-template-columns--3 gap--xs">
            <div class="font-weight--600">Breakpoint</div>
            <div class="font-weight--600">Count</div>
            <div class="font-weight--600">Class prefixes</div>
            <hr class="grid-column--full width--100 margin-y--none">
            <div>Landscape/Desktop</div>    <div>no one</div>   <div>l_d_</div>
            <div>Portrait/Desktop</div>     <div>one</div>      <div>l_d_ & p_d_</div>
            <div>Landscape/Tablet</div>     <div>two</div>      <div>l_d_ & l_t_</div>
            <div>Portrait/Tablet</div>      <div>three</div>    <div>l_d_ & p_d_ & l_t_ && p_t_</div>
            <div>Landscape/Mobile</div>     <div>two</div>      <div>l_d_ & p_m_ & l_m_</div>
            <div>Portrait/Mobile</div>      <div>two</div>      <div>l_d_ & p_d_ & p_m_</div>
        </div>
    </div>
    <div>
        <h3 id="documentDimention">Document dimention</h3>
        <div class="alert alert-warning">
            Currently S4 <a href="/utilities" target={'_self'}>utilities</a> have not dependently from screen width. It will be soon.
        </div>
    </div>
</div>
