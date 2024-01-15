<script lang="ts">
    import Button from 'component/Button.svelte'
    import Precode from 'component/Precode.svelte'

    let ifDisplayGrid: boolean = true
</script>

<div>
    <h4 id="rows">Rows</h4>
    <p>
        To set a number of rows in the <b>grid</b> and <b>inline-grid</b> display container, use the <b>gtr</b> classes. <b>gtr</b> classes exist in the range from 1 to 12, such as <b>gtr-1</b> or <b>gtr-10</b>.
        If need to set different number of rows, specify a variable for <b>gtr</b> with the required number of rows <b>--gtr: 15</b>, like this <Precode class="py-0 px-1 d-inline">class="gtr" style="--gtr: 15"</Precode>.
    </p>
    <div class="d-grid g-5">
        <div class="d-grid g-4">
            <b>Display</b>
            <div class="d-flex fw-wrap g-3">
                <Button
                    on:click={() => ifDisplayGrid = true}
                    class="btn {ifDisplayGrid ? 'active' : ''}"
                    type="button"
                    disabled = {ifDisplayGrid}
                >Grid</Button>
                <Button
                    on:click={() => ifDisplayGrid = false}
                    class="btn {!ifDisplayGrid ? 'active' : ''}"
                    type="button"
                    disabled = {!ifDisplayGrid}
                >Inline grid</Button>
            </div>
        </div>
        <div class="p-4 bgc-positive br">
            <div class="d-{ifDisplayGrid ? 'grid' : 'inline-grid'} gtr-3 g-4 bgc-negative-10 p-4">
                <div class="bgc-negative-10 px-2 py-1">1</div>
                <div class="bgc-negative-10 px-2 py-1">2</div>
                <div class="bgc-negative-10 px-2 py-1">3</div>
            </div>
        </div>
        <div class="d-grid g-4">
            <b>HTML</b>
            <Precode>
                {
`<div class="d-${ifDisplayGrid ? 'grid' : 'inline-grid'} gtr-3">
    <div>1</div>
    <div>2</div>
    <div>3</div>
</div>
`
                }
            </Precode>
        </div>
    </div>
</div>