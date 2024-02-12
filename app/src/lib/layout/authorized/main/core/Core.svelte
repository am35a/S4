<script lang="ts">
    import Button from "src/components/Button.svelte"

    let breakpointsNamesArr = [
        { class: '.' },
        { variable: '--' }
    ]
    let breakpointsName = breakpointsNamesArr[0]
</script>

<h1>Core</h1>
<div class="d-inline-block">
    <h2>Devices checking</h2>
    <p>
        The <a href="https://github.com/matthewhudson/current-device">current-device (v0.10.2)</a>
        library is use to define devices and get other data from device, which install the
        breakpoints dependencies.
    </p>
    <div class="d-inline-grid gtc g-2" style="--gtc: auto 1fr">
        <div class="ta-end fw-600">Device type:</div>
        <div>'mobile', 'tablet', 'desktop', or 'unknown'</div>
        <div class="ta-end fw-600">Device orientation:</div>
        <div>'landscape', 'portrait', or 'unknown'</div>
        <div class="ta-end fw-600">Device OS:</div>
        <div>
            'ios', 'iphone', 'ipad', 'ipod', 'android', 'blackberry', 'windows',
            'macos', 'fxos', 'meego', 'television', or 'unknown'
        </div>
    </div>
</div>
<div class="d-inline-block">
    <h2>Breakpoints</h2>
    <div>
        <h3>Device type</h3>
        <div class="d-grid gtc-3 g-2">
            <div class="fw-600">Breakpoint</div>
            <div class="fw-600">Class prefix</div>
            <div class="fw-600">
                Pattern
                <div class="d-inline-grid gtc g-1" style="--gtc: auto auto">
                    {#each breakpointsNamesArr as object }
                        <Button
                            on:click={() => breakpointsName = object}
                            class="btn-alt fs-xxs"
                            disabled={object === breakpointsName}
                        >{Object.values(object)}{Object.keys(object)}</Button>
                    {/each}
                </div>
            </div>
            <hr class="gc-full w-100 my-0">
            <div>Landscape</div>        <div>l</div>    <div>{Object.values(breakpointsName)}l_<span class="c-secondary">{Object.keys(breakpointsName)}-name</span></div>
            <div>Portrait</div>         <div>p</div>    <div>{Object.values(breakpointsName)}p_<span class="c-secondary">{Object.keys(breakpointsName)}-name</span></div>
            <div class="gc-full"></div>
            <div>Desktop</div>          <div>d</div>    <div>{Object.values(breakpointsName)}d_<span class="c-secondary">{Object.keys(breakpointsName)}-name</span></div>
            <div>Tablet</div>           <div>t</div>    <div>{Object.values(breakpointsName)}t_<span class="c-secondary">{Object.keys(breakpointsName)}-name</span></div>
            <div>Mobile</div>           <div>m</div>    <div>{Object.values(breakpointsName)}m_<span class="c-secondary">{Object.keys(breakpointsName)}-name</span></div>
            <div class="gc-full"></div>
            <div>Landscape/Desktop</div><div>l/d</div>  <div>{Object.values(breakpointsName)}l_d_<span class="c-secondary">{Object.keys(breakpointsName)}-name</span></div>
            <div>Portrait/Desktop</div> <div>p/d</div>  <div>{Object.values(breakpointsName)}p_d_<span class="c-secondary">{Object.keys(breakpointsName)}-name</span></div>
            <div>Landscape/Tablet</div> <div>l/t</div>  <div>{Object.values(breakpointsName)}l_t_<span class="c-secondary">{Object.keys(breakpointsName)}-name</span></div>
            <div>Portrait/Tablet</div>  <div>p/t</div>  <div>{Object.values(breakpointsName)}p_t_<span class="c-secondary">{Object.keys(breakpointsName)}-name</span></div>
            <div>Landscape/Mobile</div> <div>l/m</div>  <div>{Object.values(breakpointsName)}l_m_<span class="c-secondary">{Object.keys(breakpointsName)}-name</span></div>
            <div>Portrait/Mobile</div>  <div>p/m</div>  <div>{Object.values(breakpointsName)}p_m_<span class="c-secondary">{Object.keys(breakpointsName)}-name</span></div>
        </div>
    </div>
    <div>
        <h3>Map</h3>
        <p>
            The breakpoint map for the S4 consists of individual CSS modules (files) that are loaded depending on the device and orientation: as an example.
        </p>
        <p>The S4 style gist panel breakpoint map:</p>
        <div class="d-grid gtc-3 g-2">
            <div class="fw-600">Breakpoint</div>
            <div class="fw-600">Count</div>
            <div class="fw-600">Class prefixes</div>
            <hr class="gc-full w-100 my-0">
            <div>Landscape/Desktop</div><div>no one</div>   <div>l_d_</div>
            <div>Portrait/Desktop</div> <div>one</div>      <div>l_d_ & p_d_</div>
            <div>Landscape/Tablet</div> <div>two</div>      <div>l_d_ & l_t_</div>
            <div>Portrait/Tablet</div>  <div>three</div>    <div>l_d_ & p_d_ & l_t_ && p_t_</div>
            <div>Landscape/Mobile</div> <div>two</div>      <div>l_d_ & p_m_ & l_m_</div>
            <div>Portrait/Mobile</div>  <div>two</div>      <div>l_d_ & p_d_ & p_m_</div>
        </div>
    </div>
    <div>
        <h3>Document dimention</h3>
        <div class="alert alert-warning">
            Currently S4 <a href="/utilities" target={'_self'}>utilities</a> have not dependently from screen width. It will be soon.
        </div>
    </div>
</div>
