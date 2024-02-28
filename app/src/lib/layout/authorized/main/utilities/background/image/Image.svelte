<script lang="ts">
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'
</script>

<section>
    <h3 id="backgroundImage">Image</h3>
    <p>
        Add the <b>bgi</b> class to container before work with background-image and use the <b>--bgi</b> variable to control the property.
    </p>
    <div class="d-grid g-5">
        <div class="d-grid g-5">
            <div class="d-grid g-4">
                <b>Preview</b>
                <div class="d-grid g-3 p-2 bgc-positive br">
                    <div class="bgi p-8" style="--bgi: url(/images/logo.svg)"></div>
                </div>
            </div>
            <div class="d-grid g-4">
                <b>HTML</b>
                <Precode>
                    {
`<div class="bgi" style="--bgi: url(...)"></div>
`
                    }
                </Precode>
            </div>
        </div>
    </div>
</section>
