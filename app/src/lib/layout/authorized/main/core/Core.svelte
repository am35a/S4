<script lang="ts">
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
            <div class="fw-600">Breakpoint</div><div class="fw-600">Class prefix</div><div class="fw-600">Pattern</div>
            <hr class="gc-full w-100 my-0">
            <div>Landscape</div><div>l</div><div>.l:<span class="c-secondary">class-name</span></div>
            <div>Portrait</div><div>p</div><div>.p:<span class="c-secondary">class-name</span></div>
            <div class="gc-full"></div>
            <div>Desktop</div><div>d</div><div>.d:<span class="c-secondary">class-name</span></div>
            <div>Tablet</div><div>t</div><div>.t:<span class="c-secondary">class-name</span></div>
            <div>Mobile</div><div>m</div><div>.m:<span class="c-secondary">class-name</span></div>
            <div class="gc-full"></div>
            <div>Landscape/Desktop</div><div>l/d</div><div>.l:d:<span class="c-secondary">class-name</span></div>
            <div>Portrait/Desktop</div><div>p/d</div><div>.p:d:<span class="c-secondary">class-name</span></div>
            <div>Landscape/Tablet</div><div>l/t</div><div>.l:t:<span class="c-secondary">class-name</span></div>
            <div>Portrait/Tablet</div><div>p/t</div><div>.p:t:<span class="c-secondary">class-name</span></div>
            <div>Landscape/Mobile</div><div>l/m</div><div>.l:m:<span class="c-secondary">class-name</span></div>
            <div>Portrait/Mobile</div><div>p/m</div><div>.p:m:<span class="c-secondary">class-name</span></div>
        </div>
    </div>
    <div>
        <h3>Document dimention</h3>
        <div class="alert alert-warning">
            Currently S4 <a href="/utilities" target={'_self'}>utilities</a> have not dependently from screen width. It will be soon.
        </div>
    </div>
</div>
